import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaEnvelope, FaCog } from 'react-icons/fa';
import { menuVariants } from './menuAnimations';
import MenuButton from './MenuButton';
import MenuItem from './MenuItem';

const navItems = [
  { id: 1, icon: <FaHome />, label: 'Home' },
  { id: 2, icon: <FaEnvelope />, label: 'Contact' },
  { id: 3, icon: <FaUser />, label: 'About' },
  { id: 4, icon: <FaCog />, label: 'Settings' },
];

const FluidMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="absolute top-4 left-4 z-20">
      <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-16 left-4"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{ width: '48px' }}
          >
            <div className="flex flex-col space-y-[-5px]">
              {navItems.map((item, index) => (
                <MenuItem 
                  key={item.id}
                  item={item} 
                  index={index} 
                  totalItems={navItems.length}
                  isOpen={isOpen}
                  hoveredItem={hoveredItem}
                  setHoveredItem={setHoveredItem}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FluidMenu;