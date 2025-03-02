import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex py-3 flex-wrap justify-around">
      <h1 className="text-lg font-semibold text-center sm:text-start">
        ToDo App
      </h1>
      <nav className="w-fit hidden sm:flex">
        <ul className="flex gap-[40px] text-base">
          <Link href="#">
            <li className="hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer">
              Home
            </li>
          </Link>
          <Link href="#">
            <li className="hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer">
              Products
            </li>
          </Link>
          <Link href="#">
            <li className="hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer">
              About
            </li>
          </Link>
          <Link href="#">
            <li className="hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
