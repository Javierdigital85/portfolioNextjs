"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeWriter = () => {
  return (
    <div
      className="w-full min-h-[2.5em]"
      style={{
        position: "relative",
      }}
    >
      <TypeAnimation
        sequence={[
          "Lorenzo Javier Colodro",
          1000,
          "a Full Stack Developer",
          1000,
        ]}
        wrapper="div"
        speed={50}
        repeat={Infinity}
        style={{
          width: "100%",
          overflowWrap: "break-word",
          hyphens: "auto",
          lineHeight: "1.2",
          display: "block",
        }}
      />
    </div>
  );
};

export default TypeWriter;
