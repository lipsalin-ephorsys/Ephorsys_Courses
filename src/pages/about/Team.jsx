const teamMembers = [
  {
    image: "https://images.cnippet.dev/image/upload/v1770400411/a1.jpg",
    name: "Patrick Stewart",
    role: "CEO - Founder",
  },
  {
    image: "https://images.cnippet.dev/image/upload/v1770400411/a2.jpg",
    name: "Alena Rosser",
    role: "Director of Content",
  },
  {
    image: "https://images.cnippet.dev/image/upload/v1770400411/a3.jpg",
    name: "Fletch Skinner",
    role: "Tech Manager",
  },
  {
    image: "https://images.cnippet.dev/image/upload/v1770400411/a4.jpg",
    name: "Marc Spector",
    role: "Director of Content",
  },
  {
    image: "https://images.cnippet.dev/image/upload/v1770400411/a5.jpg",
    name: "Natalia Skinner",
    role: "Cnippet Researcher",
  },
  {
    image: "https://images.cnippet.dev/image/upload/v1770400411/a6.jpg",
    name: "David Kim",
    role: "Engineering Lead",
  },
];

export const Team=()=> {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-24">
      {/* Background Decoration */}
      <svg
        className="absolute right-0 bottom-1 text-[#70C900]"
        fill="none"
        height="154"
        viewBox="0 0 460 154"
        width="460"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M-87.463 458.432C-102.118 348.092 -77.3418 238.841 -15.0744 188.274C57.4129 129.408 180.708 150.071 351.748 341.128C278.246 -374.233 633.954 380.602 548.123 42.7707"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="40"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-16 flex max-w-5xl flex-col items-center px-6 text-center">    
          {/* Title */}
          <h1 className="relative mb-4 text-3xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
            Our Team

            <svg
              className="absolute -top-2 -right-8 -z-10 w-24 text-[#70C900]"
              fill="currentColor"
              height="86"
              viewBox="0 0 108 86"
              width="108"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.8484 16.236L15 43.5793L78.2688 15L18.1218 71L93 34.1172L70.2047 65.2739"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="28"
              />
            </svg>
          </h1>

          <p className="max-w-2xl text-neutral-600">
            Meet the talented people behind our technology,
            innovation, and digital solutions.
          </p>
        </div>

        {/* Team Marquee */}
        <div className="relative w-full overflow-hidden">

          {/* Left Gradient */}
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 
                         bg-linear-to-r from-white to-transparent" />

          {/* Right Gradient */}
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32
                         bg-linear-to-lfrom-white to-transparent" />

          <div className="marquee">
            <div className="marquee-track">

              {[...teamMembers, ...teamMembers].map((member, index) => (
                <div
                  className="group flex w-64 shrink-0 flex-col"
                  key={`${member.name}-${index}`}
                >
                  <div className="relative h-92 w-full overflow-hidden rounded-2xl bg-neutral-100">

                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover grayscale transition-all 
                                 duration-300 group-hover:grayscale-0"/>

                    <div className="absolute bottom-0 w-full rounded-lg bg-gray-300/70 p-3">
                      <h3 className="font-semibold text-neutral-900">
                        {member.name}
                      </h3>

                      <p className="text-sm text-neutral-600">
                        {member.role}
                      </p>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
     

export default Team