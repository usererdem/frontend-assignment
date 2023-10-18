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

const travelCalculation = (value: number) => {
  return value - 280;
};

const startingY: number = 300;

export const batchScanAnimation1 = {
  hidden: {
    y: startingY,
    scale: 0.8,
  },
  show: {
    y: travelCalculation(startingY),
    scale: 0.6,
    transition: {
      delay: 1,
      duration: 0.6,
    },
  },
};
export const batchScanAnimation2 = {
  hidden: {
    y: startingY,
    scale: 1,
  },
  show: {
    y: travelCalculation(startingY - 230),
    scale: 0.7,
    transition: {
      delay: 1.2,
      duration: 0.6,
    },
  },
};
export const batchScanAnimation3 = {
  hidden: {
    y: startingY,
    scale: 1,
  },
  show: {
    y: travelCalculation(startingY - 460),
    scale: 0.8,
    transition: {
      delay: 1.2,
      duration: 1,
    },
  },
};
export const advancedFilterAnimation1 = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0,
      when: "afterChildren",
    },
  },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.6,
    },
  },
};
export const advancedFilterAnimation2 = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0,
      when: "afterChildren",
    },
  },
  show: {
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 0.6,
    },
  },
};
