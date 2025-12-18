import React from "react";

const Bounty_board = () => {
  return (
    <div className="mt-20 ml-4 mr-4 md:ml-10 md:mr-10 mb-20 dark:bg-black">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="font-extrabold text-4xl">BOUNTY BOARD</h1>
        <h1 className="font-bold text-4xl text-[rgb(0,255,251)] [text-shadow:_0_0_15px_rgba(0,255,251,0.7)]">
          POOL : ₹10,000
        </h1>
      </div>

      <div className="mt-10 mb-10 flex justify-center">
        <div className="cursor-pointer relative transition-all duration-500 [filter:drop-shadow(0_0_20px_rgba(255,138,0,0.6))] hover:[filter:drop-shadow(0_0_40px_rgba(255,138,0,0.9))]">
          <div
            className="w-72 h-80 bg-[#FF8A00] p-0.5"
            style={{
              clipPath:
                "polygon(12% 0, 100% 0, 100% 92%, 88% 100%, 0 100%, 0 8%)",
            }}
          >
            <div
              className="w-full h-full bg-[#050a14] flex flex-col items-center justify-center relative"
              style={{
                clipPath:
                  "polygon(12% 0, 100% 0, 100% 92%, 88% 100%, 0 100%, 0 8%)",
              }}
            >
              <div className="absolute top-0 right-0 bg-[#FF8A00] text-[#050a14] px-4 py-1 font-black text-[10px] tracking-widest">
                MVP
              </div>

              <div className="mb-6">
                <h2 className="text-[#FF8A00] text-2xl font-bold tracking-[0.4em] uppercase">
                  Champion
                </h2>
              </div>

              <div className="flex items-center gap-2 font-extrabold text-4xl mb-10">
                <span className="text-white">₹</span>
                <span className="text-white">3,300</span>
              </div>

              <div className="w-4/5 h-[4px] bg-[#FF8A00]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 mx-auto max-w-full md:max-w-[50%]">
        <div className="cursor-pointer relative transition-all duration-500 [filter:drop-shadow(0_0_20px_rgba(0,255,255,0.6))] hover:[filter:drop-shadow(0_0_40px_rgba(0,255,255,0.9))]">
          <div
            className="w-72 h-80 bg-[rgb(0,255,251)] p-0.5"
            style={{
              clipPath:
                "polygon(12% 0, 100% 0, 100% 92%, 88% 100%, 0 100%, 0 8%)",
            }}
          >
            <div
              className="w-full h-full bg-[#050a14] flex flex-col items-center justify-center relative"
              style={{
                clipPath:
                  "polygon(12% 0, 100% 0, 100% 92%, 88% 100%, 0 100%, 0 8%)",
              }}
            >
              <h2 className="text-[rgb(0,255,255)] text-2xl font-bold uppercase mb-6">
                RUNNER UP
              </h2>

              <div className="flex items-center gap-2 text-4xl font-extrabold mb-10">
                <span className="text-white">₹</span>
                <span className="text-white">2,700</span>
              </div>

              <div className="w-4/5 h-[4px] bg-[rgb(0,255,251)]"></div>
            </div>
          </div>
        </div>

        <div className="cursor-pointer relative transition-all duration-500 [filter:drop-shadow(0_0_20px_rgba(166,0,255,0.6))] hover:[filter:drop-shadow(0_0_40px_rgba(166,0,255,0.9))]">
          <div
            className="w-72 h-80 bg-[rgb(166,0,255)] p-0.5"
            style={{
              clipPath:
                "polygon(12% 0, 100% 0, 100% 92%, 88% 100%, 0 100%, 0 8%)",
            }}
          >
            <div
              className="w-full h-full bg-[#050a14] flex flex-col items-center justify-center relative"
              style={{
                clipPath:
                  "polygon(12% 0, 100% 0, 100% 92%, 88% 100%, 0 100%, 0 8%)",
              }}
            >
              <h2 className="text-[rgb(166,0,255)] text-3xl font-bold uppercase mb-6">
                SPECIAL OPS
              </h2>

              <div className="text-white text-center text-xl">
                ₹2,700 (IIITV)
                <br />
                ₹1,700 (IIITV FY)
              </div>

              <div className="w-4/5 h-[4px] bg-[rgb(166,0,251)] mt-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bounty_board;
