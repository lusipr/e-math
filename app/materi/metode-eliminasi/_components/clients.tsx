"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const MetodeEliminasi = () => {
  return (
    <div className="min-h-screen bg-[url('/assets/images/home/home2.png')] bg-cover bg-center bg-no-repeat p-6">
      {/* HERO */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
          Metode Eliminasi
        </h1>
      </div>

      {/* PENGANTAR */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 text-center">
        <p className="text-gray-700">
          Metode eliminasi adalah suatu teknik untuk menyelesaikan sistem
          persamaan linear dengan dua variabel, di mana salah satu variabel
          dihilangkan dengan menjumlahkan atau mengurangkan kedua persamaan.
          Langkah-langkah penyelesaian SPLDV dengan metode eliminasi sebagai
          berikut.
        </p>
      </div>

      {/* CONTOH */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <p className="mb-3 text-gray-700 font-medium">Contoh:</p>
        <Image
          src="/assets/images/eliminasi/gambar1.png"
          alt="contoh soal"
          width={800}
          height={400}
          className="mx-auto rounded-lg mb-4"
        />
        <div className="bg-yellow-100 p-4 rounded-xl mb-4">
          <p className="text-gray-800">
            Di sebuah tempat parkir, terdapat 25 kendaraan yang terdiri dari
            <strong> sepeda motor (roda 2)</strong> dan{" "}
            <strong> mobil (roda 4)</strong>. Setelah dihitung, jumlah total
            roda seluruh kendaraan tersebut adalah 80 buah. Berapakah jumlah
            mobil dan jumlah sepeda motor di tempat parkir tersebut?
          </p>
        </div>

        <p className="text-gray-700 font-bold mb-2">Jawaban:</p>
        <p className="text-gray-700 font-bold mb-2">Diketahui:</p>
        <p className="text-gray-700 mb-2">
          Ubah soal cerita menjadi model matematika dahulu dan didapatkan
          sebagai berikut:
        </p>
        <Image
          src="/assets/images/eliminasi/gambar2.png"
          alt="contoh soal"
          width={800}
          height={400}
          className="mx-auto rounded-lg mb-4"
        />
        <p className="text-gray-700 mb-2">
          <strong>Ditanya: </strong> Berapa jumlah mobil dan jumlah sepeda motor
          di tempat parkir tersebut?
        </p>

        <p className="text-gray-700 mb-2 font-bold">Dijawab:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {/* LANGKAH 1 */}
          <li className="bg-blue-100 p-4 rounded-xl mb-4 text-gray-800 whitespace-pre-line">
            {" "}
            Eliminasi salah satu variabel (misalnya variabel x), samakan
            koefisien x dengan mengalikan persamaan (1) dengan 2.
            <Image
              src="/assets/images/eliminasi/eliminasi3.png"
              alt="eliminasi langkah 1"
              width={400}
              height={200}
              className="mx-auto rounded-lg mb-4"
            />
          </li>
          {/* LANGKAH 2 */}
          <li className="bg-blue-100 p-4 rounded-xl mb-4 text-gray-800 whitespace-pre-line">
            Langkah 2, eliminasi variabel y, samakan koefisien y dengan
            mengalikan persamaan (2) dengan 1.
            <Image
              src="/assets/images/eliminasi/eliminasi4.png"
              alt="eliminasi langkah 1"
              width={400}
              height={200}
              className="mx-auto rounded-lg mb-4"
            />
          </li>
        </ul>

        {/* HASIL */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-4">
          <p className="text-gray-700 mb-2">
            Jadi, solusi dari persamaan diatas adalah (10,15)
          </p>

          <p className="text-gray-700 mb-2">
            Kesimpulan, jumlah motor (x) adalah 10 dan jumlah mobil (y)adalah
            15. Kita buktikan:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li className="flex items-start gap-3">
              <div>
                x + y = 25
                <br />
                10 + 15 = 25
                <br />
                25 = 25 (terbukti)
              </div>
            </li>
            <li className="flex items-start gap-3">
              2x + 4y = 80
              <br />
              2(10) + 4(15) = 80
              <br />
              20 + 60 = 80 (terbukti)
            </li>
          </ul>

          <div className="mt-4 bg-blue-100 p-4 rounded-xl">
            <p>
              Maka, benar jika jumlah motor yaitu 10 dan jumlah mobil yaitu 15.
            </p>
          </div>
        </div>
      </div>

      {/* LATIHAN */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border-4 border-blue-100">
        <h2 className="mb-3 text-xl text-blue-700 font-bold text-center">
          Kerjakan soal secara mandiri dengan langkah-langkah diatas!
        </h2>

        <p className="text-gray-700 text-center mb-5">
          Seorang siswa lupa mencatat rincian barang yang dibelinya. Ia hanya
          mengingat informasi berikut:
        </p>

        <div className="bg-blue-50 rounded-2xl p-5 mb-5">
          <ul className="space-y-3 text-gray-800">
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                1
              </span>
              <span>
                Total makanan yang dibeli adalah <strong>10 item</strong>, yang
                terdiri dari roti dan susu.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                2
              </span>
              <span>
                Harga <strong>1 buah roti Rp2.000,00</strong> dan harga{" "}
                <strong>1 kotak susu Rp3.000,00</strong>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                3
              </span>
              <span>
                Total uang yang dibayarkan adalah{" "}
                <strong>Rp24.000,00</strong>.
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-yellow-100 p-5 text-center shadow-inner">
          <p className="mb-4 font-semibold text-gray-800">
            Tentukan banyaknya roti dan susu yang dibeli oleh siswa tersebut!
          </p>

          <Link
            href="https://petualangan-spldvku.my.canva.site/aplikasi-tanpa-judul"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-blue-600 px-7 py-3 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-blue-700"
          >
            Buka Kalkulator Eliminasi
          </Link>
        </div>
      </div>

      {/* NEXT */}
      <div className="flex justify-center gap-4 mt-6">
        <Link
          href={"/materi/metode-subtitusi"}
          className="bg-gray-500 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition"
        >
          Prev
        </Link>

        <Link
          href={"/materi/metode-campuran"}
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default MetodeEliminasi;
