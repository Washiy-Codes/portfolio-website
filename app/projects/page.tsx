import Link from 'next/link'
import { projects } from '../data'
// import Image from 'next/image'

const Projects = () => {
    return (
        /* Added w-[85%] and ml-[15%] to shift the content area to the right of the fixed sidebar */
        <div className="p-6 bg-gray-950 min-h-[calc(100vh-3.5rem)] w-[85%] ml-[15%] flex flex-col">
            <div className="flex flex-col items-center justify-center mt-10">
                <h1 className="text-3xl font-bold mb-4 text-gray-100">All my projects at one place</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white p-4 shadow-md rounded-md flex flex-col justify-between fade-in-from-top">
                        <div>
                            <img src={project.image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover mb-4 rounded-sm" />
                            <h2 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h2>
                            <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                        </div>
                        
                        {/* Cleaned up flex layout for your buttons */}
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

export default Projects;
