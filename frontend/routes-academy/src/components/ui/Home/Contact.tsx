"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Loader2, CheckCircle } from "lucide-react";
import toast from "react-hot-toast";
import {
  ContactFormData,
  ContactResponse,
  submitContactForm,
} from "@/services/contactService";
import Button from "@/components/elements/Button";

interface FullContactFormData extends ContactFormData {
  name: string;
  mobile_no: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FullContactFormData>({
    name: "",
    mobile_no: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLeadAlreadyExists, setIsLeadAlreadyExists] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Update input instantly (no lag)
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setApiError(null);
  };

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
    <section className="py-16 sm:py-24 bg-[#F1F5F9] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-20 items-start justify-center">
        {/* Left Section */}
        <div className="space-y-3">
          <p className="text-xl font-medium text-[#525252]">Still have doubts?</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold  text-[#1E3A8A] leading-tight">
            Get in touch with us
          </h2>
          <p className="text-lg text-gray-600 max-w-lg">
            Got questions? Our dedicated support team is ready to guide you towards your dream career. Reach out and unlock your potential!
          </p>
          <div className="pt-4 space-y-4">
            <ContactDetail
              icon={<Mail className="w-6 h-6 text-[#1E3A8A]" />}
              text="contact@company.com"
              link="mailto:contact@company.com"
            />
            <ContactDetail
              icon={<Phone className="w-6 h-6 text-[#1E3A8A]" />}
              text="(123) 456 - 789"
              link="tel:123456789"
            />
            <ContactDetail
              icon={<MapPin className="w-6 h-6 text-[#1E3A8A]" />}
              text="794 Mcallister St San Francisco, 94102"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className=" ">
          <h3 className="text-center text-xl font-medium text-[#525252] mb-6 max-w-sm mx-auto">
            We won&apos;t force you to buy, we care how it helps.
          </h3>

          {formSubmitted ? (
            <div
              className={`p-8 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-500 ${
                isLeadAlreadyExists
                  ? " text-[#1E3A8A]"
                  : " text-green-800"
              }`}
            >
              <CheckCircle
                className={`w-16 h-16 mb-4 ${
                  isLeadAlreadyExists ? "text-[#1E3A8A]" : "text-green-500"
                }`}
              />
              <h4 className="text-2xl font-bold mb-2">
                {isLeadAlreadyExists
                  ? "Lead Already Registered!"
                  : "Thank You!"}
              </h4>
              <p className="text-lg">
                {isLeadAlreadyExists
                  ? "We already have your details. We'll be in touch soon."
                  : "Your message has been received! We will contact you shortly."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <FormInput
                name="name"
                label="Your Name"
                placeholder="Enter your name"
                error={errors.name}
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
              />
              <FormInput
                name="mobile_no"
                label="Phone Number"
                placeholder="Enter your mobile number"
                error={errors.mobile_no}
                value={formData.mobile_no}
                onChange={handleChange}
                disabled={isLoading}
              />

              {apiError && (
                <p className="p-3 bg-red-100 text-red-800 rounded-lg text-sm font-medium">
                  {apiError}
                </p>
              )}

              <Button
                onClick={handleSubmit}
                isLoading={isLoading}
                disabled={isLoading}
                className="w-full mt-auto min-h-[3rem]"
                >
                Submit Form
               </Button>

            </form>
          )}
        </div>
      </div>
    </section>
  );
};

// ✅ Reusable Components
const FormInput: React.FC<{
  name: string;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}> = ({ name, label, placeholder, value, error, onChange, disabled }) => (
  <div>
    <label
      htmlFor={name}
      className="block text-gray-700 font-medium mb-1 ml-1 text-sm"
    >
      {label}
    </label>
    <input
      type="text"
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`w-full p-4 rounded-xl border text-base transition-all duration-300
        focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
        ${
          error
            ? "border-red-500 bg-red-50"
            : "border-gray-300 bg-white hover:border-indigo-300"
        }`}
    />
    {error && (
      <p className="mt-1 text-sm text-red-600 font-medium ml-1">{error}</p>
    )}
  </div>
);

const ContactDetail: React.FC<{
  icon: React.ReactNode;
  text: string;
  link?: string;
}> = ({ icon, text, link }) => (
  <div className="flex items-center space-x-3">
    {icon}
    {link ? (
      <a
        href={link}
        className="text-lg text-gray-700 hover:text-[#1E3A8A] font-medium transition duration-150"
      >
        {text}
      </a>
    ) : (
      <span className="text-lg text-gray-700 font-medium">{text}</span>
    )}
  </div>
);

export default Contact;
