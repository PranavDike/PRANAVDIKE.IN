// === src/components/Projects.jsx ===
export default function Projects() {
  const projects = [
    {
      name: "Family Social Media App",
      desc: "A React + Express app for private family networking with chats, posts, and a dynamic family tree.",
      link: "#",
    },
    {
      name: "Blackjack Game",
      desc: "A fun blackjack game built in C# Windows Forms.",
      link: "#",
    },
    {
      name: "Display Control App",
      desc: "A .NET app to change resolution and scaling with one click.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gray-50 text-center">
      <h3 className="text-2xl font-semibold mb-8">Projects</h3>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.name}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            <h4 className="font-semibold text-lg mb-2">{p.name}</h4>
            <p className="text-gray-600 mb-4">{p.desc}</p>
            <a href={p.link} className="text-blue-600 hover:underline text-sm">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
