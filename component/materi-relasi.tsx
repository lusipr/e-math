"use client";
import SPLDVGraph from "@/app/materi/_components/spldvGraph";
import Image from "next/image";
import React from "react";

const MateriRelasiFungsi: React.FC = () => (
  <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 my-8">
    <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
      Relasi dan Fungsi
    </h1>

    <section className="mb-6">
      <h2 className="text-xl font-semibold text-purple-700 mb-2">
        Apa itu Relasi?
      </h2>
      <p>
        <b>Relasi</b> adalah aturan yang menghubungkan anggota-anggota dari dua
        himpunan.
      </p>

      <div className="flex items-center justify-center my-3">
        <div className="bg-blue-100 rounded p-3">
          <span className="font-mono">A = {"{1, 2, 3}"}</span> <br />
          <span className="font-mono">B = {"{a, b}"}</span> <br />
          <span className="font-mono">
            Relasi: (1, a), (2, b), (3, a)
          </span>
        </div>
      </div>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold text-purple-700 mb-2">
        Apa itu Fungsi?
      </h2>
      <p>
        <b>Fungsi</b> adalah relasi khusus yang memasangkan setiap anggota
        domain ke tepat satu anggota kodomain.
      </p>

      <div className="flex items-center justify-center my-3">
        <div className="bg-green-100 rounded p-3">
          <span className="font-mono">f(x) = x + 2</span> <br />
          <span className="font-mono">Domain: {"{1, 2, 3}"}</span> <br />
          <span className="font-mono">
            f(1)=3, f(2)=4, f(3)=5
          </span>
        </div>
      </div>

      <Image
        width={400}
        height={300}
        src="/assets/images/gambar-relasi-fungsi.jpg"
        alt="Ilustrasi fungsi"
        className="mx-auto my-2 rounded shadow"
      />
    </section>

    {/* 🔥 INTERAKTIF SPLDV */}
    <section className="mb-6">
      <h2 className="text-xl font-semibold text-purple-700 mb-2">
        Grafik Interaktif SPLDV
      </h2>
      <p className="mb-4 text-slate-700">
        Masukkan persamaan garis, lalu lihat titik potongnya secara langsung.
      </p>

      <SPLDVGraph />
    </section>

    <section>
      <h2 className="text-xl font-semibold text-purple-700 mb-2">
        Contoh Soal
      </h2>
      <ol className="list-decimal ml-6">
        <li>
          Tentukan apakah relasi berikut merupakan fungsi:
          <span className="font-mono">
            {" {(1, a), (2, b), (3, a)}"}
          </span>
        </li>

        <li>
          Jika <span className="font-mono">f(x) = 2x + 1</span>, tentukan
          hasilnya untuk domain {"{1,2,3}"}.
        </li>
      </ol>
    </section>
  </div>
);

export default MateriRelasiFungsi;