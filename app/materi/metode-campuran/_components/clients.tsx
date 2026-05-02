"use client";
import React from "react";
import Image from "next/image";

const MetodeCampuran = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-100 to-yellow-50 p-6">
      {/* HERO */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
          Teks Metode Campuran
        </h1>
      </div>

      {/* PENGANTAR */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-center">
        <p className="text-gray-700">
          Dalam metode campuran ini bagaimana penyelesaian dari sistem persamaan
          linear dua variabel dengan metode gabungan caranya yaitu dengan
          menggunakan metode eliminasi dan substitusi. Langkah-langkah
          penyelesaian metode campuran sebagai berikut.
        </p>
      </div>

      {/* CONTOH */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <p className="mb-3 text-gray-700 font-medium">Contoh:</p>

        <div className="bg-yellow-100 p-4 rounded-xl mb-4">
          <p className="text-gray-800">
            Di sebuah kantin sekolah, seorang siswa membeli roti dan susu
            sebanyak 20 pcs. Harga 1 roti adalah <strong>Rp. 2.000</strong> dan
            harga 1 susu adalah <strong>Rp. 4.000</strong>. Total uang yang
            dibayarkan adalah <strong>Rp. 64.000</strong>. Tentukan banyak roti
            dan susu yang dibeli siswa tersebut!
          </p>
        </div>

        <p className="text-gray-700 font-bold mb-2">Jawaban:</p>

        <p className="text-gray-700 font-bold mb-2">Diketahui:</p>
        <p className="text-gray-700 mb-2">
          Ubah soal cerita menjadi model matematika dahulu dan didapatkan
          sebagai berikut:
        </p>

        <p className="text-gray-700 mb-2">
          <strong>Ditanya:</strong> Berapa jumlah roti dan jumlah susu?
        </p>

        <p className="text-gray-700 mb-2 font-bold">Dijawab:</p>

        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {/* LANGKAH 1 */}
          <li className="bg-blue-100 p-4 rounded-xl mb-4 text-gray-800 whitespace-pre-line">
            {/* Langkah 1, gunakan metode eliminasi{"\n"}
            x + 2y = 32{"\n"}
            x + y = 20{"\n"}
            ×1{"\n"}
            ×1{"\n\n"}
            y = 12 */}
            Langkah 1, gunakan metode eliminasi
            {"\n"}
            <Image
              src="/assets/images/campuran/gambar1.png"
              alt="contoh soal"
              width={800}
              height={400}
              className="mx-auto rounded-lg mb-4"
            />
          </li>

          {/* LANGKAH 2 */}
          <li className="bg-blue-100 p-4 rounded-xl mb-4 text-gray-800 whitespace-pre-line">
            Langkah 2, gunakan metode substitusi{"\n"}
            Substitusi nilai y = 12 ke salah satu persamaan{"\n"}x + y = 20
            {"\n"}x + 12 = 20{"\n"}x = 20 – 12{"\n"}x = 8
          </li>
        </ul>

        {/* HASIL */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
          <p className="text-gray-700 mb-2">
            Kesimpulan, roti berjumlah 8 pcs dan susu berjumlah 12 pcs.
            Pembuktian:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              x + y = 20
              <br />
              8 + 12 = 20
              <br />
              20 = 20 (terbukti)
            </li>
            <li>
              x + 2y = 32
              <br />
              8 + 2(12) = 32
              <br />
              8 + 24 = 32
              <br />
              32 = 32 (terbukti)
            </li>
          </ul>

          <div className="mt-4 bg-blue-100 p-4 rounded-xl">
            <p>
              Maka terbukti bahwa roti berjumlah 8 pcs dan susu berjumlah 12
              pcs.
            </p>
          </div>
        </div>
      </div>

      {/* LATIHAN */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="mb-4 text-black font-bold">
          Kerjakan soal secara mandiri dengan langkah-langkah diatas!
        </h2>

        <p className="text-gray-700">
          Suatu hari, 2 pensil dan 3 buku tulis berjumlah Rp. 11.000, sedangkan
          1 pensil dan 1 buku tulis berjumlah Rp. 5.000. Tentukan harga
          masing-masing!
        </p>
      </div>

      {/* NEXT */}
      <div className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition">
          Next
        </button>
      </div>
    </div>
  );
};

export default MetodeCampuran;
