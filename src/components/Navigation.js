import Link from "next/link";
import { Anchor, Button, Container, UnstyledButton } from "@mantine/core";
import { useEffect, useRef, useState } from "react";

const Navigation = () => {
  const header = useRef(null);
  const topBar = useRef(null);

  const onScroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  const headerScrolled = () => {
    if (header.current) {
      if (window.scrollY > 100) {
        header.current.classList.add("header-scrolled");
        if (topBar.current) {
          topBar.current.classList.add("topbar-scrolled");
        }
      } else {
        header.current.classList.remove("header-scrolled");
        if (topBar.current) {
          topBar.current.classList.remove("topbar-scrolled");
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("load", headerScrolled);
    onScroll(document, headerScrolled);
  }, []);

  const menus = [
    {
      name: "Home",
      path: { pathname: "/home" },
    },
    {
      name: "About",
      path: { pathname: "/home" },
    },
    {
      name: "Pastries",
      path: { pathname: "/home" },
    },
    {
      name: "Testimonials",
      path: { pathname: "/home" },
    },
  ];

  const menulink = menus.map((menu) => (
    <Link href={menu.path} key={menu.name}>
      <UnstyledButton component="a">
        <p className=" text-white font-semibold text-[15px] cursor-pointer transition-all duration-300 ease-in-out hover:text-primary">
          {menu.name}
        </p>
      </UnstyledButton>
    </Link>
  ));

  return (
    <>
      <section
        ref={topBar}
        className="z-[996] sticky flex items-center text-base-100 h-[50px] transition-all duration-500"
      >
        <Container size="xl" className="w-full flex items-center space-x-5">
          <div className="flex items-center gap-2">
            <i className="bi bi-phone text-lg text-primary"></i>
            <span className="text-base-100 text-md">+63 910 9278 273</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="bi bi-clock text-lg text-primary"></i>
            <span className="text-base-100 text-md">Mon-Sat: 11:00 AM - 23:00 PM</span>
          </div>
        </Container>
      </section>
      <nav ref={header} className="sticky z-[997] top-0 transition-all duration-500">
        <Container size="xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 text-white">
              <h1 className="text-4xl cursor-pointer m-0 font-normal leading-[1] tracking-[3px] title">Deli Jeon</h1>
            </div>
            <div className="flex items-center space-x-6">
              {menulink}
              <button
                className="btn btn-primary px-7 py-3 text-xs rounded-full"
                onClick={() => {
                  console.log(header.current.classList, topBar.current.classList);
                }}
              >
                Shop now
              </button>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navigation;
