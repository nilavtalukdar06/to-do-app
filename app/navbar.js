"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="px-5 py-3 w-full flex justify-between items-center border-b-[1.5px] border-dashed">
      <button
        className="flex flex-1 justify-start items-center cursor-pointer"
        onClick={() => window.location.reload()}
      >
        <Image src="/next.svg" width={100} height={33} alt="Logo" />
      </button>
      <div className="flex justify-center items-center gap-x-4 text-sm text-slate-800">
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
      <div className="flex flex-1 justify-end items-center">
        <Button className="bg-[#3fcf8e] border-[#34b27b] border-[1.5px] hover:bg-[#34b27b] transition-colors duration-300 ease-in-out">
          Log Out
        </Button>
      </div>
    </header>
  );
}
