import { FaStar } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";
import { IoPeopleSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
const CourseCard = (props) => {
    return (
        <>
            <div className="overflow-hidden w-full max-w-[85%] md:max-w-[45%] lg:max-w-[23.5%] h-120 bg-white rounded-3xl relative group">
                <img src={props.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out
            group-hover:scale-110" />
                <div className="text-white relative top-65 z-10 p-5 h-full flex flex-col backdrop-blur-md bg-white/5">
                    <h1 className="font-bold text-2xl text-white">{props.heading}</h1>
                    <div className="grid grid-cols-2 mt-2 gap-2">
                        <p className="flex gap-1"><FaStar className="mt-1 text-yellow-400" />{props.rating}</p>
                        <p className="flex gap-1"><SlCalender className="mt-1 text-black" />{props.date}</p>
                        <p className="flex gap-1"><GiSandsOfTime className="mt-1 text-gray-200" />{props.duration}</p>
                        <p className="flex gap-1"><IoPeopleSharp className="mt-1 text-blue-800" />{props.students}</p>
                    </div>
                    <div className=" flex gap-2 mt-2">
                        <div className="bg-gray-300 rounded-3xl p-1 text-[#70C900] px-3 group-hover:bg-[#70C900] group-hover:text-white">Online</div>
                        <div className="bg-gray-300 rounded-3xl p-1 text-[#70C900] px-3 group-hover:bg-[#70C900] group-hover:text-white">Offline</div>
                        <div className="bg-gray-300 rounded-3xl p-1 text-[#70C900] px-3 group-hover:bg-[#70C900] group-hover:text-white">Hybrid</div>
                    </div>
                    <div className=" flex gap-2 mt-3 ">
                        <button className="
                           p-2 rounded-3xl px-5 w-90
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
                           p-2 rounded-3xl px-5 w-90
                           bg-linear-to-r
                           from-black
                           via-[#70C900]
                           to-black
                           bg-size-[200%_100%]
                           bg-left
                           hover:bg-right
                           transition-[background-position]
                           duration-700
                           ease-in-out">View Program</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCard
