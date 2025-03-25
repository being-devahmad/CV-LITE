import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What makes OptimCV the perfect tool for job seekers?",
      answer:
        "OptimCV offers AI-powered tools, ATS-friendly templates, and expert guidance to help you craft resumes that stand out to recruiters. Tailored resumes help highlight relevant skills and achievements for specific roles, increasing your chances of passing ATS and getting noticed by recruiters.",
    },
    {
      question: "How do I create a resume using OptimCV?",
      answer:
        "Simply choose a template, use our AI suggestions to add content, and customize sections to match your skills and experience. Export it in minutes!",
    },
    {
      question: "Why should I tailor my resume for every job application?",
      answer:
        "Tailored resumes help highlight relevant skills and achievements for specific roles, increasing your chances of passing ATS and getting noticed by recruiters.",
    },
    {
      question: "Can I use OptimCV on mobile devices?",
      answer:
        "Absolutely! OptimCV is mobile-friendly, allowing you to create and edit resumes on the go.",
    },
    {
      question: "What is included in the free version of OptimCV?",
      answer:
        "The free version gives access to basic resume templates, a cover letter builder, and tips to get started with job applications.",
    },
    {
      question: "Is OptimCV suitable for all industries?",
      answer:
        "Yes! OptimCV offers templates and tools tailored for over 50+ industries, ensuring you find the perfect match for your career.",
    },
  ];

  return (
    <div className="w-full py-12 text-[10vw] md:text-[5vw] lg:text-[4vw]">
      <div className="mb-[5vh] leading-none">
        <h1 className="text-[1em] font-bold mb-4 text-gray-900 text-center">
          Frequently Asked Questions About{" "}
          <span className="text-platformGreen">OptimCV</span>
        </h1>
      </div>

      <div className="w-full space-y-[2vh]">
        {faqData.map((faq, index) => (
          <Question
            key={index}
            faq={faq}
            isExpanded={activeIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}

export function Question({ faq, isExpanded, onClick }: any) {
  return (
    <div className="overflow-hidden border-b border-gray-300">
      <div
        className={`flex items-center justify-start text-[0.6em] font-medium ${
          isExpanded ? "text-platformGreen" : "text-gray-900"
        } sm:hover:text-platformGreen gap-3 cursor-pointer transition-all`}
        onClick={onClick}
      >
        <span className="font-bold mr-[1vw]">{isExpanded ? "●" : "+"}</span>
        {faq.question}
      </div>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-gray-700 text-[0.5em] px-6 overflow-hidden ml-[2vw]"
          >
            {faq.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
