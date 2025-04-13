import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

export default function Day2() {
  const [status, setStatus] = useState('analyzing');
  
  useEffect(() => {
    const cycle = ['analyzing', 'success', 'analyzing', 'warning'];
    let currentIndex = 0;
    
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % cycle.length;
      setStatus(cycle[currentIndex]);
    }, 2000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <>
      <Head>
        <title>Day 2: Status Indicator | Peerlist Challenge</title>
        <meta name="description" content="A dynamic status indicator challenge from Peerlist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex flex-col justify-center items-center h-screen bg-white relative">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            {status === 'analyzing' && (
              <motion.div
                key="analyzing"
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <div className="bg-blue-100 rounded-full px-8 py-3 flex items-center space-x-3">
                  <div className="relative w-6 h-6">
                    {/* Faster spinning loader */}
                    <motion.div 
                      className="absolute inset-0 border-t-2 border-r-2 border-blue-500 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 0.6,
                        ease: "linear" 
                      }}
                    />
                    {/* Pulsing effect for modern feel */}
                    <motion.div 
                      className="absolute inset-0 bg-blue-200 rounded-full"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ 
                        scale: [0.5, 0.8, 0.5],
                        opacity: [0, 0.2, 0] 
                      }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 1,
                        times: [0, 0.5, 1]
                      }}
                    />
                  </div>
                  <span className="text-blue-500 font-medium text-lg">Analyzing Transaction</span>
                </div>
              </motion.div>
            )}
            
            {status === 'success' && (
              <motion.div
                key="success"
                className="flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <div className="bg-green-100 rounded-full px-8 py-3 flex items-center space-x-3">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 700,
                      damping: 20
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </motion.div>
                  <span className="text-green-500 font-medium text-lg">Transaction Safe</span>
                </div>
              </motion.div>
            )}
            
            {status === 'warning' && (
              <motion.div
                key="warning"
                className="flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <motion.div 
                  className="bg-red-100 rounded-full px-8 py-3 flex items-center space-x-3"
                  initial={{ x: 0 }}
                  animate={{ x: [0, -4, 4, -2, 2, 0] }}
                  transition={{ 
                    duration: 0.3,  
                    times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 700,  
                      damping: 15
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </motion.div>
                  <span className="text-red-500 font-medium text-lg">Transaction Warning</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Navigation controls */}
        <div className="absolute bottom-8 flex space-x-4">
          <Link href="/day1" className="px-3 py-1 text-xs text-gray-500 border border-gray-200 rounded-md hover:bg-gray-50 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Previous: Day 1
          </Link>
          <Link href="/" className="px-3 py-1 text-xs text-gray-500 border border-gray-200 rounded-md hover:bg-gray-50">
            Back to Home
          </Link>
          <Link href="/day3" className="px-3 py-1 text-xs text-blue-500 border border-blue-200 rounded-md hover:bg-blue-50 flex items-center">
            Next: Day 3
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}