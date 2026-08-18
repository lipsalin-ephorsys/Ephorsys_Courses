import { FaGraduationCap } from "react-icons/fa6";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { SiCodementor } from "react-icons/si";
import { BsGraphUpArrow } from "react-icons/bs";

const WhyEphorsys = () => {
    return (
        <section className="bg-white px-6 py-16 md:px-12 lg:px-16">
            <div className="text-center">

                <h1 className="text-3xl font-bold text-[#020716] md:text-4xl">
                    Why Choose Ephorsys ?
                </h1>

                <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-[#70C900]" />
            </div>

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-8 
                            py-12 lg:grid-cols-2">
                <div className="group flex min-h-45 w-full items-center gap-6 rounded-3xl 
                                border border-slate-300 border-l-[6px] border-l-[#70C900] 
                                bg-white px-8 py-7 shadow-sm transition-all duration-300
                                 hover:translate-y-1 hover:shadow-lg">

                    <div className="flex h-20 w-20 shrink-0 items-center justify-center
                                    rounded-full bg-[#70C900] text-3xl">
                        <FaGraduationCap/>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#020716] md:text-2xl">
                            Industry-Ready Training
                        </h2>

                        <p className="mt-3 leading-7 text-slate-600">
                            Learn modern MERN stack technologies through
                            practical training, real-world examples, and
                            hands-on development experience.
                        </p>
                    </div>
                </div>

                <div className="group flex min-h-45 w-full items-center gap-6 rounded-3xl
                               border border-slate-300 border-l-[6px] border-l-[#70C900]
                             bg-white px-8 py-7 shadow-sm transition-all duration-300 
                             hover:translate-y-1 hover:shadow-lg">

                    <div className="flex h-20 w-20 shrink-0 items-center justify-center 
                                  rounded-full bg-[#70C900] text-3xl">
                        <LiaLaptopCodeSolid/>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#020716] md:text-2xl">
                            Hands-On Projects
                        </h2>

                        <p className="mt-3 leading-7 text-slate-600">
                            Build practical full-stack applications from
                            scratch and gain the confidence to work on
                            real-world development projects.
                        </p>
                    </div>

                </div>


                <div className="group flex min-h-45 w-full items-center gap-6 rounded-3xl 
                                border border-slate-300 border-l-[6px] border-l-[#70C900]
                                 bg-white px-8 py-7 shadow-sm transition-all duration-300 
                                 hover:translate-y-1 hover:shadow-lg">

                    <div className="flex h-20 w-20 shrink-0 items-center justify-center
                                     rounded-full bg-[#70C900] text-3xl">
                        <SiCodementor/>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#020716] md:text-2xl">
                            Expert Guidance
                        </h2>

                        <p className="mt-3 leading-7 text-slate-600">
                            Get guidance throughout your learning journey,
                            from understanding programming concepts to
                            developing and deploying complete applications.
                        </p>
                    </div>

                </div>


                <div className="group flex min-h-45 w-full items-center gap-6 rounded-3xl 
                                border border-slate-300 border-l-[6px] border-l-[#70C900]
                                bg-white px-8 py-7 shadow-sm transition-all duration-300 
                                hover:translate-y-1 hover:shadow-lg">

                    <div className="flex h-20 w-20 shrink-0 items-center justify-center
                                     rounded-full bg-[#70C900] text-3xl">
                        <BsGraphUpArrow/>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#020716] md:text-2xl">
                            Career-Focused Learning
                        </h2>

                        <p className="mt-3 leading-7 text-slate-600">
                            Develop job-ready skills, create a strong project
                            portfolio, and prepare yourself for entry-level
                            full-stack development opportunities.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default WhyEphorsys;