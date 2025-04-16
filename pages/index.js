// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const challenges = [
    {
      day: 1,
      title: "Fluid Menu Animation",
      description: "Menu with liquid-like animations triggered from top left",
      status: "Completed",
      path: "/day1"
    },
    {
      day: 2,
      title: "Dynamic Status Indicator",
      description: "Status indicator inspired by Benji Taylor",
      status: "Completed",
      path: "/day2"
    },
    {
      day: 3,
      title: "Animated Checkboxes",
      description: "Animated Checkboxes by Rauno Frielberg",
      status: "Completed",
      path: "/day3"
    },
    {
      day: 4,
      title: "Animated Toggles",
      description: "Animated toggles switch that transitions smoothly between pricing options, offering users by LN.",
      status: "Completed",
      path: "/day4"
    },
    {
      day: 5,
      title: "Shared Layout Tabs",
      description: "Design a tab navigation that transitions smoothly between different content by Ben", 
      status: "Completed",
      path: "/day5"
    }
  ];
 

  return (
    <>
      <Head>
        <title>My Peerlist UI Challenge Submissions</title>
        <meta name="description" content="My submissions for the 5-day Peerlist UI animation challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-white py-8 px-4 max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-10 text-center"
        >
          <h1 className="text-2xl font-medium text-gray-900 mb-1">
            My Peerlist UI Challenge Submissions
          </h1>
          <p className="text-sm text-gray-500">
            Tracking my progress in the 5-day animation challenge
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {challenges.map((challenge) => (
            <motion.div
              key={challenge.day}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="border border-gray-100 rounded-lg p-4 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">Day {challenge.day}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  challenge.status === "Completed" 
                    ? "bg-green-50 text-green-600" 
                    : "bg-gray-50 text-gray-600"
                }`}>
                  {challenge.status}
                </span>
              </div>
              
              <h2 className="text-base font-medium mb-1">
                {challenge.title}
              </h2>
              
              <p className="text-xs text-gray-600 mb-2">
                {challenge.description}
              </p>
              
              {challenge.status === "Completed" && (
                <Link href={challenge.path}>
                  <div className="text-blue-500 text-xs flex items-center">
                    View my solution
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-400">
          <a 
            href="https://github.com/mdanassaif/5daypeerlistchallenges" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            My GitHub repo
          </a>
        </div>
      </div>
    </>
  );
}