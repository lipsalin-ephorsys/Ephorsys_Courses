const CourseOutcome = () => {
    return (
        <section className="px-6 py-16 md:px-16 lg:px-20">
            <div className="mx-auto max-w-6xl rounded-3xl bg-[#70C900] p-6 md:p-10 lg:p-12">

                <div className="mb-8">
                    <div className="mb-4 h-1.5 w-14 rounded-full bg-[#020716]"></div>

                    <h1 className="text-3xl font-bold text-[#020716] md:text-4xl">
                        Course Outcomes
                    </h1>

                    <p className="mt-3 text-[#020716]/80">
                        What you will be able to achieve after completing this course.
                    </p>
                </div>

                <ul className="grid gap-4 md:grid-cols-2">
                    <li className="group flex gap-4 rounded-2xl bg-white p-5 shadow-sm 
                           transition duration-300 hover:translate-y-1 hover:shadow-lg">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center
                                     rounded-full bg-[#020716] font-bold text-[#70C900]">
                            01
                        </span>
                        <span className="leading-7 text-[#020716]">
                            Build responsive and interactive web applications using React.
                        </span>
                    </li>

                    <li className="group flex gap-4 rounded-2xl bg-white p-5 shadow-sm 
                                  transition duration-300 hover:translate-y-1 hover:shadow-lg">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center
                                    rounded-full bg-[#020716] font-bold text-[#70C900]">
                            02
                        </span>
                        <span className="leading-7 text-[#020716]">
                            Develop scalable REST APIs using Node.js and Express.js.
                        </span>
                    </li>

                    <li className="group flex gap-4 rounded-2xl bg-white p-5 shadow-sm 
                               transition duration-300 hover:translate-y-1 hover:shadow-lg">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center 
                                   rounded-full bg-[#020716] font-bold text-[#70C900]">
                            03
                        </span>
                        <span className="leading-7 text-[#020716]">
                            Design and manage databases using MongoDB and Mongoose.
                        </span>
                    </li>

                    <li className="group flex gap-4 rounded-2xl bg-white p-5 shadow-sm 
                                  transition duration-300 hover:translate-y-1 hover:shadow-lg">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center
                                 rounded-full bg-[#020716] font-bold text-[#70C900]">
                            04
                        </span>
                        <span className="leading-7 text-[#020716]">
                            Implement user authentication and authorization using JWT.
                        </span>
                    </li>

                    <li className="group flex gap-4 rounded-2xl bg-white p-5 shadow-sm 
                                  transition duration-300 hover:translate-y-1 hover:shadow-lg">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center 
                                        rounded-full bg-[#020716] font-bold text-[#70C900]">
                            05
                        </span>
                        <span className="leading-7 text-[#020716]">
                            Connect frontend applications with backend APIs and databases.
                        </span>
                    </li>

                    <li className="group flex gap-4 rounded-2xl bg-white p-5 shadow-sm 
                                 transition duration-300 hover:translate-y-1 hover:shadow-lg">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center 
                                      rounded-full bg-[#020716] font-bold text-[#70C900]">
                            06
                        </span>
                        <span className="leading-7 text-[#020716]">
                            Build complete full-stack applications from scratch.
                        </span>
                    </li>

                    <li className="group flex gap-4 rounded-2xl bg-white p-5 shadow-sm 
                                  transition duration-300 hover:translate-y-1 hover:shadow-lg">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center 
                                        rounded-full bg-[#020716] font-bold text-[#70C900]">
                            07
                        </span>
                        <span className="leading-7 text-[#020716]">
                            Use Git and GitHub for version control and collaborative development.
                        </span>
                    </li>

                    <li className="group flex gap-4 rounded-2xl bg-white p-5 shadow-sm 
                                    transition duration-300 hover:translate-y-1 hover:shadow-lg">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center 
                                           rounded-full bg-[#020716] font-bold text-[#70C900]">
                            08
                        </span>
                        <span className="leading-7 text-[#020716]">
                            Deploy full-stack applications to cloud platforms.
                        </span>
                    </li>

                    <li className="group flex gap-4 rounded-2xl bg-white p-5 shadow-sm 
                                  transition duration-300 hover:translate-y-1 hover:shadow-lg">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center 
                                        rounded-full bg-[#020716] font-bold text-[#70C900]">
                            09
                        </span>
                        <span className="leading-7 text-[#020716]">
                            Debug applications and solve common real-world development problems.
                        </span>
                    </li>

                    <li className="group flex gap-4 rounded-2xl bg-white p-5 shadow-sm 
                                   transition duration-300 hover:translate-y-1 hover:shadow-lg">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center
                                        rounded-full bg-[#020716] font-bold text-[#70C900]">
                            10
                        </span>
                        <span className="leading-7 text-[#020716]">
                            Build practical projects for a professional portfolio.
                        </span>
                    </li>

                    <li className="group flex gap-4 rounded-2xl bg-white p-5 shadow-sm transition
                                   duration-300 hover:translate-y-1 hover:shadow-lg md:col-span-2">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center 
                                         rounded-full bg-[#020716] font-bold text-[#70C900]">
                            11
                        </span>
                        <span className="leading-7 text-[#020716]">
                            Gain the skills and confidence needed for entry-level full-stack
                             development roles
                        </span>
                    </li>

                </ul>
            </div>
        </section>
    );
};

export default CourseOutcome;