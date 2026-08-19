import { motion } from "motion/react";

import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

import {
  SiMongodb,
  SiTensorflow,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";

const courses = [
  {
    icon: <FaPython />,
    position:
      "top-[5%] left-[5%] md:top-0 md:left-0 lg:top-1 lg:left-1 xl:top-10 xl:left-10",
    color: "bg-yellow-400",
    iconColor: "text-blue-700",
  },
  {
    icon: <FaReact />,
    position:
      "top-[8%] right-[8%] md:top-10 md:left-26 lg:top-10 lg:left-30 xl:top-1 xl:left-46",
    color: "bg-cyan-400",
    iconColor: "text-white",
  },
  {
    icon: <FaNodeJs />,
    position:
      "top-[40%] left-[8%] md:top-1 md:left-90 lg:top-0 lg:left-110 xl:top-1 xl:left-192",
    color: "bg-green-500",
    iconColor: "text-white",
  },
  {
    icon: <SiMongodb />,
    position:
      "top-[38%] right-[8%] md:top-10 md:left-70 lg:top-10 lg:left-140 xl:top-30 xl:left-230",
    color: "bg-green-600",
    iconColor: "text-white",
  },
  {
    icon: <SiTensorflow />,
    position:
      "top-[42%] left-[52%] md:top-22 md:left-135 lg:top-10 lg:left-180 xl:top-10 xl:left-275",
    color: "bg-orange-500",
    iconColor: "text-white",
  },
  {
    icon: <SiPandas />,
    position:
      "bottom-[65%] right-[35%] md:bottom-120 md:left-155 lg:bottom-120 lg:left-215 xl:top-35 xl:left-287",
    color: "bg-blue-600",
    iconColor: "text-white",
  },
  {
    icon: <SiScikitlearn />,
    position:
      "bottom-[80%] left-[35%] md:bottom-115 md:left-45 lg:bottom-115 lg:left-60 xl:top-28 xl:left-88",
    color: "bg-orange-400",
    iconColor: "text-blue-900",
  },
  {
    icon: <FaDatabase />,
    position:
      "top-[30%] left-[20%] md:top-15 md:left-65 lg:top-10 lg:left-85 xl:top-5 xl:left-122",
    color: "bg-purple-600",
    iconColor: "text-white",
  },
];

export default function CourseFloat() {
  return (
    <div
      className="
        relative
        md:bottom-0
        bottom-12
        w-full
        md:w-135
        h-82.5
        sm:h-95
        md:h-125
        lg:h-125
        md:ml-15
      "
    >
      {courses.map((course, index) => (
        <motion.div
          key={index}
          className={`absolute ${course.position}`}
          animate={{
            x: [0, 15, -10, 10, 0],
            y: [0, -20, 10, -15, 0],
            rotate: [0, 5, -5, 3, 0],
          }}
          transition={{
            duration: 5 + index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.4,
          }}
        >
          <div
            className={`
              w-12 h-12
              sm:w-14 sm:h-14
              md:w-13 md:h-13
              lg:w-14 lg:h-14
               flex justify-center items-center
              ${course.color}

              flex
              items-center
              justify-center
              shadow-xl
              rounded-full
            `}
          >
            <span
              className={`
                text-xl
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
                ${course.iconColor}
              `}
            >
              {course.icon}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}