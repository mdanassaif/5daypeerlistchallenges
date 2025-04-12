export const menuVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
      when: 'afterChildren',
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 30,
      when: 'beforeChildren',
      staggerChildren: 0.07,
    },
  },
};

export const itemVariants = {
  closed: (index) => ({
    opacity: 0,
    y: -20,
    scale: 0.6,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 30,
      delay: index * 0.03,
    },
  }),
  open: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 25,
      mass: 0.8,
      delay: index * 0.08,
    },
  }),
};

export const iconVariants = {
  closed: { 
    opacity: 0, 
    scale: 0.8,
    transition: { duration: 0.2 }
  },
  open: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.3, ease: "easeOut" } 
  },
};

export const buttonVariants = {
  hover: { 
    scale: 1.05,
    boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  tap: { 
    scale: 0.95,
    boxShadow: "0px 1px 2px rgba(0,0,0,0.1)",
    transition: { duration: 0.15 }
  },
};

export const labelVariants = {
  hidden: { 
    opacity: 0, 
    x: 5, 
    width: "auto", 
    pointerEvents: "none" 
  },
  visible: { 
    opacity: 1, 
    x: 30, 
    width: "auto", 
    pointerEvents: "auto",
    transition: { 
      type: "spring", 
      stiffness: 500, 
      damping: 25 
    } 
  },
  exit: { 
    opacity: 0, 
    x: 10, 
    transition: { 
      duration: 0.2,
      ease: "easeOut" 
    } 
  }
};