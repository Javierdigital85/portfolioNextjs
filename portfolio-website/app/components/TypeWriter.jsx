"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeWriter = () => {
  return (
    <TypeAnimation
      sequence={["Lorenzo Javier Colodro", 1000, "a Software Developer", 1000]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default TypeWriter;
