import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { slider } from "../assets/data/ImageSlider";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const length = slider.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((curr) => (curr === length - 1 ? 0 : curr + 1));
    };

    timeout.current = setTimeout(nextSlide, 3000);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent((curr) => (curr === length - 1 ? 0 : curr + 1));
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent((curr) => (curr === 0 ? length - 1 : curr - 1));
  };

  return (
    <section className="h-screen relative overflow-hidden">
      <div className="w-full h-full flex justify-center items-center overflow-hidden relative">
        <div className="z-[1] h-full w-full">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center hero-image">
            <div className="absolute top-0 left-0 w-screen h-screen">
              <Image src={slider[current].image} alt={slider[current].title} objectFit="cover" layout="fill" />
            </div>
            <div className="relative z-[3] flex items-center justify-between max-w-[1600px] w-[calc(100%-100px)]">
              <div className="text-white z-[3]" onClick={prevSlide}>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 ease-in-out">
                  <i className="bi bi-chevron-left text-2xl"></i>
                </div>
              </div>
              <div className="flex flex-col z-[3] items-center text-center space-y-5 text-white">
                <h1 className="text-[3rem] font-bold">{slider[current].title}</h1>
                <p className="text-lg max-w-2xl">{slider[current].description}</p>
                <div className="flex items-center gap-5">
                  <button
                    type="button"
                    className="px-7 py-3 border-2 text-xs border-yellow-600 rounded-full uppercase font-bold tracking-wide hover:bg-yellow-600 transition-all duration-300 ease-in-out"
                  >
                    our menu
                  </button>
                  <button
                    type="button"
                    className="px-7 py-3 border-2 text-xs border-yellow-600 rounded-full uppercase font-bold tracking-wide hover:bg-yellow-600 transition-all duration-300 ease-in-out"
                  >
                    shop now
                  </button>
                </div>
              </div>
              <div className="text-white z-[3]" onClick={nextSlide}>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 ease-in-out">
                  <i className="bi bi-chevron-right text-2xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
