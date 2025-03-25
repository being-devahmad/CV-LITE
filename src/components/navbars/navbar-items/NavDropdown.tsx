import type React from "react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

type NavDropdownContentProps = {
  items: {
    title: string;
    description: string;
    href: string;
    featured?: boolean;
  }[];
};

const NavDropdownContent: React.FC<NavDropdownContentProps> = ({ items }) => {
  return (
    <ul className="grid w-[60vw] p-[0.5em] md:grid-cols-2 gap-[0.3em]">
      {items.map((item) => (
        <li key={item.title}>
          <NavigationMenuLink asChild>
            <a
              href={item.href}
              className={cn(
                "block select-none rounded-[0.2em] p-[0.2em] leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                item.featured && "md:col-span-2"
              )}
            >
              <div className="text-[0.35em] font-medium leading-none">
                {item.title}
              </div>
              <p className="line-clamp-2 text-[0.25em] leading-snug text-muted-foreground">
                {item.description}
              </p>
            </a>
          </NavigationMenuLink>
        </li>
      ))}
    </ul>
  );
};

export default NavDropdownContent;
