import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import Image from "next/image";

const Hero = ({ slider }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, slider.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <section className="h-screen relative overflow-hidden">
          <div className="w-full h-full flex justify-center items-center overflow-hidden relative">
            <div className="z-[1] h-full w-full">
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center hero-image">
                <motion.div
                  key={page}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute top-0 left-0 w-screen h-screen"
                >
                  <Image
                    src={slider[imageIndex].image}
                    alt={slider[imageIndex].title}
                    objectFit="cover"
                    layout="fill"
                  />
                </motion.div>
                <div className="relative z-[3] flex items-center justify-between max-w-[1600px] w-[calc(100%-100px)]">
                  <motion.div
                    whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white"
                    onClick={() => paginate(-1)}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 ease-in-out">
                      <i className="bi bi-chevron-left text-2xl"></i>
                    </div>
                  </motion.div>
                  <div className="flex flex-col items-center text-center space-y-5 text-white">
                    <motion.h1
                      key={page}
                      initial={{ y: -30 }}
                      animate={{ y: 0 }}
                      exit={{ y: 30 }}
                      transition={{ duration: 1 }}
                      className="text-[3rem] font-bold"
                    >
                      {slider[imageIndex].title}
                    </motion.h1>
                    <p className="text-lg max-w-2xl">{slider[imageIndex].description}</p>
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
                  <motion.div
                    whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white"
                    onClick={() => paginate(1)}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 ease-in-out">
                      <i className="bi bi-chevron-right text-2xl"></i>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatePresence>
    </>
  );
};

export default Hero;
