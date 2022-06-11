import { motion } from "framer-motion";
import Image from "next/image";

import cake from "../assets/images/cake.jpg";
import { title_variants, other_variants } from "../assets/data/variants/_hero";

const Hero = () => {
  return (
    <>
      <section className="h-screen relative overflow-hidden">
        <div className="w-full h-full flex justify-center items-center overflow-hidden relative">
          <div className="z-[1] h-full w-full">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center hero-image">
              <div className="absolute top-0 left-0 w-screen h-screen">
                <Image src={cake} alt="hero cake" objectFit="cover" layout="fill" />
              </div>
              <div className="relative z-[3] flex items-center justify-center max-w-[1600px] w-[calc(100%-100px)]">
                <div className="flex flex-col items-center space-y-3 text-center text-base-100 p-4 rounded-2xl">
                  <motion.h1
                    className="text-[5rem] font-bold -mb-5 title"
                    variants={title_variants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-secondary">Deli </span>
                    <span className="text-base-100">Jeon</span>
                  </motion.h1>
                  <motion.p
                    className="text-md max-w-xl"
                    variants={other_variants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam nisi, ipsa labore culpa
                    reprehenderit alias nobis ullam itaque eos. Odio!
                  </motion.p>
                  <motion.div
                    className="flex items-center gap-5"
                    variants={other_variants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <button type="button" className="px-7 py-3 btn btn-primary rounded-full">
                      <p className="text-xs text-white font-bold tracking-wide uppercase">our menu</p>
                    </button>
                    <button type="button" className="px-7 py-3 btn btn-secondary gap-2 rounded-full">
                      <i className="bi bi-cart text-md text-white"></i>
                      <p className="text-xs text-white font-bold tracking-wide uppercase">shop now</p>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
