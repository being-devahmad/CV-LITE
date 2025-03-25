import { NavLink } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import logo from "@/assets/icons/optimCvLogo.png";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import Button from "../ui/Custom Ui/Button";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { LucideYoutube, SlackIcon } from "lucide-react";
import { Button as NextButton } from "@nextui-org/button";

const MobileNavbar = () => {
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, window.innerHeight * 0.2], [0, 1]);

  return (
    <div className="md:hidden">
      <motion.div
        className={`nav-container flex flex-col  justify-start items-center fixed w-full z-[1000]`}
        initial={{ height: "auto" }}
        animate={{
          height: isOpen ? "90vh" : "auto ",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute w-full h-full bg-white border-b border-platformGreen/50"
          style={{ opacity: isOpen ? 1 : opacity }}
        ></motion.div>
        <div
          className={`w-full flex justify-between items-center relative pl-[5vw]`}
        >
          <NavLink
            to={"/"}
            className={"w-[30%] flex items-center justify-center"}
          >
            <img src={logo} className="w-full " alt="Logo" />
          </NavLink>
          <div className="w-[70%] flex items-center text-[7vw] relative pt-[1vh]">
            <div className="flex items-center justify-end space-x-[1vw] w-[90%] flex-wrap">
              {!isAuthenticated ? (
                <NavLink to={"/dashboard"} className={"flex items-center"}>
                  <Button text="Dashboard" />
                </NavLink>
              ) : (
                <>
                  <NavLink to={"/login"} className={"flex items-center"}>
                    <Button text="Log In" />
                  </NavLink>
                  <NavLink
                    to={"/create-account"}
                    className={"flex items-center"}
                  >
                    <Button text="Get Started" />
                  </NavLink>
                </>
              )}
            </div>
            <Hamburger
              direction="right"
              size={16}
              toggled={isOpen}
              toggle={setIsOpen}
            />
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="menu-content"
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: isOpen ? 0 : -10, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full h-full relative px-4 pt-8"
            >
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-4">
                  <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    onClick={() => setIsOpen(false)}
                    to={"/select"}
                  >
                    Resumes
                  </NavLink>
                  <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    onClick={() => setIsOpen(false)}
                    to={"/cover-letter"}
                  >
                    Cover Letter
                  </NavLink>
                  <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    onClick={() => setIsOpen(false)}
                    to={"/career"}
                  >
                    Career Blogs
                  </NavLink>
                  <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    onClick={() => setIsOpen(false)}
                    to={"/pricing"}
                  >
                    Pricing
                  </NavLink>
                  <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    to={"/about"}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </NavLink>
                  <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    to={"/contact"}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </NavLink>
                  <NavLink
                    className={
                      "text-xl hover:text-button-gpt text-menu-items w-fit transition-all duration-200 font-semibold"
                    }
                    to={"/company"}
                    onClick={() => setIsOpen(false)}
                  >
                    Business Solutions
                  </NavLink>
                </div>
              </div>
              <div className="absolute gap-5 bottom-2 flex items-end">
                <NextButton
                  isIconOnly
                  className="hover:bg-white"
                  variant={"flat"}
                >
                  <GitHubLogoIcon />
                </NextButton>
                <NextButton
                  className="hover:bg-white"
                  isIconOnly
                  variant={"flat"}
                >
                  <LucideYoutube />
                </NextButton>
                <NextButton
                  className="hover:bg-white"
                  isIconOnly
                  variant={"flat"}
                >
                  <SlackIcon />
                </NextButton>
                <NextButton
                  className="hover:bg-white"
                  isIconOnly
                  variant={"flat"}
                >
                  <TwitterLogoIcon />
                </NextButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default MobileNavbar;
