import Head from 'next/head';
import FluidMenu from '../components/FluidMenu';

export default function Home() {
  return (
    <>
      <Head>
        <title>PeerList Rocks</title>
        <meta name="description" content="A fluid menu animation challenge from Peerlist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-white flex flex-col items-center justify-center relative">
        <FluidMenu />
        <h1 className="text-2xl md:text-4xl text-gray-400 font-light text-center">
          Open the menu on the top left corner
        </h1>
        
        <div className="absolute bottom-5 text-center w-full">
          <p className="text-gray-500 text-sm">
            Loving this 5 day challenge from Peerlist
          </p>
          <a 
            href="https://github.com/mdanassaif/5daypeerlistchallenges" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 text-sm underline mt-1 inline-block"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </>
  );
}