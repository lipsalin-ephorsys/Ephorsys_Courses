const CourseOverview = ({ description, details }) => {
    return (
        <section className="bg-white px-6 py-16 md:px-16 lg:px-20">
            <div className="mx-auto max-w-6xl">

                <div className="mb-8">
                    <div className="mb-4 h-1.5 w-14 rounded-full bg-[#70C900]"></div>

                    <h2 className="text-3xl font-bold text-[#020716] md:text-4xl">
                        Course Overview
                    </h2>
                </div>

                <div className="max-w-5xl rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
                    <p className="leading-8 text-[#020716]">
                        {description}
                    </p>
                </div>

                <div className="mt-10">
                    <h2 className="mb-6 text-2xl font-bold text-[#020716]">
                        Details :
                    </h2>

                    <ul className="grid gap-4 md:grid-cols-2">
                        {details.map((detail, index) => (
                            <li
                                key={index}
                                className="
                                    rounded-xl border border-slate-200
                                    bg-white p-5 shadow-sm
                                    transition hover:-translate-y-1
                                    hover:border-[#70C900]
                                    hover:shadow-md
                                "
                            >
                                <span className="font-semibold text-[#70C900]">
                                    {detail.title}:
                                </span>{" "}
                                {detail.description}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default CourseOverview;