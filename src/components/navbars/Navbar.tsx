import { useAuth } from "@/hooks/useAuth";
import { NavLink } from "react-router-dom";
import logo from "@/assets/icons/optimCvLogo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import NavDropdownContent from "./navbar-items/NavDropdown";
import Button from "../ui/Custom Ui/Button";
import { useScroll, useTransform, motion } from "framer-motion";

export type Position = {
  width: number;
  left: number;
  opacity: number;
};

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, window.innerHeight * 0.5], [0, 1]);

  const menuItems = [
    // {
    //   title: "Tools",
    //   items: [
    //     {
    //       title: "Resume Builder",
    //       description: "Create a resume in 5 minutes. Get the job you want.",
    //       icon: "/placeholder.svg?height=40&width=40",
    //       href: "/resume-builder",
    //       featured: true,
    //     },
    //     // Add other tool items...
    //   ],
    // },
    {
      title: "Resume",
      items: [
        {
          title: "Resume Builder",
          description: "Create a resume in 5 minutes. Get the job you want.",
          icon: "/placeholder.svg?height=40&width=40",
          href: "/select",
          featured: true,
        },
        {
          title: "Resume Templates",
          description: "Find the perfect resume template.",
          icon: "/placeholder.svg?height=20&width=20",
          href: "/select",
        },
        {
          title: "Resume Checker",
          description: "Get your resume checked and scored with one click.",
          icon: "/placeholder.svg?height=20&width=20",
          href: "/select",
        },
        {
          title: "Resume Examples",
          description: "See perfect resume samples that get jobs.",
          icon: "/placeholder.svg?height=20&width=20",
          href: "/select",
        },
        {
          title: "Resume Format",
          description: "Pick the right resume format for your situation.",
          icon: "/placeholder.svg?height=20&width=20",
          href: "/select",
        },
        {
          title: "How to Write a Resume",
          description: "Learn how to make a resume that gets interviews.",
          icon: "/placeholder.svg?height=20&width=20",
          href: "/faqs",
        },
        {
          title: "Resume Help",
          description: "Improve your resume with help from expert guides.",
          icon: "/placeholder.svg?height=20&width=20",
          href: "/resume-help",
        },
      ],
    },
    // {
    //   title: "CV",
    //   items: [
    //     {
    //       title: "CV Builder",
    //       description: "Create a CV in 5 minutes. Get the job you want.",
    //       icon: "/placeholder.svg?height=40&width=40",
    //       href: "/resumes",
    //       featured: true,
    //     },
    //     {
    //       title: "CV Templates",
    //       description: "Find the perfect CV template.",
    //       icon: "/placeholder.svg?height=20&width=20",
    //       href: "/select",
    //     },
    //     {
    //       title: "CV Examples",
    //       description: "See perfect CV samples that get jobs.",
    //       icon: "/placeholder.svg?height=20&width=20",
    //       href: "/select",
    //     },
    //     {
    //       title: "CV Format",
    //       description: "Pick the right format for your situation.",
    //       icon: "/placeholder.svg?height=20&width=20",
    //       href: "/resumes",
    //     },
    //     {
    //       title: "How to Write a CV",
    //       description: "Learn how to make a CV that gets interviews.",
    //       icon: "/placeholder.svg?height=20&width=20",
    //       href: "/faqs",
    //     },
    //     {
    //       title: "CV Help",
    //       description: "Improve your CV with help from expert guides.",
    //       icon: "/placeholder.svg?height=20&width=20",
    //       href: "/faqs",
    //     },
    //   ],
    // },
    {
      title: "Cover Letter",
      items: [
        {
          title: "Cover Letter Builder",
          description:
            "Create a cover letter in 5 minutes. Get the job you want.",
          icon: "/placeholder.svg?height=40&width=40",
          href: "/cover-letter",
          featured: true,
        },
        // Add cover letter items...
      ],
    },
    {
      title: "Career Blog",
      href: "/career",
      className: "hidden lg:flex justify-center items-center",
    },
    {
      title: "Pricing",
      href: "/pricing",
      className: "flex justify-center items-center",
    },
    {
      title: "Business Solutions",
      href: "/company",
      className: "hidden lg:flex justify-center items-center",
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full flex items-center justify-center min-h-[48px] px-[2vw] py-[1vh] text-[7vw] md:text-[4vw] lg:text-[4vw] xl:text-[3vw] z-[1000]`}
    >
      <motion.div
        style={{ opacity }}
        className="absolute w-full h-full bg-white -z-10 border-b border-platformGreen/50"
      ></motion.div>
      {/* Logo Section */}
      <div className="flex items-center justify-center">
        <div className="flex-shrink-0 pr-2">
          <NavLink to="/">
            <img
              src={logo || "/placeholder.svg"}
              alt="logo"
              className="w-[10vw]"
            />
          </NavLink>
        </div>

        {/* Menu Items Section */}
        <div className="flex justify-start z-50">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-[1vw]">
              {menuItems.map((item) => (
                <NavigationMenuItem
                  key={item.title}
                  className={
                    item.className || "flex justify-center items-center"
                  }
                >
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger
                        className="group px-4 text-[0.4em] font-normal hover:bg-transparent data-[state=open]:bg-transparent"
                        onMouseEnter={(e) => {
                          const chevron = e.currentTarget.querySelector("svg");
                          if (chevron)
                            chevron.style.transform = "rotate(180deg)";
                        }}
                        onMouseLeave={(e) => {
                          const chevron = e.currentTarget.querySelector("svg");
                          if (chevron) chevron.style.transform = "rotate(0deg)";
                        }}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavDropdownContent items={item.items} />
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      href={item.href}
                      className="group px-4 text-[0.4em] font-normal"
                    >
                      {item.title}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Auth Buttons Section */}
      <div className="flex-shrink-0 flex items-center justify-center space-x-[1vw] ml-auto">
        {isAuthenticated ? (
          <NavLink
            to={"/dashboard"}
            className="flex items-center justify-center"
          >
            <Button text={"Dashboard"} />
          </NavLink>
        ) : (
          <>
            <NavLink to={"/login"} className="flex items-center justify-center">
              <Button text="Log In" secondary={true} />
            </NavLink>
            <NavLink
              to={"/create-account"}
              className="flex items-center justify-center"
            >
              <Button text={"Get Started"} />
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
