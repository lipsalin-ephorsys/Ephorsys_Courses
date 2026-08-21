import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SQRT_5000 = Math.sqrt(5000);

const reasons = [
  {
    id: 0,
    title: "Industry Expertise",
    description:
      "Learn from experienced professionals and industry experts who bring practical knowledge to every learning experience.",
  },
  {
    id: 1,
    title: "Practical Learning",
    description:
      "Our courses focus on hands-on projects and real-world applications so you can turn your knowledge into practical skills.",
  },
  {
    id: 2,
    title: "Career Focused",
    description:
      "We help learners develop job-ready skills that match current industry requirements and career opportunities.",
  },
  {
    id: 3,
    title: "Expert Guidance",
    description:
      "Get continuous guidance and support throughout your learning journey whenever you need help.",
  },
  {
    id: 4,
    title: "Updated Curriculum",
    description:
      "Our learning content is regularly updated to keep you aligned with modern technologies, tools and industry trends.",
  },
  {
    id: 5,
    title: "Affordable Learning",
    description:
      "Access quality skill development programs designed to provide maximum value without unnecessary costs.",
  },
  {
    id: 6,
    title: "Real World Projects",
    description:
      "Work on meaningful projects that help you build confidence and create a strong portfolio.",
  },
  {
    id: 7,
    title: "Skill Development",
    description:
      "Build technical and professional skills that prepare you to confidently take the next step in your career.",
  },
];

const WhyChooseCard = ({
  position,
  reason,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={`
        absolute
        left-1/2
        top-1/2
        cursor-pointer
        border-2
        p-6
        transition-all
        duration-500
        ease-in-out

        ${
          isCenter
            ? "z-10 border-[#70C900] bg-[#70C900] text-white"
            : "z-0 border-black/10 bg-white text-black hover:border-[#70C900]"
        }
      `}
      style={{
        width: cardSize,
        height: cardSize,

        clipPath:
          "polygon(40px 0%, calc(100% - 40px) 0%, 100% 40px, 100% 100%, calc(100% - 40px) 100%, 40px 100%, 0 100%, 0 0)",

        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -50 : position % 2 ? 12 : -12}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,

        boxShadow: isCenter
          ? "0px 6px 0px 3px rgba(0,0,0,0.15)"
          : "none",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-black/20"
        style={{
          right: -2,
          top: 38,
          width: SQRT_5000,
          height: 2,
        }}
      />

      <div className="flex h-full flex-col items-center justify-center text-center">
        <h3
          className={`
            text-lg
            font-bold
            sm:text-xl
            ${
              isCenter
                ? "text-white"
                : "text-black"
            }
          `}
        >
          {reason.title}
        </h3>

        <p
          className={`
            mt-3
            max-w-62.5
            text-sm
            leading-relaxed
            ${
              isCenter
                ? "text-white/90"
                : "text-gray-600"
            }
          `}
        >
          {reason.description}
        </p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const [cardSize, setCardSize] = useState(320);
  const [reasonsList, setReasonsList] = useState(reasons);

  const handleMove = (steps) => {
  const newList = [...reasonsList];

  if (steps > 0) {
    for (let i = 0; i < steps; i++) {
      const item = newList.shift();

      if (!item) return;

      newList.push({
        ...item,
        id: Math.random(),
      });
    }
  } else if (steps < 0) {
    for (let i = 0; i > steps; i--) {
      const item = newList.pop();

      if (!item) return;

      newList.unshift({
        ...item,
        id: Math.random(),
      });
    }
  }

  setReasonsList(newList);
};

  useEffect(() => {
    const updateSize = () => {
      const isDesktop = window.matchMedia(
        "(min-width: 640px)"
      ).matches;

      setCardSize(isDesktop ? 320 : 250);
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <section className="w-full bg-gray-200 py-10">

      <div className="mb-2 text-center">
       
        <h2 className="mt-1 text-2xl font-bold text-black md:text-3xl">
          Why Choose{" "}
          <span className="text-[#70C900]">
            Ephorsys..
          </span>
        </h2>

        <p className="mx-auto mt-2 max-w-xl px-4 text-sm text-gray-600">
          We provide practical learning, expert guidance,
          and career-focused skills to help you grow.
        </p>
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{ height: 470 }}
      >
        {reasonsList.map((reason, index) => {
          const position =
            reasonsList.length % 2
              ? index - (reasonsList.length + 1) / 2
              : index - reasonsList.length / 2;

          return (
            <WhyChooseCard
              key={reason.id}
              reason={reason}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          <button
            onClick={() => handleMove(-1)}
            aria-label="Previous"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              border-2
              border-black
              bg-white
              text-black
              transition-all
              hover:border-[#70C900]
              hover:bg-[#70C900]
              hover:text-white
            "
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() => handleMove(1)}
            aria-label="Next"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              border-2
              border-black
              bg-white
              text-black
              transition-all
              hover:border-[#70C900]
              hover:bg-[#70C900]
              hover:text-white
            "
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;