import Link from "next/link";
import { Container, UnstyledButton } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import { variants } from "../assets/data/variants/_navigation";
import { menus } from "../assets/data/other/menu";

const Navigation = ({ setOpen }) => {
  const header = useRef(null);
  const [hideContact, setHideContact] = useState(true);
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest < 0) return;

      if (latest >= 100) {
        header.current.classList.add("header-scrolled");
        setHideContact(false);
      } else {
        header.current.classList.remove("header-scrolled");
        setHideContact(true);
      }
    });
  }, [scrollY]);

  const menulink = menus.map((menu) => (
    <Link href={menu.path} key={menu.name}>
      <UnstyledButton component="a">
        <p className=" text-base-100 text-[15px] cursor-pointer transition-all duration-300 ease-in-out hover:text-primary">
          {menu.name}
        </p>
      </UnstyledButton>
    </Link>
  ));

  return (
    <>
      <nav ref={header} className=" z-[997] fixed w-full top-0 transition-all duration-500">
        <Container size="xl">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4 text-white">
              <h1 className="text-4xl cursor-pointer m-0 font-normal leading-[1] tracking-[3px] title ">Deli Jeon</h1>
              <AnimatePresence>
                {!hideContact && (
                  <motion.div
                    key="contact"
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="flex items-center gap-3 lg:hidden md:flex sm:hidden"
                  >
                    <div className={`flex items-center gap-2`}>
                      <i className="bi bi-phone text-lg text-primary"></i>
                      <span className="text-base-100 text-sm">+63 910 9278 273</span>
                    </div>
                    <div className={`flex items-center gap-2`}>
                      <i className="bi bi-clock text-lg text-primary"></i>
                      <span className="text-base-100 text-sm">Mon-Sat: 11:00 AM - 23:00 PM</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex items-center space-x-6 md:hidden">
              {menulink}
              <button className="btn btn-primary px-7 h-2 rounded-full">
                <p className="text-base-100 text-xs">Shop now</p>
              </button>
            </div>
            <button
              className="btn btn-ghost btn-primary rounded-full hidden md:block"
              onClick={() => {
                setOpen(true);
              }}
            >
              <i className="bi bi-list text-2xl text-base-100"></i>
            </button>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navigation;
