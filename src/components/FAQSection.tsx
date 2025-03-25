"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import Button from "./ui/Custom Ui/Button";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  const faqs = [
    {
      id: "login",
      question: "How do I Login?",
      answer:
        "To log in, click on the 'Login' button at the top of the page. Enter your email and password, then click 'Submit.' If you're a new user, please create an account first. If you've forgotten your password, you can reset it by clicking 'Forgot Password?' and following the instructions sent to your email.",
    },
    {
      id: "costs",
      question: "What are the Costs?",
      answer: "Our pricing information can be found on the pricing page.",
    },
    {
      id: "create-account",
      question: "How do I create an account?",
      answer:
        "Creating an account is simple. Click the 'Sign Up' button and follow the instructions.",
    },
    {
      id: "template",
      question: "How do I change my template?",
      answer: "You can change your template in the account settings section.",
    },
    {
      id: "cancel",
      question: "How do I cancel my Subscription?",
      answer:
        "To cancel your subscription, go to your account settings and select 'Subscription'.",
    },
  ];

  return (
    <div className="mx-auto px-[5vw] py-[5vh] text-[7vw] md:text-[4vw] lg:text-[3vw]">
      <div className="grid gap-[0.5em] md:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-[1em]">
          <h1 className="text-[1em] font-bold leading-tight">
            Have Questions? We've Got Answers!
          </h1>
          <p className="text-[0.6em] text-muted-foreground">
            Everything you need to know about OptimCV, all in one place
          </p>
          <div className="flex gap-4">
            <Button text={"More Questions"} />
            <Button text={"Contact Us"} secondary />
          </div>
        </div>

        {/* Right Column - FAQ Accordion with Animation */}
        <div className="space-y-[0.5em]">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-gray-400 overflow-hidden"
            >
              <button
                onClick={() => handleToggle(faq.id)}
                className="flex w-full justify-between items-center py-[0.2em] text-left"
              >
                <h1 className="text-[0.5em] font-semibold">{faq.question}</h1>
                {activeIndex === faq.id ? (
                  <Minus className="h-[0.5em] w-[0.5em] flex-shrink-0" />
                ) : (
                  <Plus className="h-[0.5em] w-[0.5em] flex-shrink-0" />
                )}
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="pb-[0.5em] text-[0.5em] text-gray-600"
                    style={{ fontFamily: "Cairo, serif" }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
