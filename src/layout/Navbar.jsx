import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const navigate = useNavigate()
  return (

    <nav className=" fixed top-0 z-50  w-full max-w-[1700px]  
             bg-gray-200/80  backdrop-blur-lg cursor-pointer px-6">

      <div className="flex h-16 items-center justify-between  sm:px-6 lg:px-8">

        <h1 className="font-bold text-2xl text-[#70C900]">Ephorsys</h1>

        <ul className="hidden md:flex items-center gap-3 lg:gap-5 ">
          <li className="text-[#70C900] hover:bg-[#70C900] hover:text-black
                         rounded-full px-4 py-1">
            <Link to="/">Home </Link>
          </li>

          <li className="relative">
            <div className="flex text-[#70C900] rounded-full px-4 py-1
                            hover:bg-[#70C900] hover:text-black  ">
                           
              Courses
              <MdArrowDropDown onClick={() => setCourseOpen(!courseOpen)}
                className="mt-1.5" />
            </div>

            {courseOpen && (
              <div
                className="absolute left-0 top-full mt-4
                         bg-gray-200/90 text-[#70C900]
                           rounded-xl w-48 p-2">
              
                <Link to='/datanalyst'
                className="block p-2 hover:bg-[#70C900] hover:text-black rounded-xl">
                  Data Analytics
                </Link>

                <Link to='/datascience'
                 className="block p-2 hover:bg-[#70C900] hover:text-black rounded-xl">
                  Data Science
                </Link>

                <Link to='/aiml'
                className="block p-2 hover:bg-[#70C900] hover:text-black rounded-xl">
                  AI/ML
                </Link>

                <Link to="/mern"
                 className="block p-2 hover:bg-[#70C900] hover:text-black rounded-xl">
                  MERN Stack
                </Link>
              </div>
            )}
          </li>

          <li className="text-[#70C900] hover:bg-[#70C900] hover:text-black 
                         rounded-full px-4 py-1">
            <Link to="/about">About</Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-2 rounded-full bg-[#70C900] px-4 py-2
                        hover:bg-[#071B0A]  hover:text-[#70C900]"
          onClick={() => (navigate("/contact"))} >
          <Phone size={18} className="hover:animate-pulse" />
          <span>Contact</span>
        </div>
       
         <button className="md:hidden"
          onClick={() => setIsOpen(!isOpen)} >
       
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden border-t border-gray-300">
          <ul className="flex flex-col items-center gap-5 py-5">
            <li className="text-[#70C900] hover:bg-[#70C900] rounded-full px-2 py-1">
              <Link to="/">Home</Link>
            </li>

            <li className="text-[#70C900] hover:bg-[#70C900] rounded-full px-2 py-1">
              <Link to="/about">About</Link>
            </li>

            <li className="relative">
              <div className="flex text-[#70C900] hover:bg-[#70C900] hover:text-black 
          rounded-full px-4 py-1">
                Courses
                <MdArrowDropDown onClick={() => setCourseOpen(!courseOpen)}
                  className="mt-1.5" />
              </div>

              {courseOpen && (
                <div
                  className="absolute left-0 top-full mt-4
                          bg-gray-300 text-[#70C900]
                            rounded-xl w-48 p-2">
                  <Link to='/datanalyst'
                  className="block p-2 hover:bg-[#70C900] hover:text-black rounded-xl">
                    Data Analytics
                  </Link>

                  <Link to='/datascience'
                        className="block p-2 hover:bg-[#70C900] hover:text-black rounded-xl">
                    Data Science
                  </Link>

                  <Link to='/aiml'
                        className="block p-2 hover:bg-[#70C900] hover:text-black rounded-xl">
                    AI/ML
                  </Link>

                  <Link to="/mern" 
                        className="block p-2 hover:bg-[#70C900] hover:text-black rounded-xl">
                    MERN Stack
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link to="/contact">
                <div className="flex items-center  gap-2 rounded-full bg-[#70C900] 
                        hover:bg-[#071B0A]  hover:text-[#70C900] px-4 py-2">
                  <Phone size={18} />
                  <span>Contact</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;