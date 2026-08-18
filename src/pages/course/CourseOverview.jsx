const CourseOverview = () => {
    return (
        <section className="px-6 py-16 md:px-16 lg:px-20 bg-white">

            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <div className="mb-4 h-1.5 w-14 rounded-full bg-[#70C900]"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#020716]">
                        Course Overview
                    </h2>
                </div>

                <div className="max-w-5xl rounded-2xl bg-slate-50 
                                border border-slate-200 p-6 md:p-8">
                    <p className="leading-8 text-[#020716]">
                        Master MongoDB, Express.js, React, and Node.js through a practical,
                        project-based learning experience. This course takes you from the
                        fundamentals of web development to building and deploying complete
                        full-stack applications.
                        <br />
                        <br />
                        You’ll learn how to create responsive and interactive frontend interfaces
                        with React, build scalable backend APIs using Node.js and Express, and
                        manage application data using MongoDB. Along the way, you’ll work with
                        authentication, REST APIs, database integration, Git/GitHub, and cloud
                        deployment.
                        <br />
                        <br />
                        Through hands-on projects, you’ll learn how to connect frontend and
                        backend systems, handle real-world application requirements, structure
                        your code efficiently, and troubleshoot common development challenges.
                        You’ll also gain experience building applications from scratch and
                        deploying them to the cloud.
                    </p>
                </div>

                <div className="mt-10">
                    <h2 className="mb-6 text-2xl font-bold text-[#020716]">
                        Details :
                    </h2>

                    <ul className="grid gap-4 md:grid-cols-2">
                        <li className="rounded-xl border border-slate-200 bg-white p-5 
                                       shadow-sm transition hover:-translate-y-1 
                                       hover:border-[#70C900] hover:shadow-md">
                            <span className="font-semibold text-[#70C900]">
                                Frontend Development: </span>
                            HTML, CSS, JavaScript, React, React Hooks, and responsive UI
                        </li>

                        <li className="rounded-xl border border-slate-200 bg-white p-5 
                                    shadow-sm transition hover:-translate-y-1
                                     hover:border-[#70C900] hover:shadow-md">
                            <span className="font-semibold text-[#70C900]">
                                Backend Development: </span>
                            Node.js, Express.js, RESTful APIs, and server-side development
                        </li>
                        <li className="rounded-xl border border-slate-200 bg-white p-5 
                                       shadow-sm transition hover:-translate-y-1
                                        hover:border-[#70C900] hover:shadow-md">
                            <span className="font-semibold text-[#70C900]">
                                Database: </span>
                            MongoDB, Mongoose, CRUD operations, and database design
                        </li>

                        <li className="rounded-xl border border-slate-200 bg-white p-5 
                                       shadow-sm transition hover:-translate-y-1
                                        hover:border-[#70C900] hover:shadow-md">
                            <span className="font-semibold text-[#70C900]">
                                Authentication: </span>
                            Login, registration, JWT authentication, authorization,
                             and protected routes
                        </li>

                        <li className="rounded-xl border border-slate-200 bg-white p-5 
                                      shadow-sm transition hover:-translate-y-1
                                       hover:border-[#70C900] hover:shadow-md">
                            <span className="font-semibold text-[#70C900]">
                                Full-Stack Integration: </span>
                            Connect React applications with backend APIs and databases
                        </li>

                        <li className="rounded-xl border border-slate-200 bg-white p-5 
                                       shadow-sm transition hover:-translate-y-1
                                        hover:border-[#70C900] hover:shadow-md">
                            <span className="font-semibold text-[#70C900]">
                                Development Tools: </span>
                            Git, GitHub, npm, VS Code, and modern development workflows
                        </li>

                        <li className="rounded-xl border border-slate-200 bg-white p-5 
                                       shadow-sm transition hover:-translate-y-1
                                        hover:border-[#70C900] hover:shadow-md">
                            <span className="font-semibold text-[#70C900]">
                                Deployment: </span>
                            Deploy full-stack applications to cloud platforms
                        </li>

                        <li className="rounded-xl border border-slate-200 bg-white p-5
                                       shadow-sm transition hover:-translate-y-1 
                                        hover:border-[#70C900] hover:shadow-md">
                            <span className="font-semibold text-[#70C900]">
                                Real-World Projects: </span>
                            Build practical applications that demonstrate your full-stack skills
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default CourseOverview;