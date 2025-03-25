import arraowImg from "@/assets/illustrations/arrow.png";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Copy, History, Key, User } from "lucide-react";

import Rublk from "@/assets/icons/brands/RUBLK.png";
import Slant from "@/assets/icons/brands/Slant.png";
import Marco from "@/assets/icons/brands/Marco..png";
import Cirrulean from "@/assets/icons/brands/Cirrulean.png";
import CareerSection from "./CoverSection";
import Button from "@/components/ui/Custom Ui/Button";

const features = [
  {
    icon: User,
    title: "Avoids grammar & spelling mistakes",
    description:
      "Enhancv Resume Editor automatically detects grammar & spelling mistakes and prevents you from sending a resume with errors.",
  },
  {
    icon: Key,
    title: "Simultaneous editing",
    description:
      "Create and update multiple resumes at the same time with a single account that can be shared among your team members.",
  },
  {
    icon: Bot,
    title: "Content suggestions that work",
    description:
      "Speed up editing process with Enhancv's AI content suggestions that are tailored to your document. Resumes will never sound robotic.",
  },
  {
    icon: Copy,
    title: "One-click create multiple versions",
    description:
      "Creating a new version of the same template has never been easier. Just duplicate the document and get instant suggestions for rewriting.",
  },
  {
    icon: History,
    title: "Keep track of changes with edit history",
    description:
      "All changes are kept in the history, accessible to everyone. You can always revert to an older version and go to a newer.",
  },
];

const clients = [
  { name: "RUBLK", logo: Rublk },
  { name: "Slant", logo: Slant },
  { name: "Marco", logo: Marco },
  { name: "Cirrulean", logo: Cirrulean },
  { name: "Marco", logo: Marco },
];

const Company = () => {
  return (
    <div className="overflow-hidden pt-[10vh] text-[8vw] md:text-[5vw] lg:text-[4vw]">
      {/* Hero Banner */}
      <div className="relative pb-[5vh]">
        {/* Green gradient - top right */}
        <div className="absolute top-0 right-0 w-[50vmax] h-[50vmax] sm:right-[-20%] -z-10">
          <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,rgba(48,208,173,0.51)_0%,rgba(255,255,255,1)_70%)]" />
        </div>

        {/* Blue gradient - bottom left */}
        <div className="absolute bottom-0 left-0 w-[50vmax] h-[50vmax] hidden lg:block sm:left-[-20%] -z-10">
          <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,rgba(20,145,185,0.49)_0%,rgba(255,255,255,1)_70%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto px-[5vw] pt-[10vh]">
          <div className="text-center space-y-[1em] p-[5%] rounded-[0.5em] bg-white/40 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20">
            <div className="inline-flex gap-3 items-center justify-center relative">
              {/* Arrow */}
              <div className="absolute -left-[20%] -rotate-12 hidden md:block">
                <img src={arraowImg} alt="" className="w-[10vw]" />
              </div>

              {/* Heading */}
              <h1 className="text-[0.8em] font-semibold  leading-tight ">
                <span className="text-[#4CD4C0]">Empower</span> Your Workforce
                with <br />
                <span className="text-[#0098DA]">Expert-Driven</span> Resume
                Solutions
                <br />
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-[0.4em] max-w-3xl mx-auto">
              Streamline your hiring process and help your employees succeed
              with tailored resume consultancy and professional career tools,
              designed specifically for your organization’s needs.
            </p>

            {/* CTA Button */}
            <Button text="Get in Touch – Book a Free Consultation" />
          </div>
        </div>
      </div>

      {/* Resume Section */}

      <CareerSection />

      {/* Banner */}
      <div className="relative px-[5vw]">
        <div className="absolute top-0 right-[50%] sm:right-[-30%] w-[50vmax] h-[50vmax]  -z-10">
          <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,rgba(20,145,185,0.49)_0%,rgba(255,255,255,1)_70%)]" />
        </div>
        {/* Content */}
        <div className="relative py-[1em] flex flex-col justify-center items-center gap-[0.5em]">
          <h1 className="text-[0.7em] font-bold leading-tight text-gray-800 text-center px-4">
            Get recruited faster. Accelerate your job search now with our fast
            online <span className="text-platformGreen">CV builder.</span>
          </h1>

          <p className="text-[0.5em] font-medium text-center px-4">
            Experience the power of streamlined{" "}
            <span className="text-platformGreen">OptimCV</span> solutions
          </p>
          <Button text="Create Now" />

          <p className="text-[0.4em] text-gray-600 mx-auto text-center px-[10vw]">
            Enhancv resumes and cover letters are vigorously tested against
            major ATS systems to ensure complete parsability.
          </p>
        </div>
      </div>

      {/* Features */}

      <div className="mx-auto px-[5vw] pb-[5vh]">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-platformGreen/40 bg-platformGreen/5 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <feature.icon className="h-[1em] w-[1em] text-platformGreen" />
                </div>
                <h3 className="mb-[0.5em] text-[0.5em] font-bold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-[0.3em]">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Clients success */}
      <section className="mx-auto px-[5vw] pb-[5vh]">
        <div className="mx-auto text-center">
          <h2 className="mb-[0.5em]">
            <span className="block text-[0.8em] font-bold text-platformGreen">
              Proven Success
            </span>
            <span className="block text-[0.8em] font-bold">
              Where Our <span className="text-sky-500">Clients</span> Have
              Landed
            </span>
          </h2>

          <p className="text-gray-600 mb-[1em] text-[0.4em] mx-auto px-[10vw]">
            We are proud to have helped professionals secure roles at some of
            the world's most respected companies, including:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center mb-12">
            {clients.map((client, index) => (
              <div key={index} className="w-32">
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  className="w-full h-auto grayscale"
                />
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-[0.4em] mx-auto px-[10vw]">
            From startups to global enterprises, our clients success is proof of
            what is possible when your career potential is unlocked.
          </p>
        </div>
      </section>

      {/* Testimonials */}

      <div className="relative px-[5vw]">
        <div className="absolute top-0 left-[50%] sm:left-[-30%] w-[50vmax] h-[50vmax]  -z-10">
          <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,rgba(20,145,185,0.49)_0%,rgba(255,255,255,1)_70%)]" />
        </div>
        <Testimonials />
      </div>

      {/* Hero Section */}
      <div>
        <HeroSection />
      </div>

      {/* FAQ Section */}
      <div>
        <FAQSection />
      </div>
    </div>
  );
};

export default Company;
