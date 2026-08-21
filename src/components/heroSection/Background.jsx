import { images } from "../../assets/Assets";
import { motion } from "motion/react";

const paragraphs = [
    {
        content: (
            <>
                National Level
                <span className="text-[#70C900]"> Award Winning Skill </span>
                Development Platform
            </>
        ),
        className: "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400",
    },
    {
        content: (
            <>
                Upgrade or kick-start your career in core sector & grow
                exponentially with this 100% industry & curated course
            </>
        ),
        className: "text-sm sm:text-base md:text-xl text-white",
    },
];

const Background = () => {
    return (
        <div className="relative w-full min-h-120 overflow-hidden">

            <img
                src={images.background}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-16 px-6 sm:px-10 md:px-16 lg:px-20 py-16">

                <div className="w-full max-w-150 space-y-4 text-center lg:text-left">
                    {paragraphs.map((paragraph, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{
                                once: true,
                                amount: 0.5,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: index * 1.2,
                                ease: "easeOut",
                            }}
                            className={paragraph.className}
                        >
                            {paragraph.content}
                        </motion.p>
                    ))}
                </div>

                <motion.div
                    className="w-full max-w-115 aspect-video"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 2, 0, 1, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <iframe
                        className="w-full h-full rounded-xl"
                        src="https://www.youtube.com/embed/3n_V2ckQSUA?si=Hh6NwADObVdodM4Y"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </motion.div>

            </div>
        </div>
    );
};

export default Background;