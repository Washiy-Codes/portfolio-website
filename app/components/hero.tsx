import Link from "next/link"
import { contactPath, portfolioPath } from "../paths"

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-gray-950 text-white px-6">

      <p className="text-gray-400 text-sm mb-2">
        👋 Hi, I’m
      </p>

      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Joseph Wachira
      </h1>

      <h2 className="text-lg md:text-2xl text-gray-300 max-w-xl mb-6">
        I build modern, responsive web applications that help businesses grow and stand out online.
      </h2>

      <div className="flex gap-4">
        <Link href={portfolioPath()}>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition">
            View My Work
          </button>
        </Link>

        <Link href={contactPath()}>
          <button className="border border-gray-600 hover:border-white py-3 px-6 rounded-lg transition">
            Contact Me
          </button>
        </Link>
      </div>

    </section>
  )
}

export default Hero
