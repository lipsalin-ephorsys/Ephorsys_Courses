import { images } from "../assets/Assets.js"
import BackImage from "../components/heroSection/BackImage.jsx"
import Button from "../components/heroSection/Button.jsx"
import First from "../components/heroAnimation/First"
import Float from "../components/heroAnimation/Float"
import OfferCard from "../components/heroSection/OfferCard.jsx"
import Award from "../components/heroSection/Award.jsx"
import { motion } from "framer-motion";
import { useState } from "react"
import CourseCard from "../components/heroSection/CourseCard.jsx"
import Background from "../components/heroSection/Background.jsx"
import ClientsSectionDemo from "../components/ui/ClientsSectionDemo.jsx"

import { useNavigate } from "react-router-dom"
import WhyChooseUs from "../components/ui/WhyChooseUs.jsx"


const HeroSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  const navigate = useNavigate()
  return (
    <>
      <BackImage bgImage={images.hero}>
        <div>
          <First />
          <div className="relative md:bottom-19 md:left-30 bottom-13 left-13 lg:w-full w-50 ">
            <Button button="Explore Our Courses"
             onClick={()=>navigate('/coursemain')} />
          </div>
          <Float />
        </div>
      </BackImage>
      <div className=" mt-15 p-9  bg-linear-to-t bg-[#d9ebc7]">
        <h1 className="font-bold text-3xl text-center text-[#70C900] ">WHAT WE OFFER</h1>
        <p className="text-xl font-semibold text-center text-gray-800">Discover our comprehensive range of courses designed to accelerate your career and transform your future in technology </p>
        <div className="flex flex-wrap justify-center items-center gap-5 mt-9">
          <OfferCard heading="Job Guaranted Course" vdo="https://www.youtube.com/embed/0Z02Wu0QAqo?si=FqBS8ppLTAA3LquH" descp=" 100% job placement guarantee with our intensive bootcamp—get hired in top industries. " des1="100% Placement Guantee" des2="Globally Recognized Certification" des3="Dedicated Career Support" />
          <OfferCard heading="Job Guaranted Course" vdo="https://www.youtube.com/embed/0Z02Wu0QAqo?si=FqBS8ppLTAA3LquH" descp=" 100% job placement guarantee with our intensive bootcamp—get hired in top industries. " des1="100% Placement Guantee" des2="Globally Recognized Certification" des3="Dedicated Career Support" />
          <OfferCard heading="Job Guaranted Course" vdo="https://www.youtube.com/embed/0Z02Wu0QAqo?si=FqBS8ppLTAA3LquH" descp=" 100% job placement guarantee with our intensive bootcamp—get hired in top industries. " des1="100% Placement Guantee" des2="Globally Recognized Certification" des3="Dedicated Career Support" />
          <OfferCard heading="Job Guaranted Course" vdo="https://www.youtube.com/embed/0Z02Wu0QAqo?si=FqBS8ppLTAA3LquH" descp=" 100% job placement guarantee with our intensive bootcamp—get hired in top industries. " des1="100% Placement Guantee" des2="Globally Recognized Certification" des3="Dedicated Career Support" />

        </div>
      </div>
      <div className="bg-[#93e035] pt-8">
        <h1 className="text-center font-bold text-3xl">
          Our Awards & <b className="font-bold text-white">Recognition</b>
        </h1>

        <p className="text-center mt-1 font-semibold text-xl">
          Celebrating excellence and innovation in our industry
        </p>

        <div className="w-full overflow-hidden mt-8 pb-6">

          <motion.div
            className="flex gap-6 w-max"
            animate={{
              x: isPaused ? undefined : ["0%", "-50%"],
            }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >

            <Award
              img={images.award}
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, magni facilis asperiores quis delectus iste error alias dolore quod voluptatibus!"
            />

            <Award
              img={images.award1}
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, magni facilis asperiores quis delectus iste error alias dolore quod voluptatibus!"
            />

            <Award
              img={images.award2}
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, magni facilis asperiores quis delectus iste error alias dolore quod voluptatibus!"
            />

            <Award
              img={images.award}
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, magni facilis asperiores quis delectus iste error alias dolore quod voluptatibus!"
            />

            <Award
              img={images.award1}
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, magni facilis asperiores quis delectus iste error alias dolore quod voluptatibus!"
            />

            <Award
              img={images.award2}
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, magni facilis asperiores quis delectus iste error alias dolore quod voluptatibus!"
            />

          </motion.div>

        </div>
      </div>
      <div className="bg-[#d9ebc7] pt-10">
          <h1 className="font-bold text-4xl ml-12">Recommended Courses <b className="font-bold text-[#70C900]">Job Leading</b></h1>
          <p className="text-xl font-semibold  text-gray-800 ml-12 mt-2">The most hands-on, practical, and intensive coding-led courses to fulfill your ambitions.</p>
          <div className="mt-10 flex justify-center items-center flex-wrap lg:gap-3 gap-5"> 
          <CourseCard image={images.course} heading="MERN STACK" rating="4.7(3000 Student)" date="17th Aug 2026" duration="8 month" students="30 student" page="/mern"/>
          <CourseCard image={images.course1} heading="DATA ANALYTICS" rating="4.7(3000 Student)" date="17th Aug 2026" duration="8 month" students="30 student" page="/datanalyst"/>
          <CourseCard image={images.course2} heading="DATA SCIENCE" rating="4.7(3000 Student)" date="17th Aug 2026" duration="8 month" students="30 student" page="/datascience"/>
          <CourseCard image={images.course3} heading="AI/ML" rating="4.7(3000 Student)" date="17th Aug 2026" duration="8 month" students="30 student" page="/aiml"/>

      </div>
      </div>

      <div className="mt-9">
        <Background/>
      </div>
      <div className="">
         <ClientsSectionDemo/>
      </div>

      <div>
        <WhyChooseUs />
      </div>
    </>
  )
}

export default HeroSection
