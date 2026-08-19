import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

import { FaUserGraduate, FaUserGear } from "react-icons/fa6";
import {
  FaTerminal,
  FaLaptopCode,
  FaHandshake,
  FaPaintBrush,
  FaServer,
  FaChalkboardTeacher
} from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";


import KeyFeatures from "./KeyFeatures";
import Career from "./Career";
import ImageSlider from "./ImageSlider";
import CourseOverview from "./CourseOverview";
import CourseOutcome from "./CourseOutcome";
import WhyEphorsys from "./WhyEphorsys";
import CoursesHeroSection from "./CoursesHeroSection";
import { images } from "../../assets/Assets";
import ContactSection from "../../components/ContactSection";

const course = {
    title: "MERN Stack Boot Camp",

    description: (
        <>
          Master MongoDB, Express.js, React, and Node.js through a practical, project-based learning experience. This course takes you from the fundamentals of web development to building and deploying complete full-stack applications. 
          <br /> <br /> 
          You'll learn how to create responsive and interactive frontend interfaces with React, build scalable backend APIs using Node.js and Express, and manage application data using MongoDB. Along the way, you'll work with authentication, REST APIs, database integration, Git/GitHub, and cloud deployment.
          <br /> <br />
          Through hands-on projects, you'll learn how to connect frontend and backend systems, handle real-world application requirements, structure your code efficiently, and troubleshoot common development challenges. You'll also gain experience building applications from scratch and deploying them to the cloud.
        </>
    ),

    details: [
        {
            title: "Frontend Development",
            description:
                "HTML, CSS, JavaScript, React, React Hooks, and responsive UI",
        },
        {
            title: "Backend Development",
            description:
                "Node.js, Express.js, RESTful APIs, and server-side development",
        },
        {
            title: "Database",
            description:
                "MongoDB, Mongoose, CRUD operations, and database design",
        },
        {
            title: "Authentication",
            description:
                "Login, registration, JWT authentication, authorization, and protected routes",
        },
        {
            title: "Full-Stack Integration",
            description:
                "Connect React applications with backend APIs and databases",
        },
        {
            title: "Development Tools",
            description:
                "Git, GitHub, npm, VS Code, and modern development workflows",
        },
        {
            title: "Deployment",
            description:
                "Deploy full-stack applications to cloud platforms",
        },
        {
            title: "Real-World Projects",
            description:
                "Build practical applications that demonstrate your full-stack skills",
        },
        
    ],
};

const Mernoutcomes = [
    "Build responsive and interactive web applications using React.",
    "Develop scalable REST APIs using Node.js and Express.js.",
    "Design and manage databases using MongoDB and Mongoose.",
    "Implement user authentication and authorization using JWT.",
    "Connect frontend applications with backend APIs and databases.",
    "Build complete full-stack applications from scratch.",
    "Use Git and GitHub for version control and collaborative development.",
    "Deploy full-stack applications to cloud platforms.",
    "Debug applications and solve common real-world development problems.",
    "Build practical projects for a professional portfolio.",
    "Gain the skills and confidence needed for entry-level full-stack development roles"
];

const Mern = () => {
  return (
    <>
      <Navbar />

      <CoursesHeroSection
        title="Learn Full-Stack Web Development - Next-Gen MERN Stack Boot Camp"
        paragraph="Comprehensive, mentor-led web development training. Hands-on
              with MongoDB, Express, React, and Node.js. Build live
              cloud-deployed web applications with 100% placement assistance.
              Start coding your future today."
        image={images.heroImage}/>

      <CourseOverview
        description={course.description}
        details={course.details} />

      <CourseOutcome outcomes={Mernoutcomes} />

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
      <ImageSlider />
      <WhyEphorsys />
      <ContactSection/>
      <Footer />
    </>
  );
};

export default Mern;