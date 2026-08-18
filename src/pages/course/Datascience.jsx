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
    title: "Data Science Boot Camp",

    description: (
        <>
            Master Python, statistics, data analysis, visualization, and machine
            learning through a practical, project-based learning experience. This
            course takes you from the fundamentals of data science to building
            complete, real-world data science solutions.
            <br /> <br />
            You'll learn how to work with Python, NumPy, Pandas, SQL, and
            visualization libraries to collect, clean, analyze, and interpret data.
            Along the way, you'll explore statistics, exploratory data analysis,
            feature engineering, machine learning, and model evaluation.
            <br /> <br />
            Through hands-on projects, you'll learn how to work with real-world
            datasets, identify meaningful patterns, build predictive models, create
            compelling visualizations, and communicate data-driven insights. You'll
            also gain practical experience developing end-to-end data science
            projects for your professional portfolio.
        </>
    ),

    details: [
        {
            title: "Python for Data Science",
            description:
                "Python fundamentals, NumPy, Pandas, data manipulation, and analysis",
        },
        {
            title: "Statistics & Mathematics",
            description:
                "Descriptive statistics, probability, distributions, hypothesis testing, and correlation",
        },
        {
            title: "Data Cleaning & Preparation",
            description:
                "Data preprocessing, handling missing values, feature engineering, and data transformation",
        },
        {
            title: "Exploratory Data Analysis",
            description:
                "Analyze datasets, identify patterns, discover trends, and generate meaningful insights",
        },
        {
            title: "Data Visualization",
            description:
                "Matplotlib, Seaborn, charts, dashboards, and effective data storytelling",
        },
        {
            title: "Machine Learning",
            description:
                "Supervised and unsupervised learning, model training, evaluation, and optimization",
        },
        {
            title: "SQL & Databases",
            description:
                "SQL queries, data extraction, joins, aggregations, and database analysis",
        },
        {
            title: "Real-World Projects",
            description:
                "Build practical end-to-end data science projects using real-world datasets",
        },
    ],
};

const DataScienceOutcomes = [
    "Analyze and interpret complex datasets using Python and statistical techniques.",
    "Clean, preprocess, and transform raw data for analysis and modeling.",
    "Work with NumPy, Pandas, Matplotlib, and Seaborn for data analysis and visualization.",
    "Apply statistical concepts to identify patterns, trends, and meaningful insights.",
    "Build and evaluate machine learning models using real-world datasets.",
    "Perform exploratory data analysis (EDA) to understand business and data problems.",
    "Use SQL to extract, filter, and analyze data from databases.",
    "Create data-driven visualizations and dashboards to communicate insights effectively.",
    "Develop end-to-end data science projects from data collection to model deployment.",
    "Use Git and GitHub for version control and collaborative development.",
    "Build practical projects for a professional data science portfolio.",
    "Gain the skills and confidence needed for entry-level data science roles."
];


const Datascience = () => {
    return (
        <>
            <Navbar />

            <CoursesHeroSection
                title="Master Data Science - Industry-Ready Data Science Boot Camp"
                paragraph="Comprehensive, mentor-led data science training. Hands-on with
          Python, statistics, Pandas, NumPy, data visualization, and machine
          learning. Work with real-world datasets and build end-to-end data
          science projects with 100% placement assistance.
          Start your data-driven career today."
          image={images.datascience}/>

            <CourseOverview
                description={course.description}
                details={course.details} />

            <CourseOutcome outcomes={DataScienceOutcomes} />

            <section className="py-15">
                <h1 className="text-center text-3xl font-bold mb-10">
                    Key Features
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                        gap-8 place-items-center">

                    <KeyFeatures 
  icon={FaTerminal} 
  title="Data Science Mastery" 
  subtitle="Master Python, statistics, data analysis, visualization, and machine learning to solve real-world data problems." 
  image={images.fullstack} 
/> 
 
<KeyFeatures 
  icon={FaLaptopCode} 
  title="Hands-on Data Projects" 
  subtitle="Work with real-world datasets and build practical data science projects from analysis to machine learning." 
  image={images.projects} 
/> 
 
<KeyFeatures 
  icon={FaUserGraduate} 
  title="Expert Mentorship" 
  subtitle="Learn from experienced data professionals and get guidance throughout your data science journey." 
  image={images.mentorship} 
/> 
 
<KeyFeatures 
  icon={FaUserGear} 
  title="Industry Skills" 
  subtitle="Learn Python, SQL, Pandas, visualization tools, and machine learning technologies used in the industry." 
  image={images.industry} 
/> 
 
<KeyFeatures 
  icon={BsGraphUpArrow} 
  title="Career Ready" 
  subtitle="Develop practical data science skills and build a professional portfolio for career opportunities." 
  image={images.career} 
/> 
 
<KeyFeatures 
  icon={FaHandshake} 
  title="Placement Support" 
  subtitle="Get career guidance, interview preparation, and placement support to help you start your data science career." 
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
      title="Data Scientist" 
      subTitle="Analyze complex datasets, build predictive models, and generate insights that support data-driven business decisions." 
      icon={FaLaptopCode} /> 
 
    <Career 
      title="Machine Learning Engineer" 
      subTitle="Develop and deploy machine learning models that solve practical business and industry problems." 
      icon={FaPaintBrush} /> 
 
    <Career 
      title="Data Science Analyst" 
      subTitle="Explore datasets, identify trends, perform statistical analysis, and communicate meaningful data-driven insights." 
      icon={FaServer} /> 
 
    <Career 
      title="Data Science Instructor" 
      subTitle="Transition into technical training, curriculum development, or mentorship for aspiring data science professionals." 
      icon={FaChalkboardTeacher} /> 
 
    <Career 
      title="Freelance Data Scientist" 
      subTitle="Work with clients to analyze data, build predictive solutions, create reports, and deliver data-driven insights." 
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

export default Datascience;