"use client";

import { useState } from "react";
import Image from "next/image";

interface Faq {
  question: string;
  answer: string;
}

const FaqItem: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: Faq[] = [
    {
      question:
        "What makes Route Upskill Academy the best upskill academy in Kerala?",
      answer:
        "Route Upskill Academy is recognized as the best upskill academy in Kerala because of our industry-leading 90% placement record and our focus on global standards. We bridge the talent gap by providing international certifications from giants like IBM, Microsoft, SAP, and Zoho. By integrating advanced AI tools into every course, we ensure our students are not just educated, but are the most corporate-ready professionals in the state.",
    },
    {
      question: "Where is the best upskill academy in Calicut located?",
      answer:
        "The best upskill academy in Calicut is located at Tower 1, 6th Floor, HiLite Business Park. This strategic location at the heart of Calicut's premier business hub provides our students with a professional corporate atmosphere and direct networking opportunities with leading tech firms, making it the top destination for premium upskilling in North Kerala.",
    },
    {
      question: "Which is the best upskill academy in Kerala for 2026?",
      answer:
        "Route Academy is widely recognized as the best upskill academy in Kerala due to its unique AI-integrated curriculum and corporate-aligned training. Unlike traditional centers, we focus on high-demand sectors like Data Analytics, Finance, and Logistics, ensuring our students are ready for the global job market.",
    },
    {
      question:
        "Where can I find the best upskill academy in Calicut for professional growth?",
      answer:
        "If you are looking for the best upskill academy in Calicut, Route Academy is strategically located in HiLite Business Park. Being at the heart of Calicut's tech hub allows our students to learn in a professional environment, surrounded by top-tier companies and networking opportunities.",
    },
    {
      question:
        "Does the best upskill academy in Calicut offer placement assistance?",
      answer:
        "Yes, as the best upskill academy in Calicut, Route Academy provides 100% placement support and 1:1 mentorship. Our graduates consistently secure roles in top MNCs with salary packages ranging from ₹7L to ₹15L LPA, setting a benchmark for career transformation in North Kerala.",
    },
    {
      question:
        "How does Route Academy differ from other upskill academies in Kerala?",
      answer:
        "Route Academy stands out as the best upskill academy in Kerala by pioneering an AI-integrated learning model. We don't just teach software; we teach you how to use AI tools to automate and optimize tasks in Accounting, Supply Chain, and Data Management, giving you a massive competitive edge.",
    },
    {
      question:
        "Why choose an upskill academy in HiLite Business Park, Calicut?",
      answer:
        "Choosing the best upskill academy in Calicut within HiLite Business Park ensures you aren't just a student, but a professional in training. This location provides the corporate atmosphere, modern infrastructure, and industry proximity required to transition seamlessly into high-paying corporate roles.",
    },
    {
      question:
        "Are the certifications from Route Academy globally recognized?",
      answer:
        "Absolutely. As the best upskill academy in Kerala, we partner with global leaders like IBM, Microsoft, SAP, and Zoho. These industry-validated certifications ensure our students are recognized by employers worldwide, from the GCC to Europe.",
    },
    {
      question:
        "Why does Route Upskill Academy provide AI-integrated courses exclusively?",
      answer:
        "As the best upskill academy in Kerala, we recognize that traditional skills are no longer enough. Route Upskill Academy provides AI-integrated courses only because the 2026 job market demands AI-augmented professionals. Whether it’s Accounting, Data, or Logistics, we teach you how to use Generative AI and automation to do 8 hours of work in 2, making our graduates the most sought-after talent in the Calicut tech ecosystem and beyond.",
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
            src="https://routesacademy.b-cdn.net/icons/faq-icon.svg"
            alt="Route Academy Calicut FAQ"
            width={10}
            height={10}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-[2vw] md:gap-[8vw] w-full">
          {/* Heading Text */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left max-w-5xl flex-wrap">
            <h2 className="font-poppins font-semibold text-[2.8rem] md:text-[3.2rem] leading-[3.5rem] tracking-[-0.0075em] text-[#172554]">
              Quick Info & FAQs
            </h2>
            <p className="font-onest font-normal mt-[2.5vh] text-[1.5rem] md:text-[1.3rem] leading-[1.75rem] text-[#404040] text-center">
              These are the common doubts that people usually have. If it
              doesn&apos;t help you, don&apos;t worry connect with us! We always
              love to help and clear your doubts.
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
