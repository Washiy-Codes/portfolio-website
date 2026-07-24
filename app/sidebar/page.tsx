

"use client"; 
import { usePathname } from "next/navigation"; 
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { aboutPath, contactPath, portfolioPath} from "../paths";
import {LucideUser, LucideFolderOpenDot, LucideSmartphoneNfc } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname(); 
  const isActive = (path: string) => pathname === path;

  return (
    <aside className="bg-teal-900 text-white p-4 w-[15%] h-[calc(100vh-3.5rem)] fixed top-14 left-0 z-40">
      <div className="flex flex-col space-y-4 mt-2">

        <Button 
          variant={isActive(aboutPath()) ? "secondary" : "default"} 
        >
          <Link href={aboutPath()} className="flex items-center justify-start gap-3 w-full px-2">
            <LucideUser className="h-5 w-5 shrink-0" />
            <span>About</span>
          </Link>
        </Button>

        <Button 
          variant={isActive(portfolioPath()) ? "secondary" : "default"} 
        >
          <Link href={portfolioPath()} className="flex items-center justify-start gap-3 w-full px-2">
            <LucideFolderOpenDot className="h-5 w-5 shrink-0" />
            <span>Portfolio</span>
          </Link>
        </Button>

        <Button 
          variant={isActive(contactPath()) ? "secondary" : "default"} 
        >
          <Link href={contactPath()} className="flex items-center justify-start gap-3 w-full px-2">
            <LucideSmartphoneNfc className="h-5 w-5 shrink-0" />
            <span>Contact</span>
          </Link>
        </Button>

      </div>
    </aside>
  );
};

export default Sidebar;
