const KeyFeatures = ({ icon: Icon, title, subtitle, image }) => {
  return (
    <div className="group relative w-80 overflow-hidden rounded-xl py-8 px-5">
     
      <img
        src={image}
        alt="background image"
        className="absolute inset-0 h-full w-full object-cover scale-110
                  transition-transform duration-500 group-hover:scale-125 "/>
      
       <div className=" absolute inset-0 bg-black/70 
                        transition-all duration-500 group-hover:bg-black/30 "/>
 
      <div className="relative z-10">
        <div className="relative flex h-20 w-20 items-center justify-center
                       rounded-full border border-[#70C900] bg-[#70C900]
                       transition-transform
                       duration-500 group-hover:scale-110 group-hover:rotate-6 ">
          <Icon size={30} />
        </div>

        <h2 className="mt-6 px-5 text-2xl font-bold text-[#70C900]
             transition-transform duration-400 group-hover:translate-x-1 ">
          {title}
        </h2>
        <p className="mt-2 px-5 text-[#70C900] 
            transition-transform duration-400 group-hover:translate-x-1 ">
          {subtitle}
        </p>

      </div>
    </div>
  );
};

export default KeyFeatures;