import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Day3() {
  const [tasks, setTasks] = useState({
    groceries: false,
    existence: false,
    swiftUI: true,
  });
  
  const [loading, setLoading] = useState({
    groceries: false,
    existence: false,
    swiftUI: false,
  });

  const toggleTask = (task) => {
 
    setLoading((prev) => ({ ...prev, [task]: true }));
 
    setTimeout(() => {
      setTasks((prev) => ({ ...prev, [task]: !prev[task] }));
      setLoading((prev) => ({ ...prev, [task]: false }));
    }, 800);
  };

  const checkboxVariants = {
    checked: { 
      scale: 1,
      transition: { duration: 0.4, type: 'spring', stiffness: 300 } 
    },
    unchecked: { 
      scale: 1,
      x: [0, -3, 3, -2, 2, 0],  
      transition: { 
        scale: { duration: 0.4, type: 'spring', stiffness: 300 },
        x: { duration: 0.4 }
      } 
    },
    tap: { 
      scale: 0.85, 
      transition: { duration: 0.1 } 
    }
  };

 
  const textVariants = {
    unchecked: { 
      x: [0, 5, -5, 3, -3, 0],  
      transition: { 
        x: { duration: 0.5, ease: "easeOut" },
        opacity: { duration: 0.3 }
      } 
    },
    checked: { 
      x: [-10, 0],
      transition: { 
        x: { duration: 0.5, ease: "easeOut" },
        opacity: { duration: 0.3 }
      } 
    }
  };

 
  const strikethroughVariants = {
    hidden: { width: '0%' },
    visible: { 
      width: '100%',
      transition: { duration: 0.7, ease: "easeInOut" }
    }
  };

  const checkMarkVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: { 
      opacity: 1, 
      pathLength: 1,
      transition: { duration: 0.6 }
    }
  };

 
  const borderAnimationVariants = {
    initial: { pathLength: 0, pathOffset: 0 },
    animate: { 
      pathLength: 1,
      pathOffset: 0,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  return (
    <>
      <Head>
        <title>Day 3: Animated Checkboxes | UI Challenge</title>
        <meta name="description" content="Checkbox interactions that bring personality and satisfaction to completing tasks" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center items-center h-screen bg-gray-50 relative">
        <div className="bg-white p-6 rounded-xl shadow-sm w-80">
          <div className="space-y-3">
            {Object.entries(tasks).map(([task, checked]) => {
              const wasChecked = checked && !loading[task];
              const isBeingUnchecked = loading[task] && checked;
              const isBeingChecked = loading[task] && !checked;
              
              return (
                <div
                  key={task}
                  className="flex items-center space-x-3 cursor-pointer rounded-lg p-2 hover:bg-gray-50 transition-colors"
                  onClick={() => !loading[task] && toggleTask(task)}
                >
                  <div className="relative">
                    <div className="w-5 h-5 rounded-md bg-gray-50" />

                    {loading[task] && (
                      <svg className="absolute inset-0 w-5 h-5" viewBox="0 0 20 20">
                        <motion.rect
                          x="1" 
                          y="1" 
                          width="18" 
                          height="18" 
                          rx="3"
                          fill="none"
                          stroke="#6366f1" 
                          strokeWidth="2"
                          strokeLinecap="round"
                          variants={borderAnimationVariants}
                          initial="initial"
                          animate="animate"
                        />
                      </svg>
                    )}
                    
                    <motion.div
                      className={`absolute inset-0 rounded-md flex items-center justify-center border-2 transition-colors ${
                        loading[task] 
                          ? 'border-transparent' 
                          : checked 
                            ? 'bg-blue-500 border-blue-500' 
                            : 'border-gray-300'
                      }`}
                      variants={checkboxVariants}
                      animate={isBeingUnchecked ? 'unchecked' : checked ? 'checked' : 'unchecked'}
                      whileTap={!loading[task] ? "tap" : undefined}
                      initial={false}
                    >
                      <AnimatePresence>
                        {wasChecked && (
                          <motion.svg
                            key="check"
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, scale: 0, transition: { duration: 0.3 } }}
                          >
                            <motion.path
                              variants={checkMarkVariants}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </motion.svg>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                  
                  <div className="relative overflow-hidden">
                    <motion.span
                      className={`text-base font-medium inline-block ${wasChecked ? 'text-gray-400' : 'text-gray-800'}`}
                      animate={{ opacity: loading[task] ? 0.7 : 1 }}
                      variants={textVariants}
                      initial={false}
                    
                    >
                      {task === 'groceries' && 'Buy groceries'}
                      {task === 'existence' && 'Contemplate existence'}
                      {task === 'swiftUI' && 'Learn SwiftUI'}
                    </motion.span>
                    
               
                    <AnimatePresence>
                      {wasChecked && (
                        <motion.div 
                          className="absolute left-0 top-1/2 h-0.5 bg-gray-400 -translate-y-1/2 origin-left"
                          variants={strikethroughVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-8 flex space-x-4">
          <Link href="/day2" className="px-3 py-1 text-xs text-gray-500 border border-gray-200 rounded-md hover:bg-gray-50 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Previous: Day 2
          </Link>
          <Link href="/" className="px-3 py-1 text-xs text-gray-500 border border-gray-200 rounded-md hover:bg-gray-50">
            Back to Home
          </Link>
          <Link href="/day4" className="px-3 py-1 text-xs text-blue-500 border border-blue-200 rounded-md hover:bg-blue-50 flex items-center">
            Next: Day 4
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}