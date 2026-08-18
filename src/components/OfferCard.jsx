const OfferCard = (props) => {
  return (
    <div
      className="
        group relative
        w-full
        xl:max-w-155
        lg:max-w-105
        md:max-w-80
        max-w-95
        rounded-3xl
        overflow-hidden
        p-px
        bg-linear-to-b
        from-white/10
        via-white/5
        to-[#70C900]/70
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_20px_60px_rgba(112,201,0,0.18)]
      ">
      <div
        className="
          relative
          rounded-3xl
          overflow-hidden
          p-4
          bg-[#050505]
        ">
        <div
          className="
            absolute
            -bottom-12.5
            left-1/2
            -translate-x-1/2
            w-3/4
            h-24
            rounded-full
            bg-[#70C900]/20
            blur-3xl
            group-hover:bg-[#70C900]/35
            transition-all
            duration-500
          "
        />

        <h1
          className="
            relative
            text-white
            md:text-2xl
            text-xl
            font-semibold
            mb-4
            text-center
          "
        >
          {props.heading}
        </h1>

        <div
          className="
            relative
            w-full
            aspect-video
            overflow-hidden
            rounded-2xl
            border
            border-white/10
          "
        >
          <iframe
            className="w-full h-full"
            src={props.vdo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="relative mt-5 flex flex-wrap justify-center gap-2">
          <div
            className="
              rounded-full
              border
              border-dotted
              border-[#70C900]/50
              px-3
              py-1.5
              
              text-gray-300
              bg-[#70C900]/5
            "
          >
            {props.des1}
          </div>

          <div
            className="
              rounded-full
              border
              border-dotted
              border-[#70C900]/50
              px-3
              py-1.5
             
              text-gray-300
              bg-[#70C900]/5
            "
          >
            {props.des2}
          </div>

          <div
            className="
              rounded-full
              border
              border-dotted
              border-[#70C900]/50
              px-3
              py-1.5
              
              text-gray-300
              bg-[#70C900]/5
            "
          >
            {props.des3}
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-5 h-px bg-white/10" />

        {/* Description */}
        <p
          className="
            relative
            text-sm
            text-gray-400
            leading-relaxed
          "
        >
          {props.descp}
        </p>

        {/* Button */}
        <button
          className="
            relative
            mt-5
            w-full
            rounded-full
            border
            border-[#70C900]/50
            bg-[#70C900]/10
            py-3
            font-semibold
        text-white        
        bg-linear-to-r
        from-black
        via-[#70C900]
        to-black
        bg-size-[200%_100%]
        bg-left
        hover:bg-right
        transition-[background-position]
        duration-700
        ease-in-out          "
        >
          Explore Courses
        </button>
      </div>
    </div>
  );
};

export default OfferCard;