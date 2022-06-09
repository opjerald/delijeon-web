import Image from "next/image";
import { Slider } from "../assets/data/ImageSlider";

const Hero = () => {
  return (
    <section className="h-screen relative overflow-hidden -top-[64px] -mb-[64px]">
      <div className="w-full h-full flex justify-center items-center overflow-hidden relative">
        {Slider.map((slide, index) => (
          <div key={index} className="z-[1] h-full w-full">
            <div
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center
              before:content-[''] before:absolute before:z-[2] before:w-full before:h-screen before:bottom-[0vh] before:left-0 before:overflow-hidden
              before:opacity-[0.4]"
            >
              <div className="absolute top-0 left-0 w-screen h-screen">
                <Image src={slide.image} alt={slide.title} />
              </div>
              <div className="relative z-10 flex flex-col items-center max-w-[1600px] w-[calc(100%-100px)] text-white">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
