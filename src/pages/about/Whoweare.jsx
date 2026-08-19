import ImageSlider from '../course/ImageSlider'

const Whoweare = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6 py-12 bg-[#70C900]'>
        <h1 className='text-3xl font-bold '>Who We Are ?</h1>

        <div className=''>
            <p className='px-15 '>
               We are a passionate IT team dedicated to building innovative digital solutions ,
               by combining technology, creativity, and expertise to solve real-world challenges.
               Our focus is on delivering reliable, scalable, and user-friendly solutions by working
               together, we turn ideas into technology that drives growth and success.
               We continuously adapt to emerging technologies to deliver future-ready solutions and
               our commitment to excellence and customer satisfaction drives everything we do.
            </p>
            <ImageSlider/>
        </div>
    </div>
    
  )
}

export default Whoweare