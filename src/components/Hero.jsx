// === src/components/Hero.jsx ===
export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
      <h2 className="text-4xl font-bold mb-3">Hey, I'm Pranav 👋</h2>
      <p className="text-lg text-gray-600 max-w-xl">
        A passionate full-stack developer skilled in .NET and JavaScript,
        building modern, elegant, and high-performance applications.
      </p>
      <a
        href="#projects"
        className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
}
