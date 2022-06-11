import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import Image from "next/image";

const Hero = ({ slider }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const timeout = useRef(null);

  const imageIndex = wrap(0, slider.length, page);

  useEffect(() => {
    const paginate = (newDirection) => {
      setPage([page + newDirection, newDirection]);
    };

    timeout.current = setTimeout(() => paginate(1), 10000);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [[page, direction]]);

  const paginate = (newDirection) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: {
      opacity: 0,
    },
    center: {
      zIndex: 1,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      opacity: 0,
    },
    title: {},
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
                      type: "just",
                      stiffness: 30,
                      damping: 30,
                    },
                    opacity: { duration: 1 },
                  }}
                  className={`absolute top-0 left-0 w-screen h-screen`}
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
                      className="text-[3rem] font-bold"
                      key={imageIndex}
                      initial={{ translateY: -30, opacity: 0 }}
                      animate={{ translateY: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {slider[imageIndex].title}
                    </motion.h1>
                    <motion.p
                      className="text-lg max-w-2xl"
                      key={imageIndex + 1}
                      initial={{ translateY: 30, opacity: 0 }}
                      animate={{ translateY: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      {slider[imageIndex].description}
                    </motion.p>
                    <motion.div
                      className="flex items-center gap-5"
                      key={imageIndex + 2}
                      initial={{ translateY: 30, opacity: 0 }}
                      animate={{ translateY: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <button
                        type="button"
                        className="px-7 py-3 btn btn-outline btn-primary border-2 rounded-full hover:bg-primary transition-all duration-300 ease-in-out"
                      >
                        <p className="text-xs text-white font-bold tracking-wide uppercase">our menu</p>
                      </button>
                      <button
                        type="button"
                        className="px-7 py-3 btn btn-outline btn-primary border-2 gap-2 rounded-full hover:bg-primary transition-all duration-300 ease-in-out"
                      >
                        <i className="bi bi-cart text-md text-white"></i>
                        <p className="text-xs text-white font-bold tracking-wide uppercase">shop now</p>
                      </button>
                    </motion.div>
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
