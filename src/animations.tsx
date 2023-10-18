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
      staggerChildren: 0.7,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const batchScanContainerAnimation = {
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const batchScanAnimation  = {
  hidden: {
    y: 300,
    transition: {
      duration: 0,
      when: "afterChildren",
    },
  },
  show: {
    y: 20,
    scale: 0.6,
    transition: {
      duration: 0.4,
    },
  },
};
export const batchScanAnimation2  = {
  hidden: {
    y: 0,
    transition: {
      duration: 0,
      when: "afterChildren",
    },
  },
  show: {
    y: -210,
    scale: 0.7,
    transition: {
      duration: 0.6,
    },
  },
};
export const batchScanAnimation3  = {
  hidden: {
    y: 0,
    transition: {
      duration: 0,
      when: "afterChildren",
    },
  },
  show: {
    y: -440,
    scale: 0.8,
    transition: {
      duration: 0.6,
    },
  },
};
