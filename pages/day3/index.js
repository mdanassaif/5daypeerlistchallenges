 
 
import Head from 'next/head';
import Link from 'next/link';

export default function Day1() {
  return (
    <>
      <Head>
        <title>Day 3: not yet get | Peerlist Challenge</title>
        <meta name="description" content="A fluid menu animation challenge from Peerlist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex flex-col justify-center items-center h-screen bg-white relative">

      <p className="text-gray-400 font-light text-xl mt-4">
          Not yet get, still exciting to participate 😎🚀
        </p>
        
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