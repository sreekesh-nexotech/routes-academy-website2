/* frontend/routes-academy/src/components/ui/Courses/CourseContact.tsx */
"use client";

import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  ContactFormData,
  ContactResponse,
  submitContactForm,
} from "@/services/contactService";
import { CheckCircle } from "lucide-react";

interface FullContactFormData extends ContactFormData {
  name: string;
  mobile_no: string;
  email?: string;
  message?: string;
}

const BookACallBanner = () => {
  const [formData, setFormData] = useState<FullContactFormData>({
    name: "",
    mobile_no: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLeadAlreadyExists, setIsLeadAlreadyExists] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  // Reset form after success
  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setFormSubmitted(false);
        setIsLeadAlreadyExists(false);
        setFormData({ name: "", mobile_no: "" });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  // Handle input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setApiError(null);
  };

  // Validation
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.mobile_no.trim()) {
      newErrors.mobile_no = "Please enter your mobile number.";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile_no.replace(/\s/g, ""))) {
      newErrors.mobile_no =
        "Enter a valid 10-digit Indian mobile number (e.g., 9876543210).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    if (!validateForm()) {
      toast.error("Please correct the highlighted errors.");
      return;
    }

    setIsLoading(true);

    try {
      const response: ContactResponse = await submitContactForm({
        name: formData.name,
        mobile_no: formData.mobile_no,
      });

      if (
        response.message?.includes("Lead created:") ||
        response.message?.includes("Lead already exists:")
      ) {
        setFormSubmitted(true);
        setIsLeadAlreadyExists(
          response.message.includes("Lead already exists:")
        );
        toast.success(response.message || "Message sent successfully!");
      } else {
        setApiError(response.message || "Failed to send message.");
        toast.error(response.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setApiError("Something went wrong. Please try again later.");
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#104EFF] rounded-lg mt-10">
      <div className="container mx-auto">
        <div className="grid gap-[2.5rem] lg:gap-[2.5rem] p-[1rem] md:p-[2rem] lg:p-[5rem]">
          {/* Left Text Section */}
          <div>
            <h4 className="text-[1.375rem] md:text-[2rem] text-[#FFFFFF] font-semibold leading-[2.375rem] mb-[1.1875rem]">
              Still have doubts? Let’s clear them in a friendly 5-min call.
            </h4>
            <h5 className="font-medium text-[1.125rem] md:text-[1.3125rem] text-[#FFFFFF] leading-[1.875rem]">
              We won’t force you to buy; we care how it helps.
            </h5>
          </div>

          {/* Right Form Section */}
          <div>
            {formSubmitted ? (
              <div
                className={`p-8 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-500 ${
                  isLeadAlreadyExists
                    ? "text-[#FFFFFF] bg-[#1E3A8A]"
                    : "text-green-100 bg-green-600"
                }`}
              >
                <CheckCircle
                  className={`w-14 h-14 mb-4 ${
                    isLeadAlreadyExists ? "text-white" : "text-white"
                  }`}
                />
                <h4 className="text-2xl font-bold mb-2">
                  {isLeadAlreadyExists
                    ? "Lead Already Registered!"
                    : "Thank You!"}
                </h4>
                <p className="text-lg">
                  {isLeadAlreadyExists
                    ? "We already have your details. We’ll be in touch soon."
                    : "Your message has been received! We’ll contact you shortly."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-3 gap-[1.4375rem] items-center">
                  <div>
                    <input
                      className={`h-[3.1875rem] w-full bg-[#FFFFFF] rounded-[.5rem] border ${
                        errors.name
                          ? "border-red-500 bg-red-50"
                          : "border-[#EFF6FF]"
                      } focus:outline-none indent-4`}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      disabled={isLoading}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-100 mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      className={`h-[3.1875rem] w-full bg-[#FFFFFF] rounded-[.5rem] border ${
                        errors.mobile_no
                          ? "border-red-500 bg-red-50"
                          : "border-[#EFF6FF]"
                      } focus:outline-none indent-4`}
                      type="text"
                      name="mobile_no"
                      value={formData.mobile_no}
                      onChange={handleChange}
                      placeholder="Phone number"
                      disabled={isLoading}
                    />
                    {errors.mobile_no && (
                      <p className="text-sm text-red-100 mt-1">
                        {errors.mobile_no}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`cursor-pointer w-full py-3 rounded-[0.3125rem] font-medium text-[1rem] text-[#FFFFFF] bg-[#172554] transition-all duration-300 ${
                        isLoading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                    >
                    {isLoading ? "Submitting..." : "Send"}
                  </button>

                </div>

                
                {apiError && (
                  <p className="p-3 bg-red-100 text-red-800 rounded-lg text-sm font-medium">
                    {apiError}
                  </p>
                )}

                
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookACallBanner;
