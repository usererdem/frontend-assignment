export const phoneAnimation = {
  hidden: {
    y: 300,
    opacity: 1,
    transition: {
      duration: 0,
    },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const contentAnimation = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
  show: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const borderAnimation = {
  hidden: {
    pathLength: 0,
    transition: {
      duration: 0,
    },
  },
  show: {
    pathLength: 1,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    pathLength: 0,
    transition: {
      duration: 1.3,
    },
  },
};

export const batchScanContainerAnimation = {
  hidden: {
    transition: {
      staggerChildren: 0.4,
    },
  },
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const batchScanAnimation = {
  hidden: {
    y: 300,
    transition: {
      duration: 0,
    },
  },
  show: {
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
