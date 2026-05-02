"use client";
import React from "react";

const TpCpPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
      style={{
        backgroundImage: "url('/assets/images/tpcp/bg-tp-cp.png')",
      }}
    >
      <div className="w-full max-w-3xl space-y-6">

        {/* CP CARD */}
        <div className="bg-[#e0f6ff] rounded-md shadow-[0_6px_0_#5b7ea6] overflow-hidden">
          <div className="bg-[#9fc3e6] text-center py-3 font-bold text-[#2b4c7e] text-lg">
            CP (Capaian Pembelajaran)
          </div>

          <div className="h-1 bg-yellow-400"></div>

          <div className="p-4 text-center text-[#2b4c7e] text-sm">
            Peserta didik dapat menyelesaikan sistem persamaan linear dua
            variabel melalui beberapa cara untuk penyelesaian masalah.
          </div>
        </div>

        {/* TP CARD */}
        <div className="bg-[#e0f6ff] rounded-md shadow-[0_6px_0_#5b7ea6] overflow-hidden">
          <div className="bg-[#9fc3e6] text-center py-3 font-bold text-[#2b4c7e] text-lg">
            TP (Tujuan Pembelajaran)
          </div>

          <div className="h-1 bg-yellow-400"></div>

          <div className="p-4 text-[#2b4c7e] text-sm">
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                Peserta didik mampu memahami konsep dasar Sistem Persamaan Linear 
                Dua Variabel (SPLDV) yang meliputi bentuk umum, ciri-ciri, serta 
                metode penyelesaiannya melalui website interaktif.
              </li>
              <li>
                Peserta didik mampu menganalisis dan menyelesaikan permasalahan 
                sehari-hari yang berkaitan dengan SPLDV dengan tepat melalui 
                bantuan website interaktif.
              </li>
            </ol>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TpCpPage;