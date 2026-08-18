import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

import { FaUserGraduate, FaUserGear } from "react-icons/fa6";
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
import WhyEphorsys from "./WhyEphorsys";
import CareerHeroSection from "./CareerHeroSection";
import { images } from "../../assets/Assets";

const Mern = () => {
  return (
    <>
      <Navbar />
      <CareerHeroSection/>
      <CourseOverview/>
      <CourseOutcome/>

      <section className="py-15">
        <h1 className="text-center text-3xl font-bold mb-10">
          Key Features
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                        gap-8 place-items-center">

          <KeyFeatures
            icon={FaTerminal}
            title="Full Stack Mastery"
            subtitle="Master MongoDB, Express, React, and Node.js to build modern web solutions."
            image={images.fullstack}
          />

          <KeyFeatures
            icon={FaLaptopCode}
            title="Hands-on Projects"
            subtitle="Build real-world applications and gain practical development experience."
            image={images.projects}
          />

          <KeyFeatures
            icon={FaUserGraduate}
            title="Expert Mentorship"
            subtitle="Learn from experienced developers and get guidance throughout your journey."
            image={images.mentorship}
          />

          <KeyFeatures
            icon={FaUserGear}
            title="Industry Skills"
            subtitle="Learn the tools and technologies used by modern development teams."
            image={images.industry}
          />

          <KeyFeatures
            icon={BsGraphUpArrow}
            title="Career Ready"
            subtitle="Develop practical skills that prepare you for professional opportunities."
            image={images.career}
          />

          <KeyFeatures
            icon={FaHandshake}
            title="Placement Support"
            subtitle="Get guidance and support to help you take the next step in your career."
            image={images.placement}
          />
        </div>
      </section>

      <section className="py-15">
        <h1 className="text-center text-3xl font-bold mb-10">
          What Can You Become After This?
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 
                        lg:grid-cols-3  place-items-center
                        px-4 sm:px-6 lg:px-8">
          <Career
            title="Full-Stack Developer"
            subTitle="Work on entire web applications, managing everything from frontend 
                      React interfaces to backend Node.js APIs and MongoDB databases"
            icon={FaLaptopCode} />

          <Career
            title="Frontend Engineer"
            subTitle="Work on entire frontend part building responsive and interacting user 
                      interfaces and user experiences."
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
        <WhyEphorsys/>
      <Footer />
    </>
  );
};

export default Mern;