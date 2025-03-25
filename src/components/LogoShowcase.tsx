import { Image } from "@nextui-org/react";
import Coinbase from "@/assets/logos/coinbase.png";
import Amazon from "@/assets/logos/amazon.png";
import Google from "@/assets/logos/google.png";
import Meta from "@/assets/logos/meta.png";
import Tesla from "@/assets/logos/tesla.png";

export default function LogoShowcase() {
  const logos = [
    {
      src: Meta,
      alt: "Meta",
      width: 100,
    },
    {
      src: Tesla,
      alt: "Tesla",
      width: 100,
    },
    {
      src: Coinbase,
      alt: "Coinbase",
      width: 100,
    },
    {
      src: Google,
      alt: "Google",
      width: 100,
    },
    {
      src: Amazon,
      alt: "Amazon",
      width: 100,
    },
  ];

  return (
    <div>
      <section className="px-4">
        <p className="text-center text-gray-600 w-full mx-auto text-[8vw] md:text-[5vw] lg:text-[4vw]  px-[5vw] ">
          <span className="font-bold text-platformGreen leading-tight">
            Trusted by the world's top companies!
          </span>
          <br />
          <p className="leading-tight text-[0.6em]">
            <span>Empowering careers and building brighter futures</span>
            <span> — helping professionals land their dream jobs.</span>
          </p>
        </p>
      </section>
      <section className="pt-[5vh] px-4 opacity-60">
        <div className="w-full">
          <div className="flex flex-wrap justify-center items-center  gap-6 gap-x-10 ">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center "
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  className="object-contain h-[5vw] sm:h-[3vw] "
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
