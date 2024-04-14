import React from "react";
import Image from "next/image";
import Picture from "../../public/images/javiFacebook.jpeg";
import TypeWriter from "./TypeWriter";
{/* eslint-disable-next-line react/no-unescaped-entities */}
const Header = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Hello, I'm {""}
            </span>
            <br></br>
            <TypeWriter />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
           Welcome to my Portfolio!
          </p>
          <div>
            {/* <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 hover:bg-slate-200 text-white">
              Hire me
            </button> */}
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-blue-450 to-blue-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <a href="/javier.pdf" target="_blank" download="CVeng.pdf">
                  Download CV
                </a>
              </span>
            </button>
          </div>
        </div>
        {/* IMAGEN */}
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={Picture}
              alt="personal image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
