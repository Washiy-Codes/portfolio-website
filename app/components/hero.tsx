// import Link from "next/link"
// import { portfolioPath } from "../paths"
// const Hero = () => {
    
//   return (
//     <div className="w-[85%] ml-[15%] min-h-screen flex flex-col">
//      <div className="top-14 left-0 w-full min-h-screen/3 flex justify-start ">
//         <h1 className="text-4xl font-bold animate-gradient whitespace-nowrap">Welcome to My Portfolio</h1>
//      </div>
//      <div className="flex flex-col items-center justify-center space-y-4">
//       <h1 className="text-4xl font-bold animate-gradient whitespace-nowrap">Joseph Wachira</h1>
//       <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32">
//         <Link href={portfolioPath()}>Get Started</Link> 
//       </button>
//     </div>
//     </div>
//   )
// }

// export default Hero

import Link from "next/link"
import { portfolioPath } from "../paths"

const Hero = () => {
  return (
    <div className="w-[85%] ml-[15%] min-h-screen relative">
      
      <div className="absolute top-6 left-0">
        <h1 className="text-xl md:text-2xl font-bold tracking-wide text-gray-400">
          Welcome to My Portfolio
        </h1>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl md:text-3xl font-semibold animate-gradient whitespace-nowrap">
          Joseph Wachira
        </h1>
        
        <Link href={portfolioPath()} passHref>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2.5 px-6 rounded transition-colors duration-200 shadow-md">
            Get Started
          </button>
        </Link>
      </div>

    </div>
  )
}

export default Hero
