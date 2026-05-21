"use client";

import React from "react";
import { BookOpen, ExternalLink } from "lucide-react";

const references = [
  {
    title: "Buku Guru Matematika SMP/MTs Kelas VIII",
    author:
      "Abdur Rahman As'ari, Mohammad Tohir, Erik Valentino, Zainul Imron, Ibnu Taufiq",
    year: "2017",
    description:
      "Buku guru matematika Kurikulum 2013 revisi yang digunakan sebagai pedoman pembelajaran matematika SMP/MTs.",
    link:
      "https://repositori.kemendikdasmen.go.id/6962/1/buku%20guru%20matematika.pdf",
  },
  {
    title: "Perangkat Ajar SPLDV",
    author: "Kementerian Pendidikan Dasar dan Menengah",
    year: "2024",
    description:
      "Perangkat ajar materi Sistem Persamaan Linear Dua Variabel (SPLDV) sebagai pendukung pembelajaran.",
    link:
      "https://guru.kemendikdasmen.go.id/profil/kDxMWYgj9b/perangkat-ajar/BAHAN_AJAR",
  },
];

const Client = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 via-white to-indigo-100 py-12 px-5">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">

          <div className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-5">
            📚 Daftar Referensi
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Referensi Penelitian
          </h1>

          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
            Referensi berikut digunakan sebagai sumber utama dalam
            pengembangan media pembelajaran dan materi penelitian.
          </p>

        </div>

        {/* List Reference */}
        <div className="grid md:grid-cols-2 gap-8">

          {references.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="flex items-start gap-4">

                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <BookOpen className="text-blue-600 w-8 h-8" />
                </div>

                <div className="flex-1">

                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full">
                      Referensi {index + 1}
                    </span>
                  </div>

                  <h2 className="font-bold text-xl text-gray-800 mb-2">
                    {item.title}
                  </h2>

                  <p className="text-sm text-gray-500 mb-2">
                    {item.author} • {item.year}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    Lihat Referensi
                    <ExternalLink size={18} />
                  </a>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">

          <div className="bg-white p-6 rounded-2xl shadow-md max-w-3xl mx-auto">

            <h3 className="font-bold text-gray-700 mb-3">
              Catatan
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              Referensi yang digunakan berasal dari sumber resmi
              Kementerian Pendidikan Dasar dan Menengah Indonesia
              sebagai landasan materi pembelajaran matematika.
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Client;