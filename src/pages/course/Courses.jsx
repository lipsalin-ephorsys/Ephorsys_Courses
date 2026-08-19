import React from 'react'
import Footer from '../../layout/Footer'
import CoursesHeroSection from './CoursesHeroSection'
import Navbar from '../../layout/Navbar'
import { images } from '../../assets/Assets'

const Courses = () => {
  return (
    <>
    <Navbar/>

      <CoursesHeroSection
        title="Learn Full-Stack Web Development - Next-Gen MERN Stack Boot Camp"
        paragraph="Comprehensive, mentor-led web development training. Hands-on
              with MongoDB, Express, React, and Node.js. Build live
              cloud-deployed web applications with 100% placement assistance.
              Start coding your future today."
        image={images.courseHero}/>
        <Footer/>
    </>
  )
}

export default Courses