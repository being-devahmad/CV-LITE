import { NavLink } from "react-router-dom";
import logo from "@/assets/icons/optimCvLogo.png";
import { Facebook, Youtube } from "lucide-react";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800  pt-[5vh] border-t px-[5vw] text-[12vw] md:text-[6vw] lg:text-[3vw] text-white">
      <div className="mx-auto w-full">
        <div className="md:flex md:justify-between md:gap-[0.3em] text-[0.3em]">
          {/* Left Section: Logo and Subscription */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0 pr-4">
            <NavLink to="/" className="flex items-center">
              <img
                src={logo}
                alt="OptimCV Logo"
                className="self-center md:w-[15vw] lg:w-[10vw]"
                draggable={false}
              />
            </NavLink>
            <div className="inline-flex flex-col">
              <p className="mt-[0.5em] italic">
                Helping job seekers land their dream jobs since 2022
              </p>
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-platformGreen to-transparent" />
            </div>
            <p className="mt-[0.5em]">
              At OptimCV, we redefine career growth with cutting-edge tools
              tailored for professionals worldwide. Our mission: empower
              individuals to land their dream jobs effortlessly. From
              ATS-friendly resumes to industry-specific templates, we're here to
              simplify your job search journey and amplify your success.
            </p>
          </div>

          {/* Right Section: Footer Links */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-8 sm:grid-cols-2 justify-center]">
            <div className="space-y-[1em]">
              <h2 className="font-semibold uppercase">Career Tools</h2>
              <ul className="text-white/80 font-medium">
                {[
                  { to: "/select", text: "Resume" },
                  { to: "/", text: "Cover Letter" },
                  { to: "/career", text: "Career Blog" },
                  { to: "/pricing", text: "Pricing" },
                  { to: "/company", text: "Business Solutions" },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="group flex items-center text-[1em]"
                  >
                    <span className=" scale-100 group-hover:scale-150 mr-[0.7em] group-hover:text-platformGreen transition-all duration-200">
                      ●
                    </span>
                    <NavLink
                      to={item.to}
                      className="group-hover:text-platformGreen transition-all duration-200"
                    >
                      {item.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-[1em]">
              <h2 className="font-semibold uppercase ">Explore OptimCV</h2>
              <ul className="text-white/80 font-medium">
                {[
                  { to: "/about-us", text: "Why OptimCV?" },
                  { to: "/guide", text: "Our Features" },
                  { to: "/press-kit", text: "AI Tools Overview" },
                  { to: "/press-kit", text: "Resume Templates" },
                  { to: "/press-kit", text: "Cover Letter Templates" },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="text-[1em] group flex items-center"
                  >
                    <span className="scale-100 group-hover:scale-150 mr-[0.7em] group-hover:text-platformGreen transition-all duration-200">
                      ●
                    </span>
                    <NavLink
                      to={item.to}
                      className="group-hover:text-platformGreen transition-all duration-200"
                    >
                      {item.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-white to-transparent my-[1em]" />

        {/* Social Media & Bottom Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Social Media Icons */}
          <div className="flex gap-4">
            {[
              { icon: InstagramLogoIcon, label: "Instagram" },
              { icon: Facebook, label: "Facebook" },
              { icon: Youtube, label: "YouTube" },
              { icon: TwitterLogoIcon, label: "Twitter" },
            ].map(({ icon: Icon, label }, index) => (
              <NavLink
                to="#"
                key={index}
                aria-label={label}
                className="w-[0.7em] h-[0.7em] p-[0.1em] rounded-full relative border border-gray-200 flex items-center justify-center text-white hover:border-platformGreen hover:text-platformGreen hover:scale-110 transition-all duration-300"
              >
                <Icon className="w-full h-full" />
              </NavLink>
            ))}
          </div>

          {/* Footer Links */}
          <div className="flex gap-[5em] mt-[1em] sm:mt-0 text-[0.3em]">
            <NavLink
              to="/privacy-policy"
              className="text-white hover:text-platformGreen transition-all duration-200"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/terms-and-conditions"
              className="text-white hover:text-platformGreen transition-all duration-200"
            >
              Terms & Conditions
            </NavLink>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-4 text-center text-[0.3em] text-white/70">
          All Rights Reserved.{" "}
          <span className="text-platformGreen font-medium">OptimCV</span> © 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
