import { Button } from "@/components/ui/button";
import Link from "next/link";
import { clsx } from "clsx";


export default function Hero({isOpen, onClick}: {isOpen: boolean, onClick: () => void}) {
  return (
    <section className={clsx(
      "h-screen flex flex-col justify-center items-center text-center bg-black text-white"
    ) }>
      
      {/* Animated Name */}
      <h1 className="text-5xl font-bold mb-6 animate-gradient">
        Joseph Wachira
      </h1>

      <p className="mb-6 text-gray-300">
        Frontend Developer | React | Next.js
      </p>
      <Button
        className="px-6 py-3 bg-blue-500 hover:bg-blue-700 transition rounded"
      >
        <Link href="/about" className="text-white">
          Enter Portfolio
        </Link>
      </Button>
    </section>
  );
}
       