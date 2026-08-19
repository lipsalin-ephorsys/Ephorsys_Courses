import { images } from "../../assets/Assets"
import Footer from "../../layout/Footer"
import Navbar from "../../layout/Navbar"
import CoursesHeroSection from "../course/CoursesHeroSection"
import CourseOffer from "./CourseOffer"
import Motto from "./Motto"
import Team from "./Team"
import Whoweare from "./Whoweare"

const About = () => {
  return (
    <>
      <Navbar />
      <CoursesHeroSection
        title="Driven by Innovation, Built on Trust"
        paragraph="We are committed to helping our clients succeed in an ever-changing digital world. By combining modern technology, practical expertise, and a passion for innovation, we create solutions that deliver real results. We believe in building strong relationships, exceeding expectations, and growing together."
        image={images.about} />

      <Motto />
      <CourseOffer />
      <Whoweare />
      <Team />

      <Footer />
    </>
  )
}

export default About