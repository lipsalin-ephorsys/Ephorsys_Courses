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

const course = {
    title: "AI & Machine Learning  Boot Camp",

    description: (
        <>
            Master Python, machine learning, deep learning, NLP, computer vision,
            and Generative AI through a practical, project-based learning
            experience. This course takes you from the fundamentals of AI and
            machine learning to building intelligent, real-world applications.
            <br /> <br />
            You'll learn how to prepare and analyze data, build machine learning
            models, and evaluate their performance using Python and industry-standard
            tools. Along the way, you'll explore supervised and unsupervised learning,
            neural networks, deep learning, NLP, computer vision, and modern
            Generative AI technologies.
            <br /> <br />
            Through hands-on projects, you'll learn how to develop intelligent
            solutions for real-world use cases, train and optimize AI models, work
            with modern AI frameworks, and deploy machine learning applications.
            You'll also gain practical experience building portfolio-ready AI/ML
            projects from scratch.
        </>
    ),

    details: [
        {
            title: "Python for AI & ML",
            description:
                "Python programming, NumPy, Pandas, data processing, and AI development fundamentals",
        },
        {
            title: "Machine Learning",
            description:
                "Supervised learning, unsupervised learning, regression, classification, and clustering",
        },
        {
            title: "Data Preprocessing",
            description:
                "Data cleaning, feature engineering, feature selection, and dataset preparation",
        },
        {
            title: "Model Training & Evaluation",
            description:
                "Train, test, evaluate, optimize, and deploy machine learning models",
        },
        {
            title: "Deep Learning",
            description:
                "Neural networks, deep learning fundamentals, and modern AI frameworks",
        },
        {
            title: "NLP & Generative AI",
            description:
                "Natural Language Processing, LLMs, prompt engineering, and Generative AI applications",
        },
        {
            title: "Computer Vision",
            description:
                "Image processing, image classification, object detection, and AI-powered vision applications",
        },
        {
            title: "Real-World AI Projects",
            description:
                "Build and deploy practical AI/ML applications using real-world datasets and use cases",
        },
    ],
};

const AIMLOutcomes = [
    "Build machine learning models using Python and industry-standard libraries.",
    "Understand and apply supervised and unsupervised learning techniques.",
    "Prepare, clean, and preprocess datasets for machine learning applications.",
    "Train, evaluate, and optimize machine learning models using real-world data.",
    "Work with NumPy, Pandas, Scikit-learn, and other essential AI/ML tools.",
    "Build deep learning models using neural networks and modern frameworks.",
    "Develop applications using Natural Language Processing (NLP) techniques.",
    "Explore computer vision and build AI-powered image processing solutions.",
    "Work with Generative AI and modern Large Language Model (LLM) applications.",
    "Deploy machine learning and AI models into real-world applications.",
    "Build practical AI/ML projects for a professional portfolio.",
    "Gain the skills and confidence needed for entry-level AI and machine learning roles."
];
const AIML = () => {
    return (
        <>
            <Navbar />

            <CoursesHeroSection
                title="Master AI & Machine Learning - Next-Gen AI/ML Boot Camp"
                paragraph="Comprehensive, mentor-led AI and machine learning training.
          Hands-on with Python, machine learning, deep learning, NLP,
          computer vision, and Generative AI. Build intelligent, real-world
          applications and deploy AI solutions with 100% placement
          assistance. Start building the future with AI today."
                image={images.AIML}/>

            <CourseOverview
                description={course.description}
                details={course.details} />

            <CourseOutcome outcomes={AIMLOutcomes} />

            <section className="py-15">
                <h1 className="text-center text-3xl font-bold mb-10">
                    Key Features
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                        gap-8 place-items-center">

                    <KeyFeatures 
  icon={FaTerminal} 
  title="AI & ML Mastery" 
  subtitle="Master Python, machine learning, deep learning, NLP, computer vision, and Generative AI." 
  image={images.fullstack} 
/> 
 
<KeyFeatures 
  icon={FaLaptopCode} 
  title="Hands-on AI Projects" 
  subtitle="Build real-world AI and machine learning applications and gain practical experience." 
  image={images.projects} 
/> 
 
<KeyFeatures 
  icon={FaUserGraduate} 
  title="Expert Mentorship" 
  subtitle="Learn from experienced AI/ML professionals and get guidance throughout your learning journey." 
  image={images.mentorship} 
/> 
 
<KeyFeatures 
  icon={FaUserGear} 
  title="Industry Skills" 
  subtitle="Learn modern AI tools, frameworks, and technologies used by industry professionals." 
  image={images.industry} 
/> 
 
<KeyFeatures 
  icon={BsGraphUpArrow} 
  title="Career Ready" 
  subtitle="Develop practical AI/ML skills and build a portfolio that prepares you for professional opportunities." 
  image={images.career} 
/> 
 
<KeyFeatures 
  icon={FaHandshake} 
  title="Placement Support" 
  subtitle="Get career guidance, interview preparation, and placement support to help you enter the AI industry." 
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
      title="Machine Learning Engineer" 
      subTitle="Build, train, evaluate, and deploy machine learning models to solve real-world problems." 
      icon={FaLaptopCode} /> 
 
    <Career 
      title="AI Engineer" 
      subTitle="Develop intelligent applications using machine learning, deep learning, Generative AI, and modern AI technologies." 
      icon={FaPaintBrush} /> 
 
    <Career 
      title="Data Scientist" 
      subTitle="Analyze data, build predictive models, and generate actionable insights using statistics and machine learning." 
      icon={FaServer} /> 
 
    <Career 
      title="AI/ML Instructor" 
      subTitle="Transition into technical training, curriculum development, or AI/ML mentorship for aspiring professionals." 
      icon={FaChalkboardTeacher} /> 
 
    <Career 
      title="Freelance AI Developer" 
      subTitle="Build custom AI solutions, intelligent applications, automation tools, and machine learning projects for clients." 
      icon={FaHandshake} /> 
  </div> 
</section>

            <h1 className="text-center font-bold text-3xl">Practical Working Experience</h1>
            <ImageSlider />
            <WhyEphorsys />
            <Footer />
        </>
    );
};

export default AIML;