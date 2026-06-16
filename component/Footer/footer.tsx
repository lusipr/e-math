export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-400 text-white py-6 shadow-inner">
      <div className="container mx-auto flex items-center justify-center px-6 text-center">
        <div className="text-lg font-semibold">
          © {new Date().getFullYear()} E-Math Education
        </div>
      </div>
    </footer>
  );
}
