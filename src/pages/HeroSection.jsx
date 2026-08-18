import BackImage from "../components/BackImage"
import Button from "../components/Button.jsx"
import First from "../components/heroAnimation/First"
import Float from "../components/heroAnimation/Float"
import OfferCard from "../components/OfferCard"


const HeroSection = () => {
    const image="https://images.unsplash.com/photo-1599725427295-6ed79ff8dbef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <>
      <BackImage bgImage={image}>
           <div>
            <First/>
            <div className="relative md:bottom-19 md:left-30 bottom-13 left-13 lg:w-full w-50 ">
              <Button  button="Explore Our Courses"/>  
            </div>
            <Float/>
           </div>
      </BackImage>
      <div className=" mt-15 p-9  bg-linear-to-t bg-[#d9ebc7]">
           <h1 className="font-bold text-3xl text-center text-[#70C900] ">WHAT WE OFFER</h1>
          <p className="text-xl font-semibold text-center text-gray-800">Discover our comprehensive range of courses designed to accelerate your career and transform your future in technology </p>
           <div className="flex flex-wrap justify-center items-center gap-5 mt-9">
            <OfferCard heading="Job Guaranted Course" vdo="https://www.youtube.com/embed/0Z02Wu0QAqo?si=FqBS8ppLTAA3LquH" descp=" 100% job placement guarantee with our intensive bootcamp—get hired in top industries. "  des1="100% Placement Guantee" des2="Globally Recognized Certification" des3="Dedicated Career Support"/>
            <OfferCard heading="Job Guaranted Course" vdo="https://www.youtube.com/embed/0Z02Wu0QAqo?si=FqBS8ppLTAA3LquH" descp=" 100% job placement guarantee with our intensive bootcamp—get hired in top industries. "  des1="100% Placement Guantee" des2="Globally Recognized Certification" des3="Dedicated Career Support"/>
           <OfferCard heading="Job Guaranted Course" vdo="https://www.youtube.com/embed/0Z02Wu0QAqo?si=FqBS8ppLTAA3LquH" descp=" 100% job placement guarantee with our intensive bootcamp—get hired in top industries. "  des1="100% Placement Guantee" des2="Globally Recognized Certification" des3="Dedicated Career Support"/>
           <OfferCard heading="Job Guaranted Course" vdo="https://www.youtube.com/embed/0Z02Wu0QAqo?si=FqBS8ppLTAA3LquH" descp=" 100% job placement guarantee with our intensive bootcamp—get hired in top industries. "  des1="100% Placement Guantee" des2="Globally Recognized Certification" des3="Dedicated Career Support"/>

           </div>
      </div>
      <div className="bg-[#70C900] pt-8">
         <h1 className="text-center font-bold text-3xl">Our Awards & <b className="font-bold text-white">Recognition</b></h1>
         <p className="text-center mt-1 font-semibold text-xl">Celebrating excellence and innovation in our industry</p>
      </div>
    </>
  )
}

export default HeroSection
