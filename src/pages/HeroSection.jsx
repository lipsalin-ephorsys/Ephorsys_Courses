import BackImage from "../components/BackImage"
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
            <Float/>
           </div>
      </BackImage>
      <div className=" mt-30 p-9  bg-linear-to-t bg-[#E8F0E0]">
           <h1 className="font-bold text-3xl text-center ">WHAT WE OFFER</h1>
          <p className="text-xl font-semibold text-center">Discover our comprehensive range of courses designed to accelerate your career and transform your future in technology </p>
           <div className="flex flex-wrap justify-center items-center gap-5 mt-9">
            <OfferCard heading="Job Guaranted Course" vdo="https://www.youtube.com/embed/0Z02Wu0QAqo?si=FqBS8ppLTAA3LquH" descp=" 100% job placement guarantee with our intensive bootcamp—get hired in top industries. "  des1="100% Placement Guantee" des2="Globally Recognized Certification" des3="Dedicated Career Support"/>
            <OfferCard heading="Job Guaranted Course" vdo="https://www.youtube.com/embed/0Z02Wu0QAqo?si=FqBS8ppLTAA3LquH" descp=" 100% job placement guarantee with our intensive bootcamp—get hired in top industries. "  des1="100% Placement Guantee" des2="Globally Recognized Certification" des3="Dedicated Career Support"/>
           <OfferCard heading="Job Guaranted Course" vdo="https://www.youtube.com/embed/0Z02Wu0QAqo?si=FqBS8ppLTAA3LquH" descp=" 100% job placement guarantee with our intensive bootcamp—get hired in top industries. "  des1="100% Placement Guantee" des2="Globally Recognized Certification" des3="Dedicated Career Support"/>
           <OfferCard heading="Job Guaranted Course" vdo="https://www.youtube.com/embed/0Z02Wu0QAqo?si=FqBS8ppLTAA3LquH" descp=" 100% job placement guarantee with our intensive bootcamp—get hired in top industries. "  des1="100% Placement Guantee" des2="Globally Recognized Certification" des3="Dedicated Career Support"/>

           </div>
      </div>
      
    </>
  )
}

export default HeroSection
