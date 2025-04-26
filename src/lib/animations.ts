export const pageVariants = {
  initial: { opacity: 0, y: 15 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -15 },
};

export const pageTransitions = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3,
};
