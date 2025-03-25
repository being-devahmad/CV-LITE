import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import SliderButton from "./ui/SliderButton";
import { useTemplates } from "@/hooks/useTemplates";
import Loader from "./ui/Custom Ui/Loader";
import templatePlaceHolder from "@/assets/icons/template.png";

export default function ResumeSlider() {
  const navigate = useNavigate();

  const swiperRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const { templates, loadingTemplates }: any = useTemplates();

  const resizeSlides = () => {
    const all_slides = Array.from(document.querySelectorAll("[id*=resume]"));
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const padding = all_slides[0]?.getBoundingClientRect().width * 0.1;

    if (screenWidth < screenHeight * 0.4 + padding) {
      all_slides.forEach((slide: any) => {
        slide.style.width = "80vw";
        slide.style.height = "90vw";
      });
    } else {
      all_slides.forEach((slide: any) => {
        slide.style.width = "40vh";
        slide.style.height = "50vh";
      });
    }
  };
  const calculateSlidesPerView = () => {
    resizeSlides();
    const slide = document.querySelector("#resume_0");

    const screenWidth = window.innerWidth;
    const slideWidth =
      slide?.getBoundingClientRect().width || window.innerHeight * 0;
    let slideMargin = slideWidth * 0.1;
    if (window.innerWidth < 765) {
      slideMargin = 10;
    }

    const slidesFit = screenWidth / (slideWidth + slideMargin);

    setSlidesPerView(slidesFit > 0 ? slidesFit : 1);
  };

  useEffect(() => {
    calculateSlidesPerView();
    window.addEventListener("resize", calculateSlidesPerView);
    return () => window.removeEventListener("resize", calculateSlidesPerView);
  }, [templates]);
  if (loadingTemplates) return <Loader />;
  return (
    <div className="w-full mx-auto text-[8vw] md:text-[5vw] lg:text-[4vw] ">
      <h1 className="text-center font-bold">
        Design Your Future.&nbsp;
        <br />
        <span className="text-platformGreen">
          Start With the Perfect Template!
        </span>
      </h1>

      <div className="relative">
        <div className="gap-2 pb-8 ">
          <SliderButton swiperRef={swiperRef} />
          <Swiper
            ref={swiperRef}
            style={
              {
                "--swiper-pagination-color": "#30D0AD",
              } as React.CSSProperties
            }
            modules={[Pagination]}
            spaceBetween={30} // space between slides
            slidesPerView={slidesPerView} // Dynamically updated value
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: false,
              renderBullet: (_index, className) =>
                `<span class="${className}"></span>`,
            }}
          >
            {templates.map((template: any, index: number) => (
              <SwiperSlide key={index}>
                <div
                  className="relative mb-[50px] flex-shrink-0 h-[50vh] max-w-[40vh] snap-center cursor-pointer sm:rounded-[0.5em] rounded-[1em] overflow-hidden transition-transform duration-300 "
                  id={`resume_${index}`}
                  onClick={() => {
                    console.log(template);
                    navigate(`/select/${template.id}`);
                  }}
                >
                  <div className="flex items-center justify-center relative w-full h-full p-[5%] bg-slate-400 bg-opacity-25 hover:bg-platformGreen hover:bg-opacity-25 group">
                    <img
                      draggable={false}
                      src={template.image || templatePlaceHolder}
                      alt={`${template.name} resume template`}
                      className={
                        !template.image
                          ? "h-[50%] w-[50%] object-contain grayscale opacity-50"
                          : "object-cover w-full h-full sm:rounded-[0.5em] rounded-[1em]"
                      }
                      style={{ userSelect: "none" }}
                      onError={(e) => {
                        e.currentTarget.src = templatePlaceHolder;
                        e.currentTarget.className =
                          "h-[50%] w-[50%] object-contain grayscale opacity-50 ";
                      }}
                    />

                    <div className="absolute inset-0 flex justify-center items-end z-10 sm:rounded-[0.5em] rounded-[1em]">
                      <button
                        className="text-[0.3em] bg-platformGreen text-white px-6 py-2 mb-4 sm:rounded-[0.5em] rounded-[1em] w-full mx-5 font-medium transition-all text-md hover:scale-110 opacity-0 group-hover:opacity-100"
                        onClick={() => navigate(`/select/${template.id}`)}
                      >
                        Create My Resume
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
