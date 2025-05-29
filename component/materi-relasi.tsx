"use client";
import Image from 'next/image';
import React from 'react';

const MateriRelasiFungsi: React.FC = () => (
  <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 my-8">
    <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">Relasi dan Fungsi</h1>
    <section className="mb-6">
      <h2 className="text-xl font-semibold text-purple-700 mb-2">Apa itu Relasi?</h2>
      <p>
        <b>Relasi</b> adalah aturan yang menghubungkan anggota-anggota dari dua himpunan. Misalnya, jika A dan B adalah dua himpunan, relasi dari A ke B memasangkan anggota A dengan anggota B.
      </p>
      <div className="flex items-center justify-center my-3">
        <div className="bg-blue-100 rounded p-3">
          <span className="font-mono">A = &#123;1, 2, 3&#125;</span> <br />
          <span className="font-mono">B = &#123;a, b&#125;</span> <br />
          <span className="font-mono">Relasi: (1, a), (2, b), (3, a)</span>
        </div>
      </div>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold text-purple-700 mb-2">Apa itu Fungsi?</h2>
      <p>
        <b>Fungsi</b> adalah relasi khusus yang memasangkan setiap anggota himpunan A (<i>domain</i>) dengan <b>tepat satu</b> anggota himpunan B (<i>kodomain</i>).
      </p>
      <div className="flex items-center justify-center my-3">
        <div className="bg-green-100 rounded p-3">
          <span className="font-mono">f(x) = x + 2</span> <br />
          <span className="font-mono">Domain: &#123;1, 2, 3&#125;</span> <br />
          <span className="font-mono">f(1) = 3, f(2) = 4, f(3) = 5</span>
        </div>
      </div>
      <Image width={400} height={300} src="/assets/images/gambar-relasi-fungsi.jpg" alt="Ilustrasi fungsi" className="mx-auto my-2 rounded shadow" />
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold text-purple-700 mb-2">Jenis-jenis Relasi</h2>
      <ul className="list-disc ml-6">
        <li><b>Relasi Refleksif</b>: Setiap anggota berelasi dengan dirinya sendiri.</li>
        <li><b>Relasi Simetris</b>: Jika a berelasi dengan b, maka b berelasi dengan a.</li>
        <li><b>Relasi Transitif</b>: Jika a berelasi dengan b dan b dengan c, maka a berelasi dengan c.</li>
      </ul>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold text-purple-700 mb-2">Jenis-jenis Fungsi</h2>
      <ul className="list-disc ml-6">
        <li><b>Fungsi Satu-satu (Injektif)</b>: Setiap anggota domain berpasangan dengan anggota kodomain yang berbeda.</li>
        <li><b>Fungsi Onto (Surjektif)</b>: Setiap anggota kodomain memiliki pasangan di domain.</li>
        <li><b>Fungsi Bijektif</b>: Gabungan fungsi injektif dan surjektif.</li>
      </ul>
    </section>
    <section>
      <h2 className="text-xl font-semibold text-purple-700 mb-2">Contoh Soal</h2>
      <ol className="list-decimal ml-6">
        <li>
          Tentukan apakah relasi berikut merupakan fungsi: <span className="font-mono">&#123;(1, a), (2, b), (3, a)&#125;</span>
        </li>
        <li>
          Jika <span className="font-mono">f(x) = 2x + 1</span> dan domain <span className="font-mono">&#123;1, 2, 3&#125;</span>, tentukan hasil f(x) untuk setiap x.
        </li>
        <li>
          Dari diagram panah berikut, tentukan apakah merupakan fungsi:
          <div className="flex items-center justify-center my-2">
            <Image width={400} height={300} src="https://www.storyofmathematics.com/wp-content/uploads/2022/10/function-mapping-diagram.png" alt="Diagram panah fungsi" className="rounded shadow"  />
          </div>
        </li>
      </ol>
    </section>
  </div>
);

export default MateriRelasiFungsi;