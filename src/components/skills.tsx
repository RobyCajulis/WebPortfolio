import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiWordpress,
  SiMysql,
  SiPython,
  SiKotlin,
  SiSupabase,
  SiFirebase,
  SiFigma,
  SiAndroidstudio,
  SiGit,
} from "react-icons/si";
import { FaJava, FaCss3Alt } from "react-icons/fa";
import { TbApi, TbServer2, TbBrandVscode } from "react-icons/tb";

function Skills() {
  const categories = [
    {
      name: "Frontend",
      skills: ["React.js", "JavaScript", "HTML5 / CSS3", "WordPress", "Tailwind CSS", "Typescript"],
    },
    {
      name: "Backend & Database",
      skills: ["MySQL", "Java", "Python", "Kotlin", "REST APIs", "Supabase", "Firebase"],
    },
    {
      name: "Tools & Workflow",
      skills: ["Figma", "XAMPP", "VS Code", "Android Studio", "Git"],
    },
  ];

  // Each skill's real logo + its official brand color.
  const tiles = [
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Typescript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "WordPress", icon: SiWordpress, color: "#21759B" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Java", icon: FaJava, color: "#f89820" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
    { name: "REST APIs", icon: TbApi, color: "#6d8bff" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "XAMPP", icon: TbServer2, color: "#FB7A24" },
    { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
    { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
    { name: "Git", icon: SiGit, color: "#F05032" },
  ];

  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-30 md:px-40 md:py-5">
      <div className="items-start max-w-7xl md:ml-40">

        {/* Skills */}
        <div className="mt-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-10">
            Skills
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6 transition-colors hover:border-white/20"
              >
                <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  {cat.name}
                </h4>
                <p className="text-gray-500 text-xs font-bold mb-4">
                  {cat.skills.length} skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-gray-300 transition-colors hover:border-blue-500 hover:text-blue-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills — icon tile grid */}
        <div className="mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tiles.map((tile) => {
              const IconComponent = tile.icon;
              return (
                <div
                  key={tile.name}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center transition-all hover:border-blue-500 hover:-translate-y-1"
                >
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 font-bold">
                    <IconComponent style={{ color: tile.color }} className="text-2xl" />
                  </div>
                  <div className="text-sm font-medium text-white">
                    {tile.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;