import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";

import Jessica_Tanner from "@/assets/images/testimonials/Jessica Tanner.jpeg";
import Michael_Gray from "@/assets/images/testimonials/Michal Gray.png";
import Priya_Shah from "@/assets/images/testimonials/Priya Shah.png";
import Robert_King from "@/assets/images/testimonials/Robert King.jpeg";
import Alice_Kim from "@/assets/images/testimonials/Alice Kim.jpg";
import Mateo_Rodríguez from "@/assets/images/testimonials/Mateo Rodrigues.jpg";
import Aisha_Hassan from "@/assets/images/testimonials/Aisha Hassan.jpeg";
import Ethan_Brooks from "@/assets/images/testimonials/Ethan Brooks.jpeg";
import Emily_Rogers from "@/assets/images/testimonials/Emily Rogers.jpeg";
import Daniel_Kim from "@/assets/images/testimonials/Daniel Kim.jpeg";
import Olivia_Carter from "@/assets/images/testimonials/Olivia Carter.jpeg";
import James_Peterson from "@/assets/images/testimonials/James Peterson.jpeg";

import { NavLink } from "react-router-dom";
import SliderButton from "./ui/SliderButton";
import { useRef } from "react";
import Button from "./ui/Custom Ui/Button";
import { motion } from "framer-motion";
const testimonials = [
  {
    name: "Jessica Tanner",
    role: "Marketing Manager",
    quote:
      "Omg?? I literally procrastinated updating my resume for months because ugh, effort... but this AI thing?? 20 mins later and my resume actually looks good?? Got 3 interviews already, what is happening 😭",
    rating: 5,
    image: Jessica_Tanner,
    reviewed: "January 2024",
    country: "🇨🇦",
  },
  {
    name: "Michael Gray",
    role: "Software Engineer",
    quote:
      "Not gonna lie, I was super skeptical about another 'AI tool' but this actually slaps?? Fixed all my weird formatting issues and made my projects sound way better. Finally getting responses from FAANG 👀",
    rating: 5,
    image: Michael_Gray,
    reviewed: "February 2024",
    country: "🇺🇸",
  },
  {
    name: "Priya Shah",
    role: "HR Specialist",
    quote:
      "As someone who reads resumes all day... THIS IS IT. The AI actually knows what recruiters want to see?? Used it myself & wow, the difference is insane 😮‍💨",
    rating: 5,
    image: Priya_Shah,
    reviewed: "December 2023",
    country: "🇮🇳",
  },
  {
    name: "Robert King",
    role: "Entry-Level Graduate",
    quote:
      "Proper stressed about my first CV but this sorted me right out!! Went from zero callbacks to landing a job in tech?? My mates need this fr 🙌",
    rating: 5,
    image: Robert_King,
    reviewed: "March 2024",
    country: "🇬🇧",
  },
  {
    name: "Alice Kim",
    role: "Data Scientist",
    quote:
      "Me: spends 5 hours tweaking bullet points. This AI: here’s your perfect resume in 10 minutes. Me: 👁️👄👁️ where have you been all my life??",
    rating: 5,
    image: Alice_Kim,
    reviewed: "February 2024",
    country: "🇰🇷",
  },
  {
    name: "Mateo Rodríguez",
    role: "Senior Manager",
    quote:
      "Guys. GUYS. Used this yesterday and already got 2 LinkedIn messages?? After radio silence for weeks?? Not me actually enjoying updating my resume 💀",
    rating: 5,
    image: Mateo_Rodríguez,
    reviewed: "January 2024",
    country: "🇪🇸",
  },
  {
    name: "Aisha Hassan",
    role: "Graphic Designer",
    quote:
      "The designer in me was ready to hate these templates but HOLD UP— they’re actually fire?? Clean AF and the AI suggestions are chef’s kiss. Worth every penny tbh ✨",
    rating: 5,
    image: Aisha_Hassan,
    reviewed: "December 2023",
    country: "🇦🇪",
  },
  {
    name: "Ethan Brooks",
    role: "Sales Representative",
    quote:
      "Mate... this thing is unreal! Chucked my old resume in and 15 minutes later, looking fresh as. Recruiters actually hitting me up now instead of ghosting 😤",
    rating: 5,
    image: Ethan_Brooks,
    reviewed: "March 2024",
    country: "🇦🇺",
  },
  {
    name: "Emily Rogers",
    role: "Financial Analyst",
    quote:
      "Finance girlies, listen up!! This AI turned my boring Excel job into actual achievements?? And still kept it professional?? Game changer fr 💅",
    rating: 5,
    image: Emily_Rogers,
    reviewed: "January 2024",
    country: "🇩🇪",
  },
  {
    name: "Daniel Kim",
    role: "Healthcare Specialist",
    quote:
      "Those ATS systems kept eating my resume alive 😭 but this AI??? Fixed EVERYTHING. From constant rejections to 3 interviews this week, I can't even- 😮‍💨",
    rating: 5,
    image: Daniel_Kim,
    reviewed: "February 2024",
    country: "🇯🇵",
  },
  {
    name: "Olivia Carter",
    role: "Teacher",
    quote:
      "Besties, this is IT!! Procrastinated updating my resume for a whole year but this took 15 mins?? Got a job offer last week, still shook 😭✨",
    rating: 5,
    image: Olivia_Carter,
    reviewed: "December 2023",
    country: "🇫🇷",
  },
  {
    name: "James Peterson",
    role: "UX Designer",
    quote:
      "Yo, the UX on this is actually clean?? Plus, the AI picked up on all my key skills without the cringe corporate speak. Fully obsessed rn 🔥",
    rating: 5,
    image: James_Peterson,
    reviewed: "March 2024",
    country: "🇸🇬",
  },
];

function Testimonials() {
  SwiperCore.use([Autoplay]);
  const swiperRef = useRef(null);

  return (
    <div className="">
      <div className="w-full text-center text-[10vw] md:text-[5vw] lg:text-[4vw]">
        {/* Title Section */}
        <div className="mb-8">
          <h2 className="font-bold text-gray-800 mt-2">
            300,000+{" "}
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Job Seekers{" "}
            </span>
            and{" "}
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              Freelancers{" "}
            </span>
            Are Using{" "}
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              OptimCV.
            </span>
          </h2>
        </div>
        <div className="relative h-[40vh] max-h-[40vh]">
          <SliderButton swiperRef={swiperRef} />
          <Swiper
            ref={swiperRef}
            style={
              {
                // Fix for CSS custom property
                "--swiper-pagination-color": "#30D0AD",
                overflow: "visible",
              } as React.CSSProperties
            }
            spaceBetween={10}
            //   slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper w-full h-full relative"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                className="w-full h-full relative overflow-visible"
              >
                <Slide testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <NavLink to={"/select"} onPointerEnter={() => {}}>
          <Button text={"Start Creating Your CV Today!"} />
        </NavLink>
      </div>
    </div>
  );
}

export default Testimonials;

function Slide({ testimonial }: any) {
  return (
    <motion.div
      className={`absolute text-[0.5em] h-full bg-platformGreen5 p-[0.7em] pb-0 rounded-[0.5em] text-left border border-platformGreen border-opacity-40 flex flex-col cursor-pointer overflow-hidden`}
      style={{ height: "100%" }}
      whileHover={{ height: "auto" }}
      transition={{ duration: 0.3, ease: "linear" }}
    >
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-[2.5em] w-[2.5em] rounded-[1em] shadow-lg object-cover mr-4"
          draggable={false}
          style={{ userSelect: "none" }}
        />
        <div>
          <h4 className="text-[0.7em] font-semibold text-black">
            {testimonial.name}
          </h4>
        </div>
      </div>
      <div className="flex items-center mb-4">
        {Array(testimonial.rating)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-yellow-400">
              &#9733;
            </span>
          ))}
      </div>
      <div className="flex">
        <p className={`text-gray-800 mb-4 text-[0.8em] flex-grow`}>
          "{testimonial.quote}"
        </p>
      </div>
      <p className="text-gray-500 mb-4 text-[0.5em] h-full   flex items-end justify-end">
        Reviewed in {testimonial.reviewed}
      </p>
      <div className="bg-gradient-to-t from-platformGreen5 to-transparent w-full h-[10%] absolute bottom-0" />
    </motion.div>
  );
}
