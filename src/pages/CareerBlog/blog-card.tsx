import { NavLink } from "react-router-dom";

interface BlogCardProps {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  imageUrl: string;
}

export function BlogCard({
  id,
  title,
  description,
  author,
  date,
  imageUrl,
}: BlogCardProps) {
  return (
    <article className="flex flex-col rounded-lg overflow-hidden bg-white transition-shadow shadow-lg text-[4.8vw] md:text-[2.8vw] lg:text-[1.8vw]">
      <div className="aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="font-bold mb-[0.5em] text-[0.9em]">
          <NavLink
            to={`/career/${id}`}
            className="hover:text-platformGreen transition-all duration-200"
          >
            {title}
          </NavLink>
        </h2>
        <p className="text-gray-600 mb-[0.5em] flex-grow text-[0.7em]">
          {description}
        </p>
        <div className="flex items-center text-gray-500">
          <span className="font-medium text-[0.5em]">{author}</span>
          <span className="mx-[0.3em] text-[0.5em]">•</span>
          <time className="text-[0.5em]">{date}</time>
        </div>
      </div>
    </article>
  );
}
