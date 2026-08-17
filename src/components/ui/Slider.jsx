import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const  Slider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  // Responsive card count
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateCards();

    window.addEventListener("resize", updateCards);

    return () => {
      window.removeEventListener("resize", updateCards);
    };
  }, []);

  const cards = React.Children.toArray(children);

  const maxIndex = Math.max(
    0,
    cards.length - visibleCards
  );

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= maxIndex ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <div className="relative w-full">

      {/* Slider */}
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{
            x: `-${currentIndex * (100 / visibleCards)}%`,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full shrink-0 md:w-1/2 lg:w-1/3"
            >
              {card}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "w-6 bg-amber-400"
                  : "w-2 bg-gray-300"
              }`}
            />
          )
        )}
      </div>

    </div>
  );
};

export default Slider;
