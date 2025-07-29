import React from "react";
import Image from "next/image";
import Picture from "../../public/images/profile.jpeg";
import TypeWriter from "./TypeWriter";

const Header = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout (< 640px) - Vertical Stack */}
        <div className="flex flex-col items-center text-center sm:hidden">
          {/* Profile Image - Mobile */}
          <div className="mb-8">
            <div className="w-[200px] h-[200px] relative overflow-hidden rounded-full shadow-lg">
              <Image
                src={Picture}
                alt="Lorenzo Javier Colodro - Full Stack Developer"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Content - Mobile */}
          <div className="w-full max-w-sm">
            {/* Title */}
            <div className="mb-6">
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 text-3xl font-extrabold mb-2">
                Hello, I&apos;m
              </div>
              <div className="text-white text-3xl font-extrabold leading-tight">
                <TypeWriter />
              </div>
            </div>

            {/* Subtitle */}
            <div className="mb-6">
              <p className="text-[#ADB7BE] text-base">
                Welcome to my Portfolio!
              </p>
            </div>

            {/* Download Button */}
            <div>
              <button className="px-1 py-1 w-full rounded-full bg-gradient-to-br from-blue-500 via-blue-450 to-blue-500 hover:bg-slate-800 text-white transition-all duration-300">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 transition-all duration-300">
                  <a
                    href="/Javier-Colodro-CV-20250130.pdf"
                    download="JavierColodroCV"
                    className="text-white no-underline"
                  >
                    Download CV
                  </a>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Tablet & Desktop Layout (>= 640px) - Side by Side */}
        <div className="hidden sm:grid sm:grid-cols-12 sm:gap-6 lg:gap-8 lg:h-[650px] sm:items-center">
          {/* Content Section */}
          <div className="sm:col-span-7 lg:col-span-8 sm:order-1 lg:order-1">
            <div className="text-left">
              {/* Title */}
              <div className="mb-6 lg:mb-8">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold mb-2">
                  Hello, I&apos;m
                </div>
                <div className="text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight sm:leading-normal lg:leading-normal">
                  <TypeWriter />
                </div>
              </div>

              {/* Subtitle */}
              <div className="mb-6 lg:mb-8">
                <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
                  Welcome to my Portfolio!
                </p>
              </div>

              {/* Download Button */}
              <div>
                <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-blue-450 to-blue-500 hover:bg-slate-800 text-white transition-all duration-300">
                  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 transition-all duration-300">
                    <a
                      href="/Javier-Colodro-CV-20250130.pdf"
                      download="JavierColodroCV"
                      className="text-white no-underline"
                    >
                      Download CV
                    </a>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="sm:col-span-5 lg:col-span-4 sm:order-2 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[500px] xl:w-[450px] xl:h-[550px] relative overflow-hidden rounded-full shadow-xl">
              <Image
                src={Picture}
                alt="Lorenzo Javier Colodro - Full Stack Developer"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
