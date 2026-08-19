import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom"

const ContactSection = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-14 sm:py-20">

            <div className="relative overflow-hidden max-w-6xl mx-auto
                           bg-[#071B0A] rounded-3xl px-6 sm:px-10 md:px-16
                             py-12 sm:py-16 md:py-20 ">

                <div className="absolute -top-24 -right-24 w-56 h-56
                               bg-[#70C900]/20 rounded-full blur-3xl "/>


                <div className="absolute -bottom-32 -left-20 w-64 h-64
                               bg-[#70C900]/10 rounded-full blur-3xl"/>

                <div className="relative z-10 flex flex-col items-center text-center">


                    <div className="flex items-center gap-2 bg-[#D9F8E2] text-[#071B0A]              
                                      px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Sparkles className="w-4 h-4" />
                        Let's Create Something
                    </div>


                    <h2 className=" max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                                    font-bold leading-tight text-white">
                        Have an idea?
                        <br />
                        <span className="text-[#70C900]">
                            Let's make it happen.
                        </span>
                    </h2>

                    <p className="max-w-2xl mt-5 text-sm sm:text-base md:text-lg
                                  leading-relaxed text-gray-300">
                        From learning new skills to building innovative solutions,
                        we're here to turn possibilities into reality.
                    </p>

                    <Link to="#contact"
                        className="group mt-8 inline-flex items-center gap-2 bg-[#70C900]
                                   hover:bg-transparent hover:text-[#70C900] hover:border 
                                   hover-border-[#70C900] px-6 sm:px-8 py-3 sm:py-4 
                                   rounded-full font-bold transition-all duration-300 
                                   hover:-translate-y-1 ">
                        Get in Touch
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300
                                                 group-hover:translate-x-1 group-hover:-translate-y-1"/>
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;