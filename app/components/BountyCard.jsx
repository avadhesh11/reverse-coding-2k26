const BountyCard = ({ title, prize, color = "#00fffb", badge }) => {
    return (
        <div className="relative group">
            {/* glow */}
            <div
                className="absolute inset-0 opacity-10 group-hover:opacity-40 transition-opacity duration-300 blur-xl"
                style={{ backgroundColor: color }}
            />
            <div
                className="relative w-[300px] h-[250px] bg-[#050a14] transition-transform duration-300 group-hover:-translate-y-2"
                style={{
                    clipPath:
                        "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
                }}
            >
                {/* border wrapper */}
                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: color, opacity: 0.5 }}
                />

                {/* inner content */}
                <div
                    className="absolute inset-[1px] bg-[#06080c] flex flex-col items-center justify-center"
                    style={{
                        clipPath:
                            "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
                    }}
                >
                    {badge && (
                        <div
                            className="absolute top-0 right-0 px-3 py-1 font-black text-[10px] tracking-widest"
                            style={{ backgroundColor: color, color: "#050a14" }}
                        >
                            {badge}
                        </div>
                    )}

                    <h2
                        className="text-2xl font-bold tracking-widest uppercase mb-8 text-center px-2"
                        style={{
                            color: color,
                            textShadow: `0 0 10px ${color}`,
                        }}
                    >
                        {title}
                    </h2>

                    <div
                        className="mb-8 text-center text-white font-bold"
                        style={{ textShadow: `0 0 10px ${color}80` }}
                    >
                        {prize}
                    </div>

                    <div
                        className="w-32 h-[2px] rounded-full"
                        style={{
                            backgroundColor: color,
                            boxShadow: `0 0 10px ${color}`,
                        }}
                    />
                </div>
            </div>

            {/* corner accents */}
            <svg
                className="absolute top-0 left-0 w-[60px] h-[60px] pointer-events-none overflow-visible z-10 group-hover:-translate-y-2 transition-transform duration-300"
                style={{ filter: `drop-shadow(0 0 5px ${color})` }}
            >
                <path
                    d="M 0 30 V 20 L 20 0 H 50"
                    fill="none"
                    stroke={color}
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>

            <svg
                className="absolute bottom-0 right-0 w-[60px] h-[60px] pointer-events-none overflow-visible z-10 group-hover:-translate-y-2 transition-transform duration-300"
                style={{ filter: `drop-shadow(0 0 5px ${color})` }}
            >
                <path
                    d="M 60 30 V 40 L 40 60 H 10"
                    fill="none"
                    stroke={color}
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
};

export default BountyCard;
