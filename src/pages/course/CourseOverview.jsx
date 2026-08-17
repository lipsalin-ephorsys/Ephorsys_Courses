const CourseOverview = () => {
    return (
        <section className="px-6 py-12 md:px-16">

            <h2 className="text-3xl font-bold text-[#020716]">
                Course Overview
            </h2>

            <p className="mt-4 max-w-4xl  leading-7">
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

            <ul className="mt-6 space-y-3 text-[#020716]">
                <h2 className="font-bold text-xl text-[#020716]">Details : </h2>
                <li>
                    <span className="font-semibold text-[#020716]">Frontend Development: </span>
                    HTML, CSS, JavaScript, React, React Hooks, and responsive UI
                </li>

                <li>
                    <span className="font-semibold text-[#020716]">Backend Development: </span>
                    Node.js, Express.js, RESTful APIs, and server-side development
                </li>

                <li>
                    <span className="font-semibold text-[#020716]">Database: </span>
                    MongoDB, Mongoose, CRUD operations, and database design
                </li>

                <li>
                    <span className="font-semibold text-[#020716]">Authentication: </span>
                    Login, registration, JWT authentication, authorization, and protected routes
                </li>

                <li>
                    <span className="font-semibold text-[#020716]">Full-Stack Integration: </span>
                    Connect React applications with backend APIs and databases
                </li>

                <li>
                    <span className="font-semibold text-[#020716]">Development Tools: </span>
                    Git, GitHub, npm, VS Code, and modern development workflows
                </li>

                <li>
                    <span className="font-semibold text-[#020716]">Deployment: </span>
                    Deploy full-stack applications to cloud platforms
                </li>

                <li>
                    <span className="font-semibold text-[#020716]">Real-World Projects: </span>
                    Build practical applications that demonstrate your full-stack skills
                </li>
            </ul>

        </section>
    );
};

export default CourseOverview;