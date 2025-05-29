import React from "react";

const MainComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 font-sans">
      <div className="bg-white rounded-3xl shadow-2xl px-12 py-14 flex flex-col md:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="max-w-md">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
            MATH EDUCATION
          </h1>
          <p className="text-black-700 mb-8">
            Belajar matematika jadi lebih mudah dan menyenangkan! Temukan
            materi, latihan soal, dan video pembelajaran interaktif untuk semua
            jenjang.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold px-8 py-3 rounded-full shadow hover:scale-105 transition">
            Mulai Belajar
          </button>
        </div>
        {/* Right Section: Illustration */}
        <div>
          {/* Simple SVG illustration */}
          <svg width="320" height="220" viewBox="0 0 320 220" fill="none">
            <ellipse cx="160" cy="200" rx="120" ry="20" fill="#e3f2fd" />
            {/* Teacher */}
            <rect x="60" y="80" width="32" height="70" rx="12" fill="#4f8cff" />
            <circle cx="76" cy="70" r="16" fill="#ffb300" />
            {/* Student 1 */}
            <rect
              x="120"
              y="110"
              width="28"
              height="50"
              rx="10"
              fill="#38b6ff"
            />
            <circle cx="134" cy="104" r="12" fill="#ff7043" />
            {/* Student 2 */}
            <rect
              x="200"
              y="120"
              width="28"
              height="40"
              rx="10"
              fill="#a6e3e9"
            />
            <circle cx="214" cy="116" r="12" fill="#ab47bc" />
            {/* Math symbols */}
            <text x="90" y="60" fontSize="18" fill="#1a237e" fontWeight="bold">
              π
            </text>
            <text x="170" y="60" fontSize="18" fill="#1a237e" fontWeight="bold">
              √
            </text>
            <text x="240" y="80" fontSize="18" fill="#1a237e" fontWeight="bold">
              Σ
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
