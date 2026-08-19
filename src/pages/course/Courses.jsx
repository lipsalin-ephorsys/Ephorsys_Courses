import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'

import { images } from '../../assets/Assets'

import CoursesHeroSection from './CoursesHeroSection'
import CourseOffer from '../about/CourseOffer'
import ContactSection from '../../components/ContactSection'
import WhyEphorsys from '../course/WhyEphorsys'
import KeyFeatures from '../course/KeyFeatures'

import { FaUserGraduate, FaUserGear } from "react-icons/fa6";
import {
  FaTerminal,
  FaLaptopCode,
  FaHandshake,
  FaChalkboardTeacher
} from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";

const Courses = () => {
    return (
        <>
            <Navbar />

            <CoursesHeroSection
                title="Learn. Build. Launch Your Tech Career."
                paragraph="Master in-demand technology skills through practical, mentor-led courses. Build real-world projects, strengthen your portfolio, and gain the skills you need to succeed in the modern tech industry."
                image={images.courseHero} />

            <CourseOffer />
            <section className="py-15">
                <h1 className="text-center text-3xl font-bold mb-10">
                    Key Features
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                        gap-8 place-items-center">

                    <KeyFeatures
                        icon={FaTerminal}
                        title="Industry-Focused Learning"
                        subtitle="Learn in-demand skills and technologies through structured, career-focused courses."
                        image={images.fullstack}
                    />

                    <KeyFeatures
                        icon={FaLaptopCode}
                        title="Hands-on Learning"
                        subtitle="Apply what you learn through practical projects, exercises, and real-world applications."
                        image={images.projects}
                    />

                    <KeyFeatures
                        icon={FaUserGraduate}
                        title="Expert Guidance"
                        subtitle="Learn from experienced instructors and get the guidance you need throughout your learning journey."
                        image={images.mentorship}
                    />

                    <KeyFeatures
                        icon={FaUserGear}
                        title="Practical Skills"
                        subtitle="Build relevant technical and professional skills that match today's industry requirements."
                        image={images.industry}
                    />

                    <KeyFeatures
                        icon={BsGraphUpArrow}
                        title="Career Growth"
                        subtitle="Gain the knowledge and confidence you need to grow your skills and advance your career."
                        image={images.career}
                    />

                    <KeyFeatures
                        icon={FaHandshake}
                        title="Career Support"
                        subtitle="Get personalized support, career guidance, and resources to help you achieve your professional goals."
                        image={images.placement}
                    />
                </div>
            </section>

            <WhyEphorsys />
            <ContactSection />
            <Footer />
        </>
    )
}

export default Courses