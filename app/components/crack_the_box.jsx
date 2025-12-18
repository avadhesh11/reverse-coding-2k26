"use client";

import React, { useState } from "react";
import Button from "./neon-button";

const Crack_the_box = () => {
  const [hoveredPath, setHoveredPath] = useState("none");

  const theme = {
    cyan: {
      bright: {
        text: "#ffffff",
        border: "#00ffff",
        fill: "rgba(0,33,33,0.15)",
        glow: "rgba(0,255,255,0.6)",
      },
      dull: {
        text: "rgb(127,144,144,0.4)",
        border: "rgb(0,127,127,0.2)",
        fill: "rgba(0,33,33,0.15)",
        glow: "rgba(0,255,255,0)",
      },
    },
  };

  const getProps = (id) => {
    const isBright =
      (id === "register" && hoveredPath !== "none") || hoveredPath === id;
    return isBright ? theme.cyan.bright : theme.cyan.dull;
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20 font-mono bg-black pb-20">
      <div className="flex items-center gap-5 mb-16">
        <h1 className="text-4xl font-extrabold text-white">
          Can you crack the
        </h1>
        <h1 className="text-4xl font-extrabold text-[#00ffff] [text-shadow:_0_0_15px_rgba(0,255,255,0.6)]">
          Black Box?
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="relative flex items-center gap-32">

          <svg
            className="absolute left-[225px] w-32 h-44 pointer-events-none overflow-visible"
            viewBox="0 0 100 120"
          >

            <path
              d="M 0 60 L 50 60 L 50 20 L 100 20 M 50 60 L 50 100 L 100 100"
              stroke="rgba(0, 255, 255, 0.15)"
              strokeWidth="1.5"
              fill="none"
            />


            {hoveredPath === "website" && (
              <path
                d="M 0 60 L 50 60 L 50 20 L 100 20"
                stroke="#00ffff"
                strokeWidth="2.5"
                fill="none"
                className="transition-all duration-300"
                style={{ filter: "drop-shadow(0 0 5px #00ffff)" }}
              />
            )}


            {hoveredPath === "unstop" && (
              <path
                d="M 0 60 L 50 60 L 50 100 L 100 100"
                stroke="#00ffff"
                strokeWidth="2.5"
                fill="none"
                className="transition-all duration-300"
                style={{ filter: "drop-shadow(0 0 5px #00ffff)" }}
              />
            )}

            <rect
              x="48"
              y="58"
              width="4"
              height="4"
              fill={hoveredPath !== "none" ? "#00ffff" : "#333"}
              transform="rotate(45 50 60)"
              className="transition-colors duration-300"
            />
          </svg>


          <div className="z-10">
            <Button
              text="Register"
              width={220}
              height={75}
              strokeWidth={2}
            />
          </div>


          <div className="flex flex-col gap-12 z-10">
            <div
              onMouseEnter={() => setHoveredPath("website")}
              onMouseLeave={() => setHoveredPath("none")}
            >
              <Button
                text="WEBSITE"
                width={220}
                height={75}
                textColor={getProps("website").text}
                borderColor={getProps("website").border}
                strokeWidth={2}
              />
            </div>

            <div
              onMouseEnter={() => setHoveredPath("unstop")}
              onMouseLeave={() => setHoveredPath("none")}
            >
              <Button
                text="UNSTOP"
                width={220}
                height={75}
                textColor={getProps("unstop").text}
                borderColor={getProps("unstop").border}

                strokeWidth={2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crack_the_box;
