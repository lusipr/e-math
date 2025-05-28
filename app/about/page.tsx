import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 py-16 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-3xl w-full">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-4 text-center">
          Tentang E-Math Education
        </h2>
        <p className="text-gray-700 mb-6 text-center text-lg">
          E-Math Education adalah platform pembelajaran matematika interaktif yang bertujuan membantu siswa memahami konsep matematika dengan mudah, menyenangkan, dan aplikatif.
        </p>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-6">
          <img
            src="https://img.freepik.com/free-vector/mathematics-concept-illustration_114360-729.jpg?w=400"
            alt="About E-Math"
            className="w-60 h-60 object-cover rounded-xl shadow"
          />
          <ul className="text-gray-600 text-base list-disc pl-6">
            <li>Menyediakan materi dan latihan soal interaktif</li>
            <li>Video pembelajaran dari YouTube</li>
            <li>Desain modern dan mudah digunakan</li>
            <li>Dapat diakses kapan saja dan di mana saja</li>
          </ul>
        </div>
        <div className="text-center text-gray-500 text-sm">
          Dibuat dengan ❤️ oleh tim E-Math Education untuk pendidikan Indonesia yang lebih baik.
        </div>
      </div>
    </div>
  );
};

export default About;