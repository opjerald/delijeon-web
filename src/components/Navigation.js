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
        <p className="font-medium text-white cursor-pointer transition-all duration-300 ease-in-out hover:text-yellow-500">
          {menu.name}
        </p>
      </UnstyledButton>
    </Link>
  ));

  return (
    <nav className="sticky top-0 bg-black/50 z-10 -mb-16">
      <Container size="xl" className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-2 text-white">
          <h1>Deli</h1>
          <h1>Jeon</h1>
        </div>
        <div className="flex items-center space-x-4">
          {menulink}
          <Button radius="xl">Shop now</Button>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
