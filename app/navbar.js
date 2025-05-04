"use client";
import { Button } from "@/components/ui/button";
import { Menu, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="px-5 py-3 w-full flex relative justify-between items-center border-b-[1.5px] border-dashed">
      <button
        className="flex flex-1 justify-start items-center cursor-pointer"
        onClick={() => window.location.reload()}
      >
        <Image src="/next.svg" width={100} height={33} alt="Logo" />
      </button>
      <div className="sm:flex justify-center items-center gap-x-4 text-sm text-slate-800 hidden">
        <Link
          href="/"
          className="hover:text-[#34b37b] transition-colors duration-200 ease-in-out"
        >
          Add Task
        </Link>
        <Link
          href="/tasks"
          className="hover:text-[#34b37b] transition-colors duration-200 ease-in-out"
        >
          Show Tasks
        </Link>
      </div>
      <div className="sm:flex flex-1 justify-end items-center hidden">
        <Button className="bg-[#3fcf8e] border-[#34b27b] border-[1.5px] hover:bg-[#34b27b] transition-colors duration-300 ease-in-out">
          Log Out
        </Button>
      </div>

      {/* Mobile menu */}
      <div className="flex flex-1 justify-end items-center sm:hidden">
        <Button
          className="bg-[#3fcf8e] border-[#34b27b] border-[1.5px] hover:bg-[#34b27b] transition-colors duration-300 ease-in-out"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <XIcon color="white" /> : <Menu color="white" />}
        </Button>
      </div>
      <div
        className={`absolute top-14 z-50 shadow-sm right-4 bg-white rounded-lg px-6 py-3 border-dashed border-[1.5px] transition-all duration-150 ease-in ${
          isOpen ? "scale-100" : "scale-0"
        }`}
      >
        <div className="flex flex-col gap-y-4 items-start justify-center">
          <Link
            href="/"
            className="hover:text-[#34b37b] transition-colors duration-200 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            Add Task
          </Link>
          <Link
            href="/tasks"
            className="hover:text-[#34b37b] transition-colors duration-200 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            Show Tasks
          </Link>
          <Button
            className="bg-[#3fcf8e] border-[#34b27b] border-[1.5px] hover:bg-[#34b27b] transition-colors duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            Log Out
          </Button>
        </div>
      </div>
    </header>
  );
}
