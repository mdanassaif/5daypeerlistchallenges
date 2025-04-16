import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import Link from 'next/link';

export default function CollectiblesView() {
  const [activeView, setActiveView] = useState('list');
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleViewChange = (view) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveView(view);
    setTimeout(() => setIsAnimating(false), 600);
  };
  
  const collectibles = [
    {
      id: "skilled",
      name: 'Skilled Fingers Series',
      price: '0.855',
      number: '#209',
      bgColor: 'bg-purple-100',
      image: "/image1.svg",  
    },
    {
      id: "vibrant",
      name: 'Vibrant Vibes Series',
      price: '0.209',
      number: '#808',
      bgColor: 'bg-blue-100',
      image: "/image2.svg", 
    }
  ];

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-50">
      <div className="w-[380px] p-6 rounded-xl">
     
        <h1 className="text-xl font-semibold text-left mb-6">Collectibles</h1>
        
       
        <div className="flex justify-center space-x-2 mb-2">
          <button
            onClick={() => handleViewChange('list')}
            className={`h-10 px-4 rounded-full text-sm flex items-center whitespace-nowrap transition-all ${
              activeView === 'list' ? 'bg-blue-400 text-white' : 'bg-gray-100 text-gray-500'
            }`}
            disabled={isAnimating}
          >
            <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span>List view</span>
          </button>
          
          <button
            onClick={() => handleViewChange('card')}
            className={`h-10 px-4 rounded-full text-sm flex items-center whitespace-nowrap transition-all ${
              activeView === 'card' ? 'bg-blue-400 text-white' : 'bg-gray-100 text-gray-500'
            }`}
            disabled={isAnimating}
          >
            <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>Card view</span>
          </button>
          
          <button
            onClick={() => handleViewChange('pack')}
            className={`h-10 px-4 rounded-full text-sm flex items-center whitespace-nowrap transition-all ${
              activeView === 'pack' ? 'bg-blue-400 text-white' : 'bg-gray-100 text-gray-500'
            }`}
            disabled={isAnimating}
          >
            <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" />
            </svg>
            <span>Pack view</span>
          </button>
        </div>

       
        <div className="h-px bg-gray-200 w-full mb-6"></div>

        
        <LayoutGroup>
          {activeView === 'pack' ? (
            <motion.div
              key="pack-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <motion.div 
                layoutId="container"
                className="w-40 h-40 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden"
                transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 30 }}
              >
              
                <motion.div 
                  layoutId="skilled-image-container" 
                  className="absolute z-10 -left-2 -bottom-2 transform rotate-12"
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  <motion.img 
                    layoutId="skilled-image"
                    src={collectibles[0].image} 
                    alt={collectibles[0].name}
                    className="w-24 h-24 object-contain"
                    transition={{ duration: 0.6, type: "spring" }}
                  />
                </motion.div>
                
                <motion.div 
                  layoutId="vibrant-image-container" 
                  className="absolute z-20 -right-2 -top-2 transform -rotate-6"
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  <motion.img 
                    layoutId="vibrant-image"
                    src={collectibles[1].image} 
                    alt={collectibles[1].name}
                    className="w-24 h-24 object-contain"
                    transition={{ duration: 0.6, type: "spring" }}
                  />
                </motion.div>
                
             
                <motion.div 
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
                  initial={{ scale: 0.8, opacity: 0.3 }}
                  animate={{ scale: 1, opacity: 0.7 }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-200 to-blue-200"></div>
                </motion.div>
              </motion.div>
              
              <motion.h3 
                className="font-medium text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                2 Collectibles
              </motion.h3>
              <motion.p 
                className="text-gray-500 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                1.064 ETH
              </motion.p>
            </motion.div>
          ) : (
            <div className={activeView === 'list' ? "space-y-3" : "grid grid-cols-2 gap-4"}>
              {collectibles.map((item) => (
                <motion.div
                  layoutId={item.id}
                  key={item.id}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                    duration: 0.6
                  }}
                  className={`
                    ${activeView === 'list' 
                      ? 'flex items-center p-3 bg-gray-50 rounded-lg' 
                      : 'flex flex-col'
                    }
                  `}
                >
                  <motion.div
                    layoutId={`${item.id}-icon-container`}
                    className={`
                      ${item.bgColor} rounded-lg flex items-center justify-center
                      ${activeView === 'list' 
                        ? 'w-14 h-14 mr-3 rounded-md overflow-hidden' 
                        : 'aspect-square w-full mb-2 overflow-hidden'
                      }
                    `}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                      duration: 0.6
                    }}
                  >
                   
                    <motion.img 
                      layoutId={`${item.id}-image`}
                      src={item.image} 
                      alt={item.name}
                      className={`object-contain ${activeView === 'list' ? 'w-full h-full' : 'w-full h-full'}`}
                      transition={{ duration: 0.6, type: "spring" }}
                    />
                  </motion.div>
                  
                  <div className={activeView === 'list' ? "flex-1" : ""}>
                    <motion.h3 
                      layoutId={`${item.id}-title`}
                      className="font-normal text-sm"
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      {item.name}
                    </motion.h3>
                    <motion.div 
                      layoutId={`${item.id}-price-container`}
                      className="flex items-center"
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      <motion.span
                        layoutId={`${item.id}-price`} 
                        className="text-gray-500 text-sm"
                      >
                        {item.price} ETH
                      </motion.span>
                      <motion.span
                        layoutId={`${item.id}-number`} 
                        className="ml-auto text-yellow-500 bg-yellow-50 px-2 py-0.5 rounded-full text-xs"
                      >
                        {item.number}
                      </motion.span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </LayoutGroup>
      </div>

      <div className="absolute bottom-8 flex space-x-4">
          <Link href="/day4" className="px-3 py-1 text-xs text-gray-500 border border-gray-200 rounded-md hover:bg-gray-50 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Previous: Day 4
          </Link>
          <Link href="/" className="px-3 py-1 text-xs text-gray-500 border border-gray-200 rounded-md hover:bg-gray-50">
            Back to Home
          </Link>
          
        </div>
    </div>
  );
}