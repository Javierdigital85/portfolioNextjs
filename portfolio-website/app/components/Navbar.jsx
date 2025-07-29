"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import NavbarLink from "./NavbarLink";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNavbar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const handleSandwich = () => {
  //   setNavbar(!navbarOpen); // Toggle the value of navbarOpen
  // };

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          LJC
        </Link>
        <div className="mobile-me block md:hidden">
          {
            !navbarOpen ? (
              <button
                onClick={() => setNavbar(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition-all duration-300"
              >
                <Bars3Icon className="h-5 w-5 transition-all duration-300" />
              </button>
            ) : (
              <button
                onClick={() => setNavbar(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition-all duration-300"
              >
                <XMarkIcon className="h-5 w-5 transition-all duration-300" />
              </button>
            )
            // aca tenia el codigo comentado codigo uno
          }
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavbarLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        {/* aca tenia el codigo comentado codigo dos*/}
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navLinks} onLinkClick={() => setNavbar(false)} />
      ) : null}
    </nav>
  );
};

export default Navbar;

//codigo uno
// <button
//   onClick={handleSandwich}
//   className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition-all duration-300"
// >
//   {navbarOpen ? (
//     <XMarkIcon className="h-5 w-5 transition-all duration-300" />
//   ) : (
//     <Bars3Icon className="h-5 w-5 transition-all duration-300" />
//   )}
// </button>

{
  //codigo dos
  /* <div
          className="menu block md:w-auto transition-all duration-300"
          id="navbar"
        >
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <li>
              <Link
                href="#about"
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div> */
}
