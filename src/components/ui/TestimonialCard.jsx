import { motion } from "framer-motion";
import { Star } from "lucide-react";

const StatCard = ({ value, label }) => {
  return (
    <div
      className="
        rounded-2xl
        border border-black/10
        bg-white
        p-4
        text-center
        shadow-[0_4px_20px_rgba(0,0,0,0.06)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_8px_25px_rgba(112,201,0,0.15)]
      "
    >
      <p
        className="
          text-2xl
          font-extrabold
          text-black
          sm:text-3xl
        "
      >
        {value}
      </p>

      <p
        className="
          mt-1
          text-xs
          font-medium
          text-gray-500
          sm:text-sm
        "
      >
        {label}
      </p>
    </div>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      className="sticky w-full"
      style={{
        top: "20px",
      }}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-black
          bg-black
          p-5
          shadow-[0_10px_35px_rgba(0,0,0,0.18)]

          sm:p-6
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            h-20
            w-full
            bg-[#70C900]/20
            blur-2xl
          "
        />

        <div className="relative z-10">
          <div className="flex items-center gap-3 sm:gap-4">
            <div
              className="
                h-12
                w-12
                shrink-0
                rounded-xl
                border
                border-[#70C900]/40
                bg-cover
                bg-center
                sm:h-14
                sm:w-14
              "
              style={{
                backgroundImage: `url(${testimonial.avatarSrc})`,
              }}
              role="img"
              aria-label={`Photo of ${testimonial.name}`}
            />

            <div className="min-w-0 flex-1">
              <h3
                className="
                  truncate
                  text-base
                  font-bold
                  text-white
                  sm:text-lg
                "
              >
                {testimonial.name}
              </h3>

              <p
                className="
                  truncate
                  text-xs
                  text-gray-400
                  sm:text-sm
                "
              >
                {testimonial.title}
              </p>
            </div>
          </div>

          <div className="my-4 flex items-center gap-2">
            <span className="text-sm font-bold text-white sm:text-base">
              {testimonial.rating.toFixed(1)}
            </span>

            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`
                    h-4
                    w-4
                    ${
                      i < Math.floor(testimonial.rating)
                        ? "fill-[#70C900] text-[#70C900]"
                        : "text-gray-700"
                    }
                  `}
                />
              ))}
            </div>
          </div>

          {testimonial.quote && (
            <p
              className="
                text-sm
                leading-6
                text-gray-300
                sm:text-base
                sm:leading-7
              "
            >
              &ldquo;{testimonial.quote}&rdquo;
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ClientsSection = ({
  tagLabel,
  title,
  description,
  stats,
  testimonials,
  primaryActionLabel,
  secondaryActionLabel,
}) => {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        py-14

        sm:py-16

        md:py-20

        lg:py-28
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4

          sm:px-6

          lg:px-8
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-12

            lg:grid-cols-2
            lg:gap-16

            xl:gap-20
          "
        >
          {/* LEFT SIDE */}
          <div
            className="
              flex
              flex-col
              gap-5

              lg:sticky
              lg:top-20
              lg:self-start
            "
          >
            {/* Tag */}
            <div
              className="
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-[#70C900]/30
                bg-[#70C900]/10
                px-3
                py-1.5
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#70C900]
                  shadow-[0_0_10px_#70C900]
                "
              />

              <span
                className="
                  text-xs
                  font-semibold
                  text-[#4f9700]
                  sm:text-sm
                "
              >
                {tagLabel}
              </span>
            </div>

            <h2
              className="
                max-w-xl
                text-3xl
                font-extrabold
                leading-tight
                tracking-tight
                text-black

                sm:text-4xl

                md:text-5xl

                lg:text-5xl

                xl:text-6xl
              "
            >
              {title}
            </h2>

            <div
              className="
                h-1
                w-16
                rounded-full
                bg-[#70C900]
                shadow-[0_0_12px_rgba(112,201,0,0.6)]
              "
            />

            <p
              className="
                max-w-xl
                text-base
                leading-7
                text-gray-500

                sm:text-lg
                sm:leading-8
              "
            >
              {description}
            </p>

            <div
              className="
                mt-2
                grid
                grid-cols-3
                gap-2

                sm:gap-4
              "
            >
              {stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>

            <div
              className="
                mt-3
                flex
                flex-col
                gap-3

                sm:flex-row
              "
            >
              <button
                type="button"
                className="
                  w-full
                  rounded-full
                  border
                  border-black
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white

                  sm:w-auto
                "
              >
                {secondaryActionLabel}
              </button>

              <button
                type="button"
                className="
                  w-full
                  rounded-full
                  bg-[#70C900]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_5px_20px_rgba(112,201,0,0.25)]
                  transition-all
                  duration-300
                  hover:bg-[#61b500]
                  hover:shadow-[0_8px_25px_rgba(112,201,0,0.4)]

                  sm:w-auto
                "
              >
                {primaryActionLabel}
              </button>
            </div>
          </div>

          <div className="relative w-full">
  {testimonials.map((testimonial, index) => (
    <div
      key={`${testimonial.name}-${index}`}
      className="relative mb-5 last:mb-0 lg:mb-3"
    >
      <TestimonialCard
        testimonial={testimonial}
        index={index}
      />
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;