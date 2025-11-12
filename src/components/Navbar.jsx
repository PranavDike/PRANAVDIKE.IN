// === src/components/Navbar.jsx ===
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-sm bg-white sticky top-0 z-50">
      <h1 className="text-xl font-bold">Pranav Dike</h1>
      <ul className="flex gap-6 text-sm">
        <li>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-blue-600">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-600">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
