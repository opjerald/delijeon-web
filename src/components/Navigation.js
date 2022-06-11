import Link from "next/link";
import { Anchor, Button, Container, UnstyledButton } from "@mantine/core";

const Navigation = () => {
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
    <nav className="sticky top-0 z-10 -mb-16">
      <Container size="xl" className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-2 text-white">
          <h1 className="text-4xl cursor-pointer m-0 font-normal leading-[1] tracking-[3px] title">Deli Jeon</h1>
        </div>
        <div className="flex items-center space-x-6">
          {menulink}
          <button className="btn btn-primary px-7 py-3 text-xs rounded-full">Shop now</button>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
