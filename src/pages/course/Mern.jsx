import { motion } from "motion/react";

import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

import heroVideo from "../../assets/hero.mp4";
import heroimage from "../../assets/HeroImage.png"
import backend from "../../assets/backend.jpg"
import frontend from "../../assets/frontend.jpg"
import fullstack from "../../assets/fullstack.png"
import mentorship from "../../assets/mentorship.jpg"
import projects from "../../assets/projects.jpg"
import career from "../../assets/career.jpg"
import placement from "../../assets/placement.jpg"
import industry from "../../assets/industry.jpg"

import { FaArrowRight, FaUserGraduate, FaUserGear } from "react-icons/fa6";
import { FaTerminal, 
         FaLaptopCode,
         FaHandshake, 
         FaPaintBrush, 
         FaServer,
         FaChalkboardTeacher } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";



import KeyFeatures from "./KeyFeatures";
import Career from "./Career";
import ImageSlider from "./ImageSlider";
import CourseOverview from "./CourseOverview";
import CourseOutcome from "./CourseOutcome";

const Mern = () => {
  return (
    <>
      <Navbar />
      <section className="relative mt-14 min-h-125 overflow-hidden">

        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className=" absolute inset-0 z-0  h-full w-full
                      object-cover  scale-110  blur-lg"/>

        <div className="absolute inset-0 z-1 bg-[#000000]/30" />

        <div className="relative z-10 flex min-h-125 w-full px-13 py-10">

          <div className="flex w-1/2 flex-col justify-center gap-2">

            <h1 className="text-3xl font-bold text-white">
              Learn Full-Stack Web Development – Next-Gen MERN Stack Boot Camp
            </h1>

            <p className="mt-4 text-lg text-white">
              Comprehensive, mentor-led web development training. Hands-on
              with MongoDB, Express, React, and Node.js. Build live
              cloud-deployed web applications with 100% placement assistance.
              Start coding your future today.
            </p>

            <button className=" mt-4 flex w-50 items-center justify-center 
                                gap-2 rounded-2xl border border-[#70C900]
                              bg-[#70C900] px-2 py-3 font-bold transition-all
                                duration-300 hover:bg-transparent hover:text-[#70C900]">
              Start Learning Now
              <FaArrowRight />
            </button>

          </div>

          <div className="flex w-1/2 items-center justify-center">
            <motion.img
              src={heroimage}
              alt="MERN Stack"
              className="w-100 object-contain"
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
      </section>

      <CourseOverview/>
      <CourseOutcome/>

      <section className="py-15">
        <h1 className="text-center text-3xl font-bold mb-10">
          Key Features
        </h1>

        <div className="grid grid-cols-3 gap-8 place-items-center">

          <KeyFeatures
            icon={FaTerminal}
            title="Full Stack Mastery"
            subtitle="Master MongoDB, Express, React, and Node.js to build modern web solutions."
            image={fullstack}
          />

          <KeyFeatures
            icon={FaLaptopCode}
            title="Hands-on Projects"
            subtitle="Build real-world applications and gain practical development experience."
            image={projects}
          />

          <KeyFeatures
            icon={FaUserGraduate}
            title="Expert Mentorship"
            subtitle="Learn from experienced developers and get guidance throughout your journey."
            image={mentorship}
          />

          <KeyFeatures
            icon={FaUserGear}
            title="Industry Skills"
            subtitle="Learn the tools and technologies used by modern development teams."
            image={industry}
          />

          <KeyFeatures
            icon={BsGraphUpArrow}
            title="Career Ready"
            subtitle="Develop practical skills that prepare you for professional opportunities."
            image={career}
          />

          <KeyFeatures
            icon={FaHandshake}
            title="Placement Support"
            subtitle="Get guidance and support to help you take the next step in your career."
            image={placement}
          />
        </div>
      </section>

      <section className="py-15">
        <h1 className="text-center text-3xl font-bold mb-10">
          What Can You Become After This?
        </h1>

        <div className="grid grid-cols-3 gap-8 place-items-center">
          <Career
            title="Full-Stack Developer"
            subTitle="Work on entire web applications, managing everything from frontend React interfaces to backend Node.js APIs and MongoDB databases"
            icon={FaLaptopCode} />

          <Career
            title="Frontend Engineer"
            subTitle="Work on entire frontend part building responsive and interacting user interfaces and user experiences."
            icon={FaPaintBrush} />

          <Career
            title="Backend Developer"
            subTitle="Work on entire backend part building and managing server,database etc"
            icon={FaServer} />

          <Career
            title="MERN Stack Instructor"
            subTitle="You can transition into technical training, curriculum design,
                 or corporate boot camp mentorship for up-and-coming developers."
            icon={FaChalkboardTeacher} />

          <Career
            title="Freelance Web App Developer"
            subTitle="You can build custom MVPs , manage end-to-end client applications,
                or work globally on remote freelance contracts."
            icon={FaHandshake} />

        </div>

      </section>
       
       <h1 className="text-center font-bold text-3xl">Practical Working Experience</h1>
      <ImageSlider/>

      <Footer />
    </>
  );
};

export default Mern;