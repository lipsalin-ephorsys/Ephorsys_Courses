import { motion } from "motion/react";

const Career = ({ title, subTitle, icon: Icon }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative w-full max-w-sm  min-h-64
                 overflow-hidden rounded-2xl  border border-slate-300
                bg-white p-6 sm:p-7 md:p-8 shadow-sm
                 transition-all duration-300  hover:border-[#70C900]
                 hover:shadow-xl  cursor-pointer ">

      <div className="absolute left-0 top-0  h-1 w-full origin-left scale-x-0 bg-[#70C900]
                      transition-transform duration-300 group-hover:scale-x-100 "/>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center      
                  rounded-full bg-[#70C900] text-black shadow-md">
        <Icon className="text-xl sm:text-2xl" />
      </motion.div>

      <div className="mt-5 sm:mt-6">
       
        <h2 className="text-xl sm:text-2xl font-bold text-[#172554]
                      transition-colors duration-300  group-hover:text-[#70C900] ">
          {title}
        </h2>
        <p className="mt-3 text-sm sm:text-base leading-6 text-slate-500">   
          {subTitle}
        </p>
      </div>
    </motion.div>
  );
};

export default Career;