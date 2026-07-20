import { Button } from "@/components/ui/button";
import { clsx } from "clsx";
import { Kanban, LucideHouse, LucideUser, UserRoundKey } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-[10%] align-items-left flex flex-col gap-y-3 h-full bg-gray-800 text-white p-4 transition-transform duration-500 z-50",
      )}
    >
      <Button variant="ghost">
        <Link href="/" className="flex items-center gap-2">
          <LucideHouse />
          Home
        </Link>
      </Button>

      <Button variant="ghost">
        <Link href="/about" className="flex items-center gap-2">
          <LucideUser />
          About
        </Link>
      </Button>

      <Button variant="ghost" >
        <Kanban />
        <Link href="/projects" className="flex items-center gap-2">
          Projects
        </Link>
      </Button>

      <Button variant="ghost" >
        <Link href="/contact" className="flex items-center gap-2">
          <UserRoundKey />
          Contact
        </Link>
      </Button>
    </div>
  );
}