
const Button = (props) => {
  return (
    <>
     <button 
     onClick={props.onClick}
      className="
        md:px-6 px-3 py-3
        rounded-xl
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
        ease-in-out
        cursor-pointer
      ">
        {props.button}
    </button> 
    </>
  )
}

export default Button
