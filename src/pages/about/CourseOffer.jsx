import CourseCard from '../../components/heroSection/CourseCard'

import { images } from '../../assets/Assets'

const CourseOffer = () => {
  return (
    <div className='flex flex-col justify-center items-center py-12'>
      <h1 className='font-bold text-3xl'>Courses We Offer</h1>

      <div className="mt-10 flex flex-wrap justify-center items-center gap-5
                      sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">

        <CourseCard image={images.course}
          heading="MERN STACK"
          rating="4.7(3000 Student)"
          date="17th Aug 2026"
          duration="8 month"
          students="30 student" />

        <CourseCard image={images.course1}
          heading="DATA ANALYTICS"
          rating="4.7(3000 Student)"
          date="17th Aug 2026"
          duration="8 month"
          students="30 student" />

        <CourseCard image={images.course2}
          heading="DATA SCIENCE"
          rating="4.7(3000 Student)"
          date="17th Aug 2026"
          duration="8 month"
          students="30 student" />

        <CourseCard image={images.course3}
          heading="AI/ML"
          rating="4.7(3000 Student)"
          date="17th Aug 2026"
          duration="8 month"
          students="30 student" />

      </div>
    </div>
  )
}

export default CourseOffer