import { motion, AnimatePresence } from 'framer-motion';
import { buttonVariants, iconVariants } from './menuAnimations';

const MenuButton = ({ isOpen, toggleMenu }) => {
  return (
    <motion.button
      onClick={toggleMenu}
      className="w-14 h-14 flex items-center justify-center bg-[#f5f5f7] rounded-full focus:outline-none"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="close"
            variants={iconVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            variants={iconVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default MenuButton;