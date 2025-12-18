import "./navbar.css";
import { Audiowide } from "next/font/google";
import Atlas_links from "./atlas_links";
import Atlas_socials from "./atlas_socials";

const audiowide = Audiowide({
  weight: ["400"],
  subsets: ["latin"],
});

function Atlas() {
  return (
    <div className="flex flex-col items-center text-center mx-2 sm:mx-10 my-5 border border-cyan-300/50 rounded-lg backdrop-blur-2xl shadow-[0_0_15px_rgba(34,211,238,0.5),0_0_30px_rgba(34,211,238,0.3)] bg-black/20 overflow-hidden">
      
      {/* Logo Header */}
      <div
        className={`text-black text-2xl sm:text-3xl px-10 sm:px-16 w-fit bg-white logo ${audiowide.className} font-black tracking-widest`}
      >
        ATLAS
      </div>

      {/* Main Content: Links + Socials */}
      {/* Changes: Stack on mobile (flex-col), side-by-side on large screens (lg:flex-row) */}
      <div className="flex flex-col lg:flex-row gap-6 w-full p-4 sm:p-6 min-h-[500px]">
        
        {/* Left Box (Atlas Links) */}
        {/* Adjusted width for better balance on desktop, full width on mobile */}
        <div className="w-full lg:w-[45%] flex items-center justify-center border border-white/10 rounded-lg p-4 sm:p-10">
          <Atlas_links />
        </div>

        {/* Right Box (Atlas Socials) */}
        {/* flex-1 allows this to fill remaining space on desktop */}
        <div className="flex-1 w-full flex items-center justify-center border border-white/10 rounded-lg overflow-x-auto overflow-y-hidden">
          {/* We use a wrapper to handle the grid-based social layout if it overflows */}
          <div className="min-w-[320px] w-full h-full">
            <Atlas_socials />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Atlas;
