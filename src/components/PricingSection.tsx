import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const PRICING_PLANS = [
  {
    stats: [
      {
        title: "Premium Monthly",
        subtitle: "Billed once a month",
        price: "€9.99",
        duration: "/month",
      },
      {
        title: "Premium Quarterly",
        subtitle: "€24.99 billed every 3 months",
        price: "€8.33",
        duration: "/month",
        discountLabel: "SAVE 20%",
      },
    ],

    features: [
      "Lifetime access to all professional templates",
      "Advanced customization options",
      "Export formats: PDF, Word, and Plain Text ",
      "Real-time AI content suggestions",
      "ATS compatibility check",
      "Pro resume sections",
      "No branding (watermark-free downloads)",
      "Unlimited section items",
      "Priority customer support",
      "Thousands of design options",
    ],
    buttonLabel: "Build My Resume",
    highlight: "Popular Choice",
  },
  {
    stats: [
      {
        title: "Premium Lifetime",
        subtitle: "One-time payment",
        price: "€49.99",
        duration: "",
      },
    ],

    features: [
      "Lifetime access to all professional templates",
      "Advanced customization options",
      "Export formats: PDF, Word, and Plain Text ",
      "Real-time AI content suggestions",
      "ATS compatibility check",
      "Pro resume sections",
      "No branding (watermark-free downloads)",
      "Unlimited section items",
      "Priority customer support",
      "Thousands of design options",
    ],
    buttonLabel: "Unlock Lifetime Access",
    highlight: "Best Value",
  },
  {
    stats: [
      {
        title: "Professional",
        subtitle: "One-time payment",
        price: "€250",
        duration: "",
      },
    ],

    features: [
      "One tailored CV customized for a specific job description or career goal",
      "One tailored cover letter for job applications",
      "LinkedIn profile optimization ",
      "Interview preparation (mock interview session, strategies, and tips)",
      "Consultation call (15-30 minutes)",
      "Follow-up support (up to 2 rounds of revisions for CV, cover letter, or LinkedIn profile)",
    ],
    buttonLabel: "Get Personalized Support",
    highlight: "Tailored for Professionals” badge",
    discountLabel: "",
  },
  {
    stats: [
      {
        title: "Free (Starter Plan)",
        price: "$0",
        duration: "/month",
      },
    ],

    features: [
      "Access to 5 free CV templates",
      "Unlimited CV creation and downloads (with watermark)",
      "Basic customization options",
      "Export as PDF",
      "OptimCV branding (watermark included)",
    ],
    buttonLabel: "Try for Free",
    outline: true,
    highlight: "",
    discountLabel: "",
  },
];

const PricingCard = ({ plan }: any) => {
  const [index, setIndex] = useState(0);
  const borderColor = plan.stats[index].title.includes("Monthly")
    ? "border-turquoise-500"
    : plan.stats[index].title.includes("Lifetime")
    ? "border-yellow-500"
    : plan.stats[index].title.includes("Professional")
    ? "border-teal-700"
    : "border-gray-300";
  return (
    <Card
      className={`relative z-10 rounded-[0.5em] border ${borderColor} border-2 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
    >
      {plan.highlight && (
        <div className="absolute -top-[3%] right-[2%]">
          <div className="bg-platformGreen px-[1em] py-1 text-[0.3em] text-white rounded-full transform rotate-12">
            {plan.highlight}
          </div>
        </div>
      )}

      <CardHeader className="pb-0">
        <div className="flex flex-row justify-between">
          {/* Title */}
          <div className="bg-gray-200 py-1.5 px-2 rounded-md w-fit">
            <CardTitle className="text-[0.3em] font-medium text-black uppercase">
              {plan.stats[index].title}
            </CardTitle>
          </div>

          {/* Discount Label */}
          {plan.stats[index].discountLabel && (
            <div className="bg-[#FEB150] py-1.5 px-2 rounded-md w-fit">
              <CardTitle className="text-[0.3em] font-medium text-black uppercase">
                {plan.stats[index].discountLabel}
              </CardTitle>
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-col items-baseline">
          <div>
            <div>
              <span className="text-[1em] font-bold">
                {plan.stats[index].price}
              </span>
              {plan.stats[index].duration && (
                <span className="ml-1 text-[0.4em] text-gray-600">
                  {plan.stats[index].duration}
                </span>
              )}
            </div>
            <CardTitle className="text-[0.28em] font-medium text-gray-500">
              {plan.stats[index].subtitle}
            </CardTitle>
          </div>
        </div>

        {/* Additional savings text for "Premium Monthly" */}
        {/* {plan.stats[index].title.includes("Monthly") && (
          <p className="text-[0.3em] text-gray-500 mt-1">
            Save 17% with Quarterly Plan.
          </p>
        )} */}
        {plan.stats.length > 1 && (
          <div className="flex flex-row gap-2 cursor-pointer pt-2">
            <span
              onClick={() => setIndex(0)}
              className={`text-[0.28em] font-medium pb-1 transition-all ${
                index === 0
                  ? "border-b-2 border-platformGreen text-platformGreen"
                  : "text-gray-600"
              }`}
            >
              Monthly
            </span>
            <span
              onClick={() => setIndex(1)}
              className={`text-[0.28em] font-medium pb-1 transition-all ${
                index === 1
                  ? "border-b-2 border-platformGreen text-platformGreen"
                  : "text-gray-600"
              }`}
            >
              Quarterly
            </span>
          </div>
        )}
      </CardHeader>

      <CardContent className="pt-[0vh]">
        <div className="py-[0.5em] space-y-[0.3em]">
          {plan.features.map((feature: any) => (
            <div key={feature} className="flex items-start">
              <Check className="mr-[0.3em] h-[0.5em] w-[0.5em] text-platformGreen" />
              <span className="text-[0.3em] text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>

      {/* Button at the bottom */}
      <div
        className={`absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[80%] text-[0.4em] py-[0.5em] rounded-[0.5em] flex items-center justify-center cursor-pointer transition-all duration-200 ${
          plan.outline
            ? "bg-white border border-gray-500 text-black hover:bg-gray-200"
            : "bg-platformGreen hover:bg-[#00B392] text-white"
        }`}
      >
        {plan.buttonLabel}
      </div>
    </Card>
  );
};

const PricingSection = () => {
  // const [billingInterval, setBillingInterval] = useState("yearly");

  return (
    <div className="px-[5vw]">
      <div className="mt-[10vh] grid gap-[0.5em] lg:grid-cols-4">
        {PRICING_PLANS.map((plan) => (
          <PricingCard key={plan.stats[0].title} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
