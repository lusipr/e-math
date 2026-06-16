import Image from "next/image";
import React from "react";

const Client = () => {
  const profileItems = [
    { label: "Nama", value: "Oktavia Furi Rama Dani" },
    { label: "NIM", value: "2202110008" },
    { label: "Program Studi", value: "Pendidikan Matematika" },
    { label: "Universitas", value: "Universitas PGRI Madiun" },
  ];

  return (
    <section className="min-h-[95vh] bg-linear-to-br from-sky-100 via-white to-pink-100 px-5 py-12">
      <div className="mx-auto flex min-h-[75vh] w-full max-w-6xl items-center">
        <div className="grid w-full gap-8 rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-2xl shadow-blue-200/50 backdrop-blur md:grid-cols-[0.9fr_1.1fr] md:p-8 lg:p-10">
          <div className="flex flex-col items-center justify-center rounded-3xl bg-linear-to-br from-blue-500 via-purple-500 to-pink-400 p-6 text-white shadow-xl">
            <div className="mb-5 inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-bold">
              Profil Pengembang
            </div>

            <div className="relative aspect-3/4 w-full max-w-75 overflow-hidden rounded-[28px] border-8 border-white/80 bg-white shadow-2xl sm:max-w-85 lg:max-w-95">
              <Image
                src="/assets/images/profile/furi1.jpeg"
                alt="Foto Oktavia Furi Rama Dani"
                fill
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 380px"
                className="object-cover object-top"
                priority
              />
            </div>

            <h1 className="mt-6 text-center text-3xl font-black leading-tight md:text-4xl">
              Oktavia Furi Rama Dani
            </h1>
            <p className="mt-2 text-center text-sm font-semibold text-white/85 md:text-base">
              Pengembang Website E-Math
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <p className="mb-3 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                Media Pembelajaran SPLDV Kelas 8
              </p>
              <h2 className="text-3xl font-black leading-tight text-gray-900 md:text-5xl">
                Website E-Math
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                Website E-Math dikembangkan sebagai media pembelajaran
                interaktif berbasis digital untuk mendukung pemahaman siswa
                kelas 8 SMP pada materi Sistem Persamaan Linear Dua Variabel
                (SPLDV).
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {profileItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-blue-100 bg-white p-4 shadow-md shadow-blue-100/70"
                >
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-500">
                    {item.label}
                  </p>
                  <p className="mt-1 text-base font-bold leading-snug text-gray-800">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border-l-8 border-pink-400 bg-pink-50 p-5 shadow-md shadow-pink-100/80">
              <h3 className="mb-2 text-xl font-black text-gray-900">
                Tentang Pengembangan
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                Pengembangan ini merupakan bagian dari penelitian skripsi yang
                bertujuan menghadirkan alternatif media pembelajaran yang lebih
                visual dan interaktif, sehingga diharapkan dapat meningkatkan
                minat dan pemahaman siswa dalam belajar matematika di kelas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
