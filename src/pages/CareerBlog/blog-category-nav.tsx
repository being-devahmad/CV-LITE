import { useState } from "react";

type Category = {
  name: string;
  href: string;
  isActive?: boolean;
};

const categories: Category[] = [
  { name: "All Articles", href: "#", isActive: true },
  { name: "Job Search", href: "#" },
  { name: "Job Interviews", href: "#" },
  { name: "Career Advice", href: "#" },
  { name: "Resume Help", href: "#" },
  { name: "CV Help", href: "#" },
  { name: "Cover Letter Help", href: "#" },
  { name: "FAQ", href: "#" },
];

export function BlogCategoryNav() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="w-full overflow-x-auto text-[4.8vw] md:text-[2.8vw] lg:text-[1.8vw]">
      <nav className="flex gap-[0.7em] border-b pb-[0.7em] mb-[0.7em]">
        {categories.map((category, index) => (
          <p
            key={category.name}
            onClick={() => setActiveTab(index)}
            className={`text-[0.6em] whitespace-nowrap transition-all duration-100 cursor-pointer ${
              activeTab === index
                ? "text-platformGreen font-medium"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {category.name}
          </p>
        ))}
      </nav>
    </div>
  );
}
