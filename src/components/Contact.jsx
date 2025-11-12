// === src/components/Contact.jsx ===
export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 text-center">
      <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
      <p className="text-gray-700 mb-6">
        Interested in working together? Let's connect!
      </p>
      <a
        href="mailto:pranavdike@example.com"
        className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Say Hello
      </a>
    </section>
  );
}
