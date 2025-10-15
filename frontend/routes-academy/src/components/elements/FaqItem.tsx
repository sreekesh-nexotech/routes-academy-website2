"use client";

import { useState } from "react";
import Image from "next/image";
import faqIcon from "../../../public/faq-icon.svg"; // Place this in /public/figma/faq-icon.svg

interface Faq {
  question: string;
  answer: string;
}

const FaqItem: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: Faq[] = [
    {
      question: "Did these courses have mentorship support?",
      answer:
        "Our expert mentors aren't just instructors—they're industry veterans who provide personalized career guidance, transforming your learning into tangible professional success.",
    },
    {
      question: "What are the placement supports provided?",
      answer:
        "We provide comprehensive placement support including resume building, interview preparation, and direct connections with hiring partners.",
    },
    {
      question: "Are these certificates valid / Government approved?",
      answer:
        "Yes, our certificates are recognized by industry leaders and approved by relevant government bodies including NSDC and other certification partners.",
    },
    {
      question: "Is EMI option available for these courses?",
      answer:
        "Yes, we offer flexible EMI options to make our courses accessible to everyone. Contact us for more details on payment plans.",
    },
  ];

  return (
    <section className="py-[6vh] px-[4vw] md:px-[10vw] flex flex-col items-center gap-[8vh] w-full">
      {/* Container */}
      <div className="flex flex-col items-center gap-[10vh] w-full">
        {/* Heading Section */}

        {/* Icon */}
        <div className="w-[10vh] h-[10vh]  my-[4vh] min-w-[120px] min-h-[120px] md:w-[13vh] md:h-[13vh] md:min-w-[180px] md:min-h-[180px]">
          <Image
            src={faqIcon}
            alt="FAQ"
            className="w-full h-full object-contain"
            priority
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-[2vw] md:gap-[8vw] w-full">
          {/* Heading Text */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left max-w-5xl flex-wrap">
            <h2 className="font-poppins font-semibold text-[2.8rem] md:text-[3.2rem] leading-[3.5rem] tracking-[-0.0075em] text-[#172554]">
              Frequently Asked Questions
            </h2>
            <p className="font-onest font-normal mt-[2.5vh] text-[1.5rem] md:text-[1.3rem] leading-[1.75rem] text-[#404040] text-center">
              These are the common doubts that people usually have. If it
              doesn't help you, don't worry connect with us! We always love to
              help and clear your doubts.
            </p>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-[1.5em] w-full max-w-6xl">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={index}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`rounded-xl px-[2vw] py-[1.5em] cursor-pointer transition-colors ${
                  isOpen ? "bg-[#DBEAFE]" : "bg-[#F5F5F5] hover:bg-[#E2E8F0]"
                }`}
              >
                <h3
                  className={`font-onest font-medium text-[1.3rem] md:text-[1.5rem] leading-[2.1rem] tracking-[-0.0071em] ${
                    isOpen ? "text-[#172554]" : "text-[#525252]"
                  }`}
                >
                  {faq.question}
                </h3>
                {isOpen && (
                  <p className="font-onest font-normal text-[1.1rem] md:text-[1.25rem] leading-[1.9rem] text-[#404040] mt-[0.5em]">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqItem;
