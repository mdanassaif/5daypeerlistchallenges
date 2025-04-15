import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Day4() {
 
  const [selectedType, setSelectedType] = useState('free');
  const [selectedPlan, setSelectedPlan] = useState('monthly');
 
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };
 
  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <>
      <Head>
        <title>Day 4: Animated Toggle | Peerlist Challenge</title>
        <meta name="description" content="An animated toggle switch challenge from Peerlist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex flex-col justify-center items-center h-screen bg-white relative">
 
        <div className="relative w-full max-w-md">
          <div className="relative flex items-center w-full h-16 bg-gray-100 rounded-full overflow-hidden">
 
           
            <motion.div 
              className="absolute h-16 rounded-full bg-black"
              initial={false}
              animate={{ 
                width: '50%',
                left: selectedType === 'free' ? '0%' : '50%'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
            
 
            {selectedType === 'premium' && (
              <motion.div 
                className="absolute h-14 m-1 rounded-full bg-white"
                initial={{ width: '0%' }}
                animate={{
                  width: '23%',
                  left: selectedPlan === 'monthly' ? '51%' : '76%',
                }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              />
            )}
            
 
            <button
              onClick={() => handleTypeChange('free')}
              className={`relative z-10 w-1/2 h-full flex items-center justify-center rounded-full font-bold text-lg transition-all duration-300 ${
                selectedType === 'free' ? 'text-white' : 'text-black'
              }`}
            >
              Free
            </button>
            
 
            <div className="relative z-10 w-1/2 h-full flex items-center justify-center">
              {selectedType === 'free' ? (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <button
                    onClick={() => handleTypeChange('premium')}
                    className="w-full flex flex-col items-center justify-center text-black transition-all duration-300"
                  >
                    <span className="font-bold text-lg">Premium</span>
                    <span className="text-xs text-gray-500">Monthly • Annual</span>
                  </button>
                </div>
              ) : (
                <div className="w-full h-full flex">
                  <motion.button
                    onClick={() => handlePlanChange('monthly')}
                    className={`w-1/2 h-full flex items-center justify-center rounded-full font-bold text-lg transition-colors duration-300 ${
                      selectedPlan === 'monthly' ? 'text-black' : 'text-white'
                    }`}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    Monthly
                  </motion.button>
                  <motion.button
                    onClick={() => handlePlanChange('annual')}
                    className={`w-1/2 h-full flex items-center justify-center rounded-full font-bold text-lg transition-colors duration-300 ${
                      selectedPlan === 'annual' ? 'text-black' : 'text-white'
                    }`}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    Annual
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-lg">
            {selectedType === 'free' ? 
              'Free Plan Selected' : 
              `Premium Plan - ${selectedPlan === 'monthly' ? 'Monthly' : 'Annual'} Billing`}
          </p>
        </div>
 
        <div className="absolute bottom-8 flex space-x-4">
          <Link href="/day3" className="px-3 py-1 text-xs text-gray-500 border border-gray-200 rounded-md hover:bg-gray-50 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Previous: Day 3
          </Link>
          <Link href="/" className="px-3 py-1 text-xs text-gray-500 border border-gray-200 rounded-md hover:bg-gray-50">
            Back to Home
          </Link>
          <Link href="/day5" className="px-3 py-1 text-xs text-blue-500 border border-blue-200 rounded-md hover:bg-blue-50 flex items-center">
            Next: Day 5
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}