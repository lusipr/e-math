"use client";

import { useState } from "react";
import GeoGebraGraph from "./geobra";
import Image from "next/image";

type Question = {
  id: number;
  question: string;
  options: string[];
  correct: string;
};

const questions: Question[] = [
  {
    id: 1,
    question: "Tentukan titik jika x = 0 maka y = … didapatkan titik (…,…) (Persamaan 1)",
    options: ["(0,8)", "(8,0)", "(0,4)", "(4,0)"],
    correct: "(0,8)",
  },
  {
    id: 2,
    question: "Tentukan titik jika y = 0 maka x = … didapatkan titik (…,…) (Persamaan 1)",
    options: ["(0,8)", "(8,0)", "(0,4)", "(4,0)"],
    correct: "(4,0)",
  },
  {
    id: 3,
    question: "Tentukan titik jika x = 0 maka y = … didapatkan titik (…,…) (Persamaan 2)",
    options: ["(0,-2)", "(2,0)", "(0,2)", "(-2,0)"],
    correct: "(0,-2)",
  },
  {
    id: 4,
    question: "Tentukan titik jika y = 0 maka x = … didapatkan titik (…,…) (Persamaan 2)",
    options: ["(0,-2)", "(2,0)", "(0,2)", "(-2,0)"],
    correct: "(2,0)",
  },
  {
    id: 5,
    question: "Berdasarkan grafik yang ditampilkan dengan bantuan geogebra diatas, berapakah titik potong kedua garis tersebut?",
    options: ["(10/3 , 4/3)", "(10/3, 8/3)", "(8/3, 4/3)", "(10/3, 2/3)"],
    correct: "(10/3 , 4/3)",
  },
];

export default function QuizSPLDV() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [correctMap, setCorrectMap] = useState<{ [key: number]: boolean }>({});

  const a1 = 1,
    b1 = 1,
    c1 = 8;
  const a2 = 1,
    b2 = -1,
    c2 = 2;
  const result = { x: 10 / 3, y: 4 / 3 };

  const handleAnswer = (qid: number, option: string) => {
    const q = questions.find((q) => q.id === qid)!;
    const isCorrect = option === q.correct;

    setAnswers((prev) => ({ ...prev, [qid]: option }));
    setCorrectMap((prev) => ({ ...prev, [qid]: isCorrect }));
  };

  const isUnlocked = (index: number) => {
    if (index === 0) return true;
    return correctMap[questions[index - 1].id];
  };

  const progress =
    (Object.values(correctMap).filter(Boolean).length / questions.length) * 100;

  const allBefore5Correct =
    correctMap[1] && correctMap[2] && correctMap[3] && correctMap[4];

  return (
    <div className="min-h-screen p-6 bg-linear-to-br from-blue-100 to-indigo-200">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* HEADER */}
        <div className="bg-white p-6 rounded-2xl shadow-xl text-center">
          <h1 className="text-3xl font-bold text-indigo-600 mb-2">
            Latihan Metode Grafik
          </h1>
          <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl mb-4">
            <p className="text-indigo-700 font-medium">
              📌 Diketahui 2 persamaan berikut
            </p>
          </div>
          <Image
            src="/assets/images/grafik/quiz1.png"
            alt="Grafik"
            width={200}
            height={100}
            className="mx-auto rounded-lg shadow-md"
          />
        </div>

        {/* PROGRESS */}
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm mb-2">Progress</p>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-indigo-500 h-3 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {questions.map((q, index) => {
          const unlocked = isUnlocked(index);
          const selected = answers[q.id];

          return (
            <div key={q.id} className="space-y-3">
              {/* GeoGebra */}
              {q.id === 5 && (
                <div
                  className={`p-5 rounded-2xl shadow-lg text-center transition ${
                    allBefore5Correct
                      ? "bg-indigo-100"
                      : "bg-gray-200 opacity-60"
                  }`}
                >
                  <p className="mb-3 font-semibold">📊 Cek grafik kamu!</p>

                  {allBefore5Correct ? (
                    <GeoGebraGraph
                      equations={[
                        `${a1}x + ${b1}y = ${c1}`,
                        `${a2}x + ${b2}y = ${c2}`,
                      ]}
                      point={result}
                    />
                  ) : (
                    <p className="text-sm">🔒 Selesaikan soal sebelumnya</p>
                  )}
                </div>
              )}

              {/* CARD */}
              <div
                className={`p-5 rounded-2xl shadow-lg transition ${
                  unlocked
                    ? "bg-white hover:shadow-xl"
                    : "bg-gray-200 opacity-60"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Soal {q.id}</h3>

                  {!unlocked && (
                    <span className="text-xs bg-gray-400 text-white px-2 py-1 rounded">
                      Terkunci
                    </span>
                  )}
                </div>

                <p className="mb-3">{q.question}</p>

                <div className="space-y-2">
                  {q.options.map((opt, i) => {
                    const isSelected = selected === opt;
                    const isCorrect = correctMap[q.id] && isSelected;
                    const isWrong = isSelected && !correctMap[q.id];

                    return (
                      <button
                        key={i}
                        disabled={!unlocked}
                        onClick={() => handleAnswer(q.id, opt)}
                        className={`w-full px-4 py-2 rounded-lg border text-left transition
                          ${!unlocked ? "cursor-not-allowed" : "hover:scale-[1.02]"}
                          ${isSelected ? "border-indigo-500" : "border-gray-300"}
                          ${isCorrect ? "bg-green-200" : ""}
                          ${isWrong ? "bg-red-200" : ""}
                        `}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {/* Feedback */}
                {selected && unlocked && (
                  <p className="mt-3 font-semibold">
                    {correctMap[q.id]
                      ? "✅ Jawaban benar!"
                      : "❌ Jawaban salah"}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
