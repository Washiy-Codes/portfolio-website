import Link from 'next/link'
import { projects } from '../data'


const PortfolioPage = () => {
  return (
    <div className="p-6 bg-gray-950 min-h-[calc(100vh-3.5rem)] w-[85%] ml-[15%] flex flex-col mt-14">
      <h1 className="text-3xl font-bold mb-4 text-gray-100">Portfolio</h1>
      <p className="text-gray-300 mb-4">Welcome to my portfolio page! Here you can find a collection of my projects and work.</p>
      <p className="text-gray-300">Feel free to explore and check out the details of each project.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white p-4 shadow-md rounded-md flex flex-col justify-between fade-in-from-top">
                        <div>
                            <img src={project.image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover mb-4 rounded-sm" />
                            <h2 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h2>
                            <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                        </div>
                        
                        <div className="flex justify-between items-center mt-4">
                                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </Link>
                                <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                    Live Demo
                                </Link>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default PortfolioPage