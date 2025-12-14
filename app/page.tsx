import Image from 'next/image';

export default function Home() {
    return (
        <div className="relative text-white min-h-screen">
            <Image
                src="/tesseract-bg.jpg"
                alt="Background"
                fill
                priority
                className="object-cover object-center -z-10 opacity-50"
            />
        </div>
    )
}