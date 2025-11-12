// === src/components/Skills.jsx ===
export default function Skills() {
  const skills = [
    "C#",
    ".NET",
    "React",
    "Express",
    "MongoDB",
    "SQL Server",
    "TailwindCSS",
  ];
  return (
    <section id="skills" className="py-16 bg-white px-6 text-center">
      <h3 className="text-2xl font-semibold mb-8">Skills & Technologies</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gray-100 rounded-lg shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
