function Education() {
  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-30">
      <div className="items-start max-w-7xl md:ml-30 md:ps-50">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              About Me
            </h1>

            <p className="text-gray-400 text-base md:text-lg mt-6 text-justify leading-8">
              I'm Rossbrent Cajulis, 21 years old, from Malolos, Bulacan.
              I graduated with a Bachelor of Science in Information Technology
              from La Consolacion University Philippines.

              I am a Full-Stack Developer specializing in end-to-end web
              application development. I am driven by a passion for continuous
              learning and enjoy solving technical challenges across both the
              frontend and backend.

              I am currently seeking opportunities where I can contribute to
              impactful projects while continuing to grow professionally.
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-14">
              My Goals
            </h2>

            <p className="text-gray-400 text-base md:text-lg mt-6 text-justify leading-8">
              To work with a team that builds web applications capable of making
              a meaningful impact on businesses, communities, and organizations.
            </p>
          </div>

         
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Education
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mt-6">
              La Consolacion University Philippines
            </h2>

            <p className="text-gray-400 text-lg mt-2">
              Bachelor of Science in Information Technology
            </p>

            <p className="text-gray-500 font-bold mt-2">
              Cum Laude
            </p>

            <p className="text-gray-500 font-bold mt-2">
              2022 – 2026
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;