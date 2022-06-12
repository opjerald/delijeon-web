export const variants = {
  initial: {
    translateX: -30,
    opacity: 0,
  },
  animate: {
    translateX: 0,
    opacity: 1,
  },
  exit: {
    translateX: 30,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
