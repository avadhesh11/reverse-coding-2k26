import Atlas from "./atlas"

function Footer() {
  return (
    <div className={`flex flex-col gap-5 bg-black`}>
      <Atlas />
      <div className="bg-white/10 flex flex-row justify-around items-center text-3xl font-black text-white/60 py-10 ">
        <div className="hover:text-green-500 transition-all ease-in-out duration-500 cursor-pointer">&lt;/&gt; Sponsor</div>
        <div className="hover:text-cyan-300 transition-all ease-in-out duration-500 cursor-pointer">&lt;/&gt; IIITV Coding CLUB</div>
        <div className="hover:text-purple-600 transition-all ease-in-out duration-500 cursor-pointer">&divide; ENIGMA</div>
      </div>
      <div className="flex flex-col">
        <div className="text-md text-white/30 font-bold mx-24 my-0 p-0">&copy; All Systems Operational</div>
        <div className='text-8xl font-black text-white/30 text-center m-0 p-0'>CCxENIGMA / TESSERACT</div>
      </div>
    </div>
  )
}

export default Footer