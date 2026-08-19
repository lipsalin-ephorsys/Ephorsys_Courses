import { FaStar } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";
import { IoPeopleSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import {  useNavigate } from "react-router-dom";

const CourseCard = (props) => {
    const navigate= useNavigate()
    return (
        <>
            <div className="overflow-hidden w-full max-w-[85%] md:max-w-[45%] lg:max-w-[23%] h-120 bg-white rounded-3xl relative group">
                <img src={props.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out
            group-hover:scale-110" />
                <div className="text-white relative lg:top-63 top-60  z-10 p-5 h-full flex flex-col backdrop-blur-md bg-white/5">
                    <h1 className="font-bold xl:text-2xl lg:text-xl text-2xl text-white">{props.heading}</h1>
                    <div className="grid grid-cols-2 mt-2 gap-2 xl:text-md lg:text-sm text-md">
                        <p className="flex gap-1"><FaStar className="mt-1 text-yellow-400" />{props.rating}</p>
                        <p className="flex gap-1"><SlCalender className="mt-1 text-black" />{props.date}</p>
                        <p className="flex gap-1"><GiSandsOfTime className="mt-1 text-gray-200" />{props.duration}</p>
                        <p className="flex gap-1"><IoPeopleSharp className="mt-1 text-blue-800" />{props.students}</p>
                    </div>
                    <div className=" flex gap-2 mt-2">
                        <div className="bg-gray-300 rounded-3xl p-1 text-[#70C900] xl:px-3 lg:px-1 px-3 group-hover:bg-[#70C900] group-hover:text-white">Online</div>
                        <div className="bg-gray-300 rounded-3xl p-1 text-[#70C900] xl:px-3 lg:px-1 px-3 group-hover:bg-[#70C900] group-hover:text-white">Offline</div>
                        <div className="bg-gray-300 rounded-3xl p-1 text-[#70C900] xl:px-3 lg:px-1 px-3 group-hover:bg-[#70C900] group-hover:text-white">Hybrid</div>
                    </div>
                    <div className=" flex gap-2 mt-3 ">
                        <button className="
                           md:p-2 p-1 rounded-3xl xl:text-md lg:text-xs text-md md:w-90 w-80
                           bg-linear-to-r
                           from-black
                           via-[#70C900]
                           to-black
                           bg-size-[200%_100%]
                           bg-left
                           hover:bg-right
                           transition-[background-position]
                           duration-700
                           ease-in-out">Apply</button>
                        <button className="
                           md:p-2 p-1 rounded-3xl text-xs md:w-90 w-80
                           bg-linear-to-r
                           from-black
                           via-[#70C900]
                           to-black
                           bg-size-[200%_100%]
                           bg-left
                           hover:bg-right
                           transition-[background-position]
                           duration-700
                           ease-in-out"  onClick={()=>navigate(props.page)}>View Program</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCard
