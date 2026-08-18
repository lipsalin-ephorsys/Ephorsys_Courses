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
  title: "Data Analyst Boot Camp",

  description: (
    <>
      Master Excel, SQL, Python, Power BI, and Tableau through a practical,
      project-based learning experience. This course takes you from the
      fundamentals of data analysis to solving real-world business problems
      using data.
      <br /> <br />
      You'll learn how to clean, transform, query, and analyze datasets using
      Excel, SQL, and Python. Along the way, you'll develop skills in
      exploratory data analysis, statistics, data visualization, dashboard
      creation, and business intelligence.
      <br /> <br />
      Through hands-on projects, you'll learn how to turn raw data into
      meaningful insights, identify business trends, create interactive
      dashboards, and present data-driven recommendations. You'll also gain
      practical experience working with real-world datasets and building
      professional analytics projects for your portfolio.
    </>
  ),


  details: [
    {
      title: "Excel & Spreadsheet Analytics",
      description:
        "Advanced Excel, formulas, pivot tables, data cleaning, and analytical reporting",
    },
    {
      title: "SQL & Databases",
      description:
        "SQL queries, joins, filtering, aggregations, subqueries, and database analysis",
    },
    {
      title: "Python for Data Analysis",
      description:
        "Python, Pandas, NumPy, data manipulation, and automated data analysis",
    },
    {
      title: "Data Cleaning",
      description:
        "Handle missing data, duplicates, inconsistencies, and prepare datasets for analysis",
    },
    {
      title: "Data Visualization",
      description:
        "Create meaningful charts, reports, and visualizations to communicate insights",
    },
    {
      title: "Power BI & Tableau",
      description:
        "Build interactive dashboards, reports, KPIs, and business intelligence solutions",
    },
    {
      title: "Business Analytics",
      description:
        "Identify trends, analyze business performance, and support data-driven decisions",
    },
    {
      title: "Real-World Projects",
      description:
        "Work with practical business datasets and build professional analytics projects",
    },
  ],
};

const DataAnalystOutcomes = [
  "Analyze business data using Excel, SQL, and Python.",
  "Clean, transform, and prepare datasets for accurate analysis.",
  "Write SQL queries to extract and analyze data from relational databases.",
  "Use Excel for advanced data analysis, formulas, pivot tables, and reporting.",
  "Perform exploratory data analysis to identify trends and business insights.",
  "Create interactive dashboards and reports using Power BI and Tableau.",
  "Apply statistical techniques to support data-driven decision making.",
  "Translate complex datasets into clear and actionable business insights.",
  "Work with real-world datasets and solve practical business problems.",
  "Build professional data analytics projects for your portfolio.",
  "Use Git and GitHub for version control and project management.",
  "Gain the skills and confidence needed for entry-level data analyst roles."
];

const DataAnalyst = () => {
  return (
    <>
      <Navbar />

      <CoursesHeroSection
        title="Become a Data Analyst - Job-Ready Data Analytics Boot Camp"
        paragraph="Comprehensive, mentor-led data analytics training. Hands-on with
          Excel, SQL, Python, Power BI, and Tableau. Analyze real-world
          datasets, create interactive dashboards, and turn data into
          actionable business insights with 100% placement assistance.
          Start your analytics career today."
        image={images.dataanalyst} />

      <CourseOverview
        description={course.description}
        details={course.details} />

      <CourseOutcome outcomes={DataAnalystOutcomes} />

      <section className="py-15">
        <h1 className="text-center text-3xl font-bold mb-10">
          Key Features
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                        gap-8 place-items-center">

          <KeyFeatures
            icon={FaTerminal}
            title="Data Analytics Mastery"
            subtitle="Master Excel, SQL, Python, Power BI, and Tableau to analyze data and solve real-world business problems."
            image={images.fullstack}
          />

          <KeyFeatures
            icon={FaLaptopCode}
            title="Hands-on Analytics Projects"
            subtitle="Work with real-world datasets and build dashboards, reports, and practical business analytics projects."
            image={images.projects}
          />

          <KeyFeatures
            icon={FaUserGraduate}
            title="Expert Mentorship"
            subtitle="Learn from experienced data analysts and get guidance throughout your analytics learning journey."
            image={images.mentorship}
          />

          <KeyFeatures
            icon={FaUserGear}
            title="Industry Skills"
            subtitle="Learn the tools and technologies used by modern data and business intelligence teams."
            image={images.industry}
          />

          <KeyFeatures
            icon={BsGraphUpArrow}
            title="Career Ready"
            subtitle="Develop practical analytics skills and build a professional portfolio that prepares you for industry roles."
            image={images.career}
          />

          <KeyFeatures
            icon={FaHandshake}
            title="Placement Support"
            subtitle="Get career guidance, interview preparation, and placement support to help you start your data analytics career."
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
            title="Data Analyst"
            subTitle="Analyze business data, identify trends, and create actionable insights that support better business decisions."
            icon={FaLaptopCode} />

          <Career
            title="Business Intelligence Analyst"
            subTitle="Build interactive dashboards, reports, and KPIs using Power BI, Tableau, and other analytics tools."
            icon={FaPaintBrush} />

          <Career
            title="SQL Data Analyst"
            subTitle="Use SQL and databases to extract, transform, analyze, and report valuable business information."
            icon={FaServer} />

          <Career
            title="Data Analytics Instructor"
            subTitle="Transition into technical training, curriculum development, or mentorship for aspiring data analytics professionals."
            icon={FaChalkboardTeacher} />

          <Career
            title="Freelance Data Analyst"
            subTitle="Help businesses analyze data, create dashboards, prepare reports, and deliver actionable insights for clients."
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

export default DataAnalyst;