"use client";
import React from "react";
import Button from "./neon-button";

const ArrowRight = ({ shaft = "bg-cyan-400", head = "border-l-cyan-400" }) => (
  <div className="w-full flex items-center">
    <div className={`relative w-full h-0.5 ${shaft}`}>
      <span
        className="
          absolute right-0 top-1/2 -translate-y-1/2
          border-l-[12px]
          border-y-[6px] border-y-transparent
        "
        style={{ borderLeftColor: "currentColor" }}
      />
    </div>
  </div>
);
const ArrowLeft = ({ shaft = "bg-red-500", head = "border-r-red-500" }) => (
  <div className="w-full flex items-center">
    <div className={`relative w-full h-[2px] ${shaft}`}>
      <span
        className="
          absolute left-0 top-1/2 -translate-y-1/2
          border-r-[12px]
          border-y-[6px] border-y-transparent
        "
        style={{ borderRightColor: "currentColor" }}
      />
    </div>
  </div>
);
const ArrowDown = ({ shaft = "bg-cyan-400", head = "border-t-cyan-400" }) => (
  <div className="h-full flex justify-center">
    <div className={`relative h-full w-[2px] ${shaft}`}>
      <span
        className="
          absolute bottom-0 left-1/2 -translate-x-1/2
          border-t-[12px]
          border-x-[6px] border-x-transparent
        "
        style={{ borderTopColor: "currentColor" }}
      />
    </div>
  </div>
);
const ArrowUp = ({ shaft = "bg-red-500", head = "border-b-red-500" }) => (
  <div className="h-full flex justify-center">
    <div className={`relative h-full w-[2px] ${shaft}`}>
      <span
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          border-b-[12px]
          border-x-[6px] border-x-transparent
        "
        style={{ borderBottomColor: "currentColor" }}
      />
    </div>
  </div>
);

const ArrowDiagonal = ({
  direction = "down-right",
  color = "bg-green-400",
}) => {
  const rotation =
    direction === "down-right"
      ? "rotate-45"
      : direction === "down-left"
      ? "-rotate-45"
      : "";

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
      <div
        className={`relative w-[120px] h-[2px] ${color} ${rotation}`}
      >
        <span
          className="
            absolute right-0 top-1/2 -translate-y-1/2
            border-l-[10px]
            border-y-[5px] border-y-transparent
          "
          style={{ borderLeftColor: "currentColor" }}
        />
      </div>
    </div>
  );
};


const GlowWrapper = ({ glowColor, children }) => {
  return (
    <div
      className="
        transition-all duration-500 ease-out
        hover:scale-[1.03]
      "
      style={{
        // default: no glow
        filter: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.filter = `
          drop-shadow(0 0 12px ${glowColor})
          drop-shadow(0 0 22px ${glowColor})
          drop-shadow(0 0 36px ${glowColor})
        `;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = "none";
      }}
    >
      {children}
    </div>
  );
};

const GLOW = {
  default: "rgba(0,255,255,0.9)", // cyan
  fail: "rgba(255,0,0,0.9)", // red
  success: "rgba(90,216,0,0.9)", // green
  god: "rgba(255,115,0,0.9)", // orange
};

const Flowchart = () => {
  return (
    <div className="w-full flex flex-col items-center text-white">
      <h1 className="text-4xl mb-10 text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
        The Answer Is The Starting Point
      </h1>

      <div className="w-full max-w-[1100px] mx-auto">
        <div
          className="
            grid
            grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto]
            grid-rows-5
            gap-y-4
            items-center
          "
        >
          <GlowWrapper glowColor={GLOW.default}>
            <Button text="QUERY" fillColor="#003035" width={220} height={72} />
          </GlowWrapper>
          <ArrowRight />
          <GlowWrapper glowColor={GLOW.default}>
            <Button
              text="OBSERVE"
              fillColor="#003035"
              width={220}
              height={72}
            />
          </GlowWrapper>
          <ArrowRight />
          <GlowWrapper glowColor={GLOW.default}>
            <Button
              text="DECRYPT"
              fillColor="#003035"
              width={220}
              height={72}
            />
          </GlowWrapper>
          <ArrowRight />
          <GlowWrapper glowColor={GLOW.default}>
            <Button text="CODE" fillColor="#003035" width={180} height={72} />
          </GlowWrapper>
<div />
<div />
<ArrowUp shaft="bg-blue-300" />
<div />
<ArrowDown shaft="bg-cyan-400" />
<div />
<div />
          {/* Row 3 */}
          <div />
          <div />
          <GlowWrapper glowColor={GLOW.fail}>
            <Button
              text="Fail"
              fillColor="rgb(33,0,0)"
              borderColor="#ff0000"
              width={220}
              height={72}
            />
          </GlowWrapper>
          <ArrowLeft />
          <GlowWrapper glowColor={GLOW.default}>
            <Button text="EXE" fillColor="#003035" width={220} height={72} />
          </GlowWrapper>
          <ArrowRight />
          <GlowWrapper glowColor={GLOW.success}>
            <Button
              text="SUCCESS"
              fillColor="rgb(0,33,33)"
              borderColor="#5ad800"
              width={220}
              height={72}
            />
          </GlowWrapper>

          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <ArrowDown shaft="bg-green-400" />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <GlowWrapper glowColor={GLOW.god}>
            <Button
              text="God_Mode"
              fillColor="rgb(33,16,0)"
              borderColor="rgb(255,115,0)"
              width={220}
              height={72}
            />
          </GlowWrapper>
        </div>
      </div>
    </div>
  );
};

export default Flowchart;
