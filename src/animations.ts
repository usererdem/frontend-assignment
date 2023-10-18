const phoneAnimationDuration = 0.7;

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
    pathOffset: 2,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    pathLength: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export const phoneAnimation = {
  hidden: {
    y: "100%",
    opacity: 1,
    transition: {
      duration: 0,
    },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: phoneAnimationDuration,
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

/* SIGN & STAMP ANIMATIONS */
export const signStampAnimation1 = {
  hidden: {
    scale: 0,
    transition: {
      duration: 0,
      when: "afterChildren",
    },
  },
  show: {
    scale: 1,
    transition: {
      delay: phoneAnimationDuration,
      duration: 0.4,
    },
  },
};
export const signStampAnimation2 = {
  hidden: {
    scale: 0,
    transition: {
      duration: 0,
      when: "afterChildren",
    },
  },
  show: {
    scale: 1,
    transition: {
      delay: 1.1,
      duration: 0.4,
    },
  },
};

/* BATCHSCAN ANIMATIONS */
export const batchScanAnimation1 = {
  hidden: {
    y: 500,
    scale: 1,
  },
  show: {
    y: 90,
    scale: 0.8,
    transition: {
      delay: phoneAnimationDuration,
      duration: 0.6,
    },
  },
};
export const batchScanAnimation2 = {
  hidden: {
    y: 500,
    scale: 1,
  },
  show: {
    y: -220,
    scale: 0.9,
    transition: {
      delay: phoneAnimationDuration + 0.2,
      duration: 0.6,
    },
  },
};
export const batchScanAnimation3 = {
  hidden: {
    y: 500,
    scale: 1,
  },
  show: {
    y: -530,
    scale: 1,
    transition: {
      delay: phoneAnimationDuration + 0.4,
      duration: 0.8,
    },
  },
};
export const batchScanMobileAnimation1 = {
  hidden: {
    y: 300,
    scale: 0.8,
  },
  show: {
    y: 22,
    scale: 0.6,
    transition: {
      delay: phoneAnimationDuration,
      duration: 0.4,
    },
  },
};
export const batchScanMobileAnimation2 = {
  hidden: {
    y: 300,
    scale: 0.9,
  },
  show: {
    y: -210,
    scale: 0.7,
    transition: {
      delay: phoneAnimationDuration + 0.2,
      duration: 0.6,
    },
  },
};
export const batchScanMobileAnimation3 = {
  hidden: {
    y: 300,
    scale: 1,
  },
  show: {
    y: -440,
    scale: 0.8,
    transition: {
      delay: phoneAnimationDuration + 0.4,
      duration: 0.8,
    },
  },
};

/* ADVANCED FILTER ANIMATIONS */
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
      delay: phoneAnimationDuration,
      duration: 0.4,
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
      delay: phoneAnimationDuration + 0.1,
      duration: 0.4,
    },
  },
};

/* EXPORT AND SHARE ANIMATIONS */
export const ArrowIconAnimation = {
  hidden: {
    y: 300,
    x: 300,
  },
  show: {
    y: 0,
    x: 0,
    transition: {
      delay: 0.1,
      duration: 1,
    },
  },
};
export const exportShareAnimation1 = {
  hidden: {
    y: 300,
    x: 130,
  },
  show: {
    y: 0,
    x: 0,
    transition: {
      delay: 0.8,
      duration: 0.5,
    },
  },
};
export const exportShareAnimation2 = {
  hidden: {
    y: 300,
    x: -65,
  },
  show: {
    y: -30,
    x: -65,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
};
export const exportShareAnimation3 = {
  hidden: {
    y: 300,
    x: -230,
  },
  show: {
    y: 0,
    x: 0,
    transition: {
      delay: 1.2,
      duration: 0.5,
    },
  },
};
