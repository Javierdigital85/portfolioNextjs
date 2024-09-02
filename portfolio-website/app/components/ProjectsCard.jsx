import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import "../styles/tarjeta.css"

const ProjectsCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  web,
}) => {
  return (
    <div className="tarjeta">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})  center center/cover no-repeat` }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            target="_blank"
            href={gitUrl}
            className="h-24 w-24 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            {/* <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" /> */}
            <p className="h-18 w-15 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
              FRONTEND
            </p>
          </Link>
          <Link
            target="_blank"
            href={previewUrl}
            className="h-24 w-24 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <p className="h-18 w-15 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
              BACKEND
            </p>
            {/* <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" /> */}
          </Link>
          {web ? (
            <Link
              target="_blank"
              href={web}
              className="h-24 w-24 ml-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <p className="h-18 w-15 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
                DEPLOYED
              </p>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
