import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import "../styles/tarjeta.css";
import Image from "next/image";

const ProjectsCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  web,
  inDevelopment,
  tag,
}) => {
  return (
    <div className="tarjeta relative">
      {inDevelopment && (
        <span className="absolute top-3 left-3 z-10 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
          In Development
        </span>
      )}
      <div
        className="image-container h-52 md:h-80 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl}) center center/contain no-repeat`,
          height: "400px",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {inDevelopment ? (
            <span className="h-24 w-24 mr-2 border-2 relative rounded-full border-[#ADB7BE] opacity-40 cursor-not-allowed flex items-center justify-center">
              <p className="text-[#ADB7BE] text-center text-xs">FRONTEND</p>
            </span>
          ) : (
            <Link
              target="_blank"
              href={gitUrl}
              className="h-24 w-24 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <p className="h-18 w-15 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white">
                FRONTEND
              </p>
            </Link>
          )}
          {inDevelopment ? (
            <span className="h-24 w-24 border-2 relative rounded-full border-[#ADB7BE] opacity-40 cursor-not-allowed flex items-center justify-center">
              <p className="text-[#ADB7BE] text-center text-xs">BACKEND</p>
            </span>
          ) : (
            <Link
              target="_blank"
              href={previewUrl}
              className="h-24 w-24 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <p className="h-18 w-15 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white">
                BACKEND
              </p>
            </Link>
          )}
          {web &&
            (inDevelopment ? (
              <span className="h-24 w-24 ml-2 border-2 relative rounded-full border-[#ADB7BE] opacity-40 cursor-not-allowed flex items-center justify-center">
                <p className="text-[#ADB7BE] text-center text-xs">DEPLOYED</p>
              </span>
            ) : (
              <Link
                target="_blank"
                href={web}
                className="h-24 w-24 ml-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              >
                <p className="h-18 w-15 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white">
                  DEPLOYED
                </p>
              </Link>
            ))}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        {tag
          .filter((t) => t !== "All")
          .map((t, i) => (
            <span key={i} className="text-sm px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">{t}</span>
          ))}
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
