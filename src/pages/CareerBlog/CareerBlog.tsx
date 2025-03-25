import BlogListing from "./blog-listing";

const CareerBlog = () => {
  return (
    <>
      <div className="relative overflow-hidden mt-[10vh] text-[8vw] md:text-[5vw] lg:text-[4vw]">
        {/* Background with image */}
        <div className="relative min-h-[30vh] flex flex-col items-center justify-center px-[15vw] py-[10vh] text-white text-center bg-platformGreen">
          {/* Content */}
          <div className="relative z-10 mx-auto">
            <p className="text-[0.5em] font-medium tracking-wider mb-4">BLOG</p>
            <h1 className="text-[1em]  font-bold mb-6 leading-tight">
              Career Blog
            </h1>
            <p className="text-[0.4em] mx-auto leading-relaxed">
              Explore expert tips, real-life examples, and actionable advice to
              land your dream job faster
            </p>
          </div>

          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-[10vw] h-[10vw] rounded-full bg-[#00C48C] opacity-20 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[8vw] h-[8vw] rounded-full bg-[#00C48C] opacity-20 -translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-1/2 right-1/4 w-[10vw] h-[10vw] rounded-full bg-[#00C48C] opacity-20 translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div>
        <BlogListing />
      </div>
    </>
  );
};

export default CareerBlog;
