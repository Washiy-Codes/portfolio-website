import Link from 'next/link'
import React from 'react'

const PortfolioPage = () => {
  return (
    <div className="p-6 bg-gray-950 min-h-[calc(100vh-3.5rem)] w-[85%] ml-[15%] flex flex-col mt-14">
      <h1 className="text-3xl font-bold mb-4 text-gray-100">Portfolio</h1>
      <p className="text-gray-300 mb-4">Welcome to my portfolio page! Here you can find a collection of my projects and work.</p>
      <p className="text-gray-300">Feel free to explore and check out the details of each project.</p>

      <div className="mt-6">
        <Link href="/projects" className="text-blue-500 hover:underline flex items-center">
          <span className="mr-2 flex flex-1 items-center justify-center">View Projects</span>
        </Link>
      </div>
    </div>
  )
}

export default PortfolioPage