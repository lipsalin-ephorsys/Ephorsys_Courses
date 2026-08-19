const Award = (props) => {
  return (
    <div
      className="
        bg-white
        w-[80vw]
        md:w-[45vw]
        lg:w-[30vw]
        shrink-0
        p-3
        rounded-2xl
        shadow-lg
        overflow-hidden
      "
    >
      <div className="w-full h-48 sm:h-52 md:h-56 overflow-hidden rounded-xl">
        <img
          src={props.img}
          alt="Award"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-3 sm:p-4">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {props.para}
        </p>
      </div>
    </div>
  );
};

export default Award;