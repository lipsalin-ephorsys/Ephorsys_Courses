import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'

import { images } from '../../assets/Assets'

import CoursesHeroSection from './CoursesHeroSection'
import CourseOffer from '../about/CourseOffer'
import ContactSection from '../../components/ContactSection'

const Courses = () => {
    return (
        <>
            <Navbar />

            <CoursesHeroSection
                title="Learn. Build. Launch Your Tech Career."
                paragraph="Master in-demand technology skills through practical, mentor-led courses. Build real-world projects, strengthen your portfolio, and gain the skills you need to succeed in the modern tech industry."
                image={images.courseHero} />

            <CourseOffer />
            <ContactSection />
            <Footer />
        </>
    )
}

export default Courses