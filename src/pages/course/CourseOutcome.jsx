const CourseOutcome = ({ outcomes }) => {
    return (
        <div className="px-6 py-16 md:px-16 lg:px-20">
            <div className="mx-auto max-w-6xl rounded-3xl bg-[#70C900] p-6 md:p-10">

                <h1 className="text-3xl font-bold text-[#020716]">
                    Course Outcomes
                </h1>

                <p className="mt-3 text-[#020716]/80">
                    What you will be able to achieve after completing this course.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">

                    {outcomes.map((text, index) => (
                        <div
                            key={index}
                            className="flex gap-4 rounded-2xl bg-white p-5 
                                        transition duration-300 hover:translate-y-1 hover:shadow-lg shadow-sm">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#020716] font-bold text-[#70C900]">
                                {index + 1}
                            </span>

                            <p className="leading-7 text-[#020716]">
                                {text}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default CourseOutcome;