import React from "react";
import Image from "next/image";
import Picture from "../../public/images/profile.jpeg";
import TypeWriter from "./TypeWriter";

const Header = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 lg:h-[650px]">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Hello, I&apos;m {""}
            </span>
            <br></br>
            <TypeWriter />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Welcome to my Portfolio!
          </p>
          <div>
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
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[600px] relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={Picture}
                alt="personal image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
