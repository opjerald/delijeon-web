import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { menus } from "../assets/data/other/menu";

const Drawer = ({ open, setOpen }) => {
  const variants = {
    initial: { y: "-100%", opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
    },
    close: {
      y: "-100%",
      opacity: 0,
    },
  };

  const menuLink = menus.map((menu) => (
    <Link href={menu.path} key={menu.name}>
      <a className="btn btn-ghost transition-all duration-300 ease-in-out hover:bg-primary/50">
        <p className="text-base-100 text-[15px] text-center cursor-pointer">{menu.name}</p>
      </a>
    </Link>
  ));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="sidebar"
          variants={variants}
          initial="initial"
          animate="open"
          exit="close"
          transition={{ duration: 0.5 }}
          className="fixed z-[999] w-full h-full bg-accent/90 mt-0 ml-0 transition-all duration-300 ease-in-out px-5 py-4"
        >
          <div className="flex justify-end w-full">
            <i
              className="bi bi-x-lg text-lg text-base-100 btn btn-ghost hover:bg-transparent"
              onClick={() => setOpen(false)}
            ></i>
          </div>
          <div className="flex flex-col space-y-3 py-5">{menuLink}</div>
          <div className="flex items-center justify-center">
            <button className="btn btn-primary uppercase rounded-full flex items-center space-x-4">
              <i className="bi bi-cart text-md text-white"></i>
              <p className="text-base-100 text-xs">Shop now</p>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
