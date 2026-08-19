import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const Motto = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 py-10 sm:py-12">
      
      <h1 className="text-3xl sm:text-4xl font-bold text-center">
        Our Motto
      </h1>

      <div className="w-full max-w-3xl bg-[#70C900] px-8 sm:px-12 md:px-16 py-6 sm:py-8
                      rounded-2xl sm:rounded-3xl duration-300 hover:-translate-y-2">

        <div className="flex items-center justify-center gap-3 sm:gap-5">

          <BiSolidQuoteAltLeft className="shrink-0 text-xl sm:text-2xl md:text-3xl" />

          <p className="text-base sm:text-lg md:text-xl font-bold text-center leading-relaxed">
            Beyond Technology, Building Possibilities
          </p>

          <BiSolidQuoteAltRight className="shrink-0 text-xl sm:text-2xl md:text-3xl" />

        </div>
      </div>
    </div>
  );
};

export default Motto;