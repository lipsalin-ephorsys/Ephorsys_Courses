import { motion } from "motion/react";

const paragraphs = [
  {
    content: <>WELCOME TO</>,
    className: "md:text-md text-sm font-semibold text-[#70C900]",
  },
  {
    content: (
      <>
        National Level
        <span className="text-[#70C900]"> Award Winning Skill </span>
        Development Platform
      </>
    ),
    className: "md:text-4xl text-3xl font-bold text-gray-400",
  },
  {
    content: (
      <>
        Upgrade or kick-start your career in core sector & grow exponentially
        with this 100% industry & curated course
      </>
    ),
    className: "md:text-xl text-md text-white",
  },
];

export default function First() {
  return (
    <div className="space-y-4 md:m-30 m-15 lg:w-150 md:w-125">
      {paragraphs.map((paragraph, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: index * 1.2,
            ease: "easeOut",
          }}
          className={paragraph.className}
        >
          {paragraph.content}
        </motion.p>
      ))}
    </div>
  );
}