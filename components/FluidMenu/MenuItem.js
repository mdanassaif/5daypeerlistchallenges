import { motion, AnimatePresence } from 'framer-motion';
import { itemVariants, labelVariants } from './menuAnimations';

const MenuItem = ({ item, index, totalItems, isOpen, hoveredItem, setHoveredItem }) => {
  return (
    <motion.div
      key={item.id}
      custom={index}
      variants={itemVariants}
      initial="closed"
      animate="open"
      exit="closed"
      whileHover={{
        scale: 1.1,
        y: -2,
        zIndex: 10,
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setHoveredItem(item.id)}
      onHoverEnd={() => setHoveredItem(null)}
      className="flex items-center justify-center w-14 h-14 rounded-full bg-[#f5f5f7] shadow-sm relative"
    >
      {index < totalItems - 1 && (
        <motion.div 
          className="absolute bottom-[-5px] w-6 h-6 bg-[#f5f5f7] rounded-full z-1"
          animate={{
            scale: isOpen ? 1 : 0,
            transition: { delay: index * 0.05, duration: 0.2 }
          }}
        />
      )}
      
      <AnimatePresence>
        {hoveredItem === item.id && (
          <motion.div
            variants={labelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute left-12 bg-white px-3 py-1.5 rounded-md text-sm font-medium shadow-md z-20 whitespace-nowrap"
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.span 
        className="text-lg relative z-10"
        animate={{
          color: hoveredItem === item.id ? "#000" : "#888",
          scale: hoveredItem === item.id ? 1.2 : 1,
          transition: { duration: 0.2 }
        }}
      >
        {item.icon}
      </motion.span>
    </motion.div>
  );
};

export default MenuItem;