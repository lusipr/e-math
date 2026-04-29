"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const MetodeSubstitusi = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-100 to-yellow-50 p-6">
      {/* HERO */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
          Teks Metode Substitusi
        </h1>
      </div>

      {/* PENGANTAR */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-center">
        <p className="text-gray-700">
          Metode substitusi adalah suatu teknik untuk menyelesaikan sistem
          persamaan linear dengan dua variabel, di mana salah satu variabel
          digantikan ke dalam persamaan yang lain. Langkah-langkah menyelesaikan
          SPLDV dengan metode substitusi sebagai berikut.
        </p>
      </div>

      {/* CONTOH */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <p className="mb-3 text-gray-700 font-medium">Contoh:</p>
        <Image
          src="/assets/images/subtitusi/gambar1.png"
          alt="contoh soal"
          width={800}
          height={400}
          className="mx-auto rounded-lg mb-4"
        />
        <div className="bg-yellow-100 p-4 rounded-xl mb-4">
          <p className="text-gray-800">
            Pada suatu hari, ibu dan nenek ke pasar tradisional, ibu membeli
            buah 4kg apel dan 3 kg jeruk seharga Rp. 36.000 sedangkan nenek
            membeli 2 kg apel dan 5kg jeruk seharga Rp. 32.000. Tentukan harga
            2kg apel dan 2 kg jeruk.
          </p>
        </div>

        <p className="text-gray-700 mb-2">Jawaban:</p>
        <p className="text-gray-700 mb-2">Diketahui:</p>
        <p className="text-gray-700 mb-2">
          Ubah soal cerita menjadi model matematika dahulu dan didapatkan:
        </p>
        <Image
          src="/assets/images/subtitusi/gambar2.png"
          alt="contoh soal"
          width={800}
          height={400}
          className="mx-auto rounded-lg mb-4"
        />
        <p className="text-gray-700 mb-2">
          Ditanya: Berapa harga 2kg apel dan 2 kg jeruk?
        </p>

        <p className="text-gray-700 mb-2">Dijawab:</p>

        <div className="bg-blue-100 p-4 rounded-xl mb-4 space-y-2 text-gray-800">
          <p>Nyatakan m dalam n dan cari nilai m dari salah satu persamaan</p>
          <p>Dari persamaan 2:</p>
          <p>2m + 5n = 32.000</p>
          <p>2m = 32.000 - 5n atau 2m = -5n + 32.000</p>
          <p>m = 32.000-5n2</p>
          <p>m = 16.000 – 2,5n (Persamaan 3)</p>
        </div>

        <div className="bg-blue-100 p-4 rounded-xl mb-4 space-y-2 text-gray-800">
          <p>Substitusi persamaan 3 ke dalam persamaan 1</p>
          <p>4(16.000 – 2,5n) + 3n = 36.000</p>
          <p>64.000 – 10n + 3n = 36.000</p>
          <p>64.000 – 7n = 36.000</p>
          <p>-7n = 36.000 – 64.000</p>
          <p>-7n = -28.000 (kedua ruas dibagi -7)</p>
          <p>n = 4.000 (maka 1 kg jeruk seharga Rp. 4.000)</p>
        </div>

        <div className="bg-blue-100 p-4 rounded-xl mb-4 space-y-2 text-gray-800">
          <p>Substitusi nilai n ke persamaan 3</p>
          <p>m = 16.000 – 2,5n</p>
          <p>m = 16.000 – 2,5(4.000)</p>
          <p>m = 16.000 – 10.000</p>
          <p>m = 6.000 (maka 1 kg apel seharga Rp.6000)</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
          <p className="text-gray-700 mb-2">
            Kesimpulan, harga 1kg apel seharga Rp.6000 dan 1kg jeruk seharga
            Rp.4000, kita buktikan:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>4m + 3n = 36.000</li>
            <li>4(6.000) + 3(4.000) = 36.000</li>
            <li>24.000 + 12.000 = 36.000</li>
            <li>36.000 = 36.000 (terbukti)</li>
            <li>2m + 5n = 32.000</li>
            <li>2(6.000) + 5(4.000) = 32.000</li>
            <li>12.000 + 20.000 = 32.000</li>
            <li>32.000 = 32.000 (terbukti)</li>
          </ul>

          <div className="mt-4 bg-blue-100 p-4 rounded-xl">
            <p>
              kemudian kita diminta mencari nilai dari 2m + 2n (2kg apel + 2kg
              jeruk). Maka, 2(6.000) + 2(4.000) = 12.000 + 8.000 = 20.000 (harga
              2kg apel dan 2 kg jeruk seharga Rp. 20.000)
            </p>
          </div>
        </div>
      </div>

      {/* SIMULASI */}
      <div className="bg-blue-100 p-6 rounded-2xl text-center shadow-lg mb-8">
        <p className="mb-4">Ikuti cara tersebut dalam simulasi di bawah ini!</p>

        <Link href="https://petualangan-spldv-8.my.canva.site/" target="_blank">
          <button className="bg-green-600 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition">
            Button mainkan game
          </button>
        </Link>
      </div>

      {/* LATIHAN */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h2 className="mb-4 text-black text-bold">
          Kerjakan soal ini secara mandiri dengan metode substitusi!
        </h2>

        <p className="text-gray-700">
          Di sebuah toko alat tulis, Andi membeli 3 buku tulis dan 2 pensil
          dengan harga Rp19.000. Di toko yang sama, Budi membeli 1 buku tulis
          dan 4 pensil dengan harga Rp13.000. Tentukan harga dari 2 buku tulis
          dan 3 pensil!
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

export default MetodeSubstitusi;
