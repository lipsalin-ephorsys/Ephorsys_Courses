import {Phone,Mail,MapPin, Car} from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
     <footer className="w-full bg-gray-200/80 backdrop-blur-sm">
       <div className="flex lg:flex-row flex-col justify-between ">
        <div className="px-6 md:px-10 lg:px-15 pt-4 lg:w-1/2">
         <h1 className="font-bold text-[#70C900] text-2xl">Ephorsys</h1>

          <p className="text-[#70C900] pt-2">
            Rent a car imperdiet sapien porttito 
            <br />the bibenum ellentesue the commodo erat nesuen.</p>
       </div>

        <div className="flex gap-3 pt-5 lg:pt-10 px-6 md:px-10 lg:px-15 lg:pl-85">
              
              <FaXTwitter className="h-11 w-11 hover:bg-[#071B0A] bg-[#70C900]
                                   text-[#071B0A] hover:text-[#70C900] p-2 border
                                    border-[#70C900] rounded-full"/>

              <FaFacebookF className="h-11 w-11 hover:bg-[#071B0A] bg-[#70C900]
                                   text-[#071B0A] hover:text-[#70C900] p-2 border
                                    border-[#70C900] rounded-full"/>

              <FaInstagram className="h-11 w-11 hover:bg-[#071B0A] bg-[#70C900]
                                   text-[#071B0A] hover:text-[#70C900] p-2 border
                                    border-[#70C900] rounded-full"/>

              <FaYoutube className="h-11 w-11 hover:bg-[#071B0A] bg-[#70C900]
                                   text-[#071B0A] hover:text-[#70C900] p-2 border
                                    border-[#70C900] rounded-full"/>
           </div>
       </div>

       <div className="text-[#70C900] m-8 md:m-5 shadow-sm shadow-[#B8D9BE]
                      bg-[#071B0A] flex flex-col md:flex-row justify-between
                       gap-10 md:gap-20 md:text-sm p-10 lg:px-30 md:px-6 rounded-2xl ">
           
           <div className="lg:w-70 md:w-60">
              <h2 className="font-bold text-2xl pb-3 text-[#70C900]">Subscribe</h2>
              <p className="text-[#70C900]">
                    Want to be notified about our services.
                    Just sign up and we'll send you a notification by email.</p>

              <input type="email" 
                     name="Email"
                     placeholder="Enter email adress"
                     className="border border-[#B8D9BE] bg-transparent text-[#70C900] 
                                rounded-3xl p-2 pl-3 mt-2 cursor-pointer
                               placeholder:text-[#B8D9BE]" />
           </div>

           <div >
               <h2 className="font-bold text-xl md:text-2xl pb-3 text-[#70C900]">
                Quick Links</h2>

               <ul>
                 <li className="text-[#70C900] hover:text-[#70C900] flex gap-2">
                    <Link to="/about">About</Link><GoArrowUpRight className="mt-1 hover:text-[#70C900]" />
                 </li>
                 <li className="text-[#70C900] hover:text-[#70C900] flex gap-2">
                  <Link to="/courses">Courses</Link>
                  <GoArrowUpRight className="mt-1 hover:text-[#70C900]" />
                 </li>
                
                 <li className="text-[#70C900] hover:text-[#70C900] flex gap-2">
                  <Link to="/faq">FAQ</Link><GoArrowUpRight className="mt-1 hover:text-[#70C900]" />
                 </li>
                 <li className="text-[#70C900] hover:text-[#70C900] flex gap-2">
                  <Link to="/contact">Contact</Link><GoArrowUpRight className="mt-1 hover:text-[#70C900]" />
                 </li>
               </ul>
           </div>

           <div className="flex flex-col gap-3 md:ml-2">
               <div className="flex gap-2">
                   <Phone className="h-11 w-11 bg-[#70C900] hover:bg-[#D9F8E2] hover:text-[#071B0A] text-[#071B0A] p-2 border-0 rounded-full"/>
                   <div>
                      <h2 className="text-[#70C900]">Call us</h2>
                      <a href="tel:+971 52-333-4444" 
                      className="text-[#70C900]">+971 52-333-4444</a>
                   </div>
               </div>

               <div className="flex gap-2">
                <Mail className="h-11 w-11 bg-[#70C900] hover:bg-[#D9F8E2] hover:text-[#071B0A] text-[#071B0A] p-2 border-0 rounded-full" /> 
                  <div>
                    <h2 className="text-[#70C900]">Write to us</h2>
                    <a href="mailto:info@renax.com"
                     className="text-[#70C900]">hr@ephorsys.com</a>
                  </div>
               </div>

               <div className="flex gap-2">
                <MapPin className="h-10 w-16 bg-[#70C900] hover:bg-[#D9F8E2] 
                               hover:text-[#071B0A] text-[#071B0A] p-2 border-0 rounded-full"/>
                <div>
                  
                  <a href="https://www.google.com/maps" target="_blank"
                   className="text-[#70C900]">Ephorsys Private Limited: 1st floor,k8/733,Kalinga Nagar,Bhubaneswar,near Sum Ultimate Medicare,751003</a> 
                </div> 
               </div> 
           </div> 
           
       </div> 

       <div className="bg-[#071B0A] text-[#70C900] text-center text-sm m-5 shadow-md
                      shadow-[#B8D9BE] p-2 mt-8 rounded-2xl">
         ©2026 webRedox. All rights reserved. 
       </div> 
         
     </footer> 
    </> 
  ) 
} 
 
export default Footer