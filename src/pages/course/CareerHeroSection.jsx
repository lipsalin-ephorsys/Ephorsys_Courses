import { motion } from "motion/react";

import heroVideo from "../../assets/hero.mp4";

import { FaArrowRight } from "react-icons/fa6";
import { images } from "../../assets/Assets";

const CareerHeroSection = () => {
  return (
    <>
      <div className="relative mt-14 min-h-150 overflow-hidden
                          sm:min-h-150 lg:min-h-150">

        <video src={heroVideo} autoPlay muted loop playsInline preload="auto"
            className=" absolute inset-0 z-0 h-full w-full object-cover blur-lg"/>
            
        <div className="absolute inset-0 z-1 bg-[#000000]/30" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl
                        flex-col items-center px-6 py-10
                        sm:px-8 sm:py-12 md:px-10 lg:flex-row
                        lg:px-12 lg:py-16 xl:px-16 ">

          
          <div className="flex w-full flex-col items-center justify-center
              text-center lg:w-1/2 lg:items-start lg:text-left ">

            <h1
              className="text-3xl font-bold text-white
                         sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl ">   
              Learn Full-Stack Web Development - Next-Gen MERN Stack Boot Camp
            </h1>

            <p
              className="mt-4 max-w-2xl text-base leading-7 text-white m:text-lg sm:leading-8 ">
              Comprehensive, mentor-led web development training. Hands-on
              with MongoDB, Express, React, and Node.js. Build live
              cloud-deployed web applications with 100% placement assistance.
              Start coding your future today.
            </p>

            <button className="mt-6  w-full max-w-55 flex items-center justify-center gap-2
                               rounded-2xl border border-[#70C900] bg-[#70C900]               
                               px-4 py-3 font-bold text-black transition-all 
                               duration-300 hover:bg-transparent hover:text-[#70C900]">
              Start Learning Now
              <FaArrowRight />
            </button>
          </div>

          <div
            className="mt-10 flex w-full items-center
                 justify-center lg:mt-0 lg:w-1/2">
            <motion.img
              src={images.heroImage}
              alt="MERN Stack"
              className="w-65 object-contain
                       sm:w-80 md:w-88 lg:w-100 xl:w-115"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 2, 0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default CareerHeroSection;