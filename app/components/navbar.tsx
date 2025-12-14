import Link from 'next/link';
import './navbar.css';
import { Audiowide } from 'next/font/google';


const audiowide = Audiowide({
    weight: '400',
    subsets: ['latin'],
})

function Navbar() {
    return (
        <nav className="w-full h-fit bg-black border-b border-white/50">
            <div className="w-full h-fit flex flex-row justify-around items-center">

                <Link
                    href="/"
                    className="text-white text-lg opacity-70 hover:opacity-100 hover:underline transition-all duration-150 ease-int-out"
                >
                    HOME
                </Link>

                <Link
                    href="/about"
                    className="text-white text-lg opacity-70 hover:opacity-100 hover:underline transition-all duration-150 ease-int-out"
                >
                    ABOUT
                </Link>
                <Link
                    href="/team"
                    className="text-white text-lg opacity-70 hover:opacity-100 hover:underline transition-all duration-150 ease-int-out"
                >
                    TEAM
                </Link>

                <Link
                    href="/"
                    className={`text-black text-5xl mx-4 px-16 bg-white logo ${audiowide.className} font-black tracking-widest hover:text-cyan-400 hover:scale-102 transition-all duration-500 ease-int-out"}`}
                >
                    TESSERACT
                </Link>

                <Link
                    href="/sponsors"
                    className="text-white text-lg opacity-70 hover:opacity-100 hover:underline transition-all duration-150 ease-int-out"
                >
                    SPONSORS
                </Link>
                <Link
                    href="/team"
                    className="text-white text-lg opacity-70 hover:opacity-100 hover:underline transition-all duration-150 ease-int-out"
                >
                    RULES
                </Link>
                <Link
                    href="/login"
                    className="text-white text-lg opacity-70 hover:opacity-100 hover:underline transition-all duration-150 ease-int-out"
                >
                    SIGN IN
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;