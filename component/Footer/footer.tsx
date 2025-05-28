export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 text-white py-6 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="text-lg font-semibold mb-2 md:mb-0">
          © {new Date().getFullYear()} E-Math Education
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="hover:text-yellow-300 transition-colors"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            href="#"
            className="hover:text-yellow-300 transition-colors"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <a
            href="#"
            className="hover:text-yellow-300 transition-colors"
            aria-label="Contact"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
