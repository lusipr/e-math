"use client";
import React, { useState } from "react";

const questions = [
  {
    question: "Jika f(x) = 2x + 3, maka f(4) = ...",
    options: ["7", "8", "9", "11"],
    answer: "11",
  },
  {
    question: "Hasil dari (3x² - 2x + 5) + (2x² + 4x - 3) adalah ...",
    options: [
      "5x² + 2x + 2",
      "6x² + 2x + 8",
      "5x² + 6x + 2",
      "5x² + 2x + 8",
    ],
    answer: "5x² + 2x + 2",
  },
  {
    question: "Jika a = 2 dan b = -3, maka nilai dari a² + 2ab + b² adalah ...",
    options: ["1", "4", "9", "25"],
    answer: "1",
  },
  {
    question: "Gradien garis yang melalui titik (2,3) dan (4,7) adalah ...",
    options: ["2", "1", "3", "4"],
    answer: "2",
  },
   {
    question: "Jika a = 2 dan b = -3, maka nilai dari a² + 2ab + b² adalah ...",
    options: ["1", "4", "9", "25"],
    answer: "1",
  },
  {
    question: "Gradien garis yang melalui titik (2,3) dan (4,7) adalah ...",
    options: ["2", "1", "3", "4"],
    answer: "2",
  },
   {
    question: "Jika a = 2 dan b = -3, maka nilai dari a² + 2ab + b² adalah ...",
    options: ["1", "4", "9", "25"],
    answer: "1",
  },
  {
    question: "Gradien garis yang melalui titik (2,3) dan (4,7) adalah ...",
    options: ["2", "1", "3", "4"],
    answer: "2",
  },
];

const Course: React.FC = () => {
  const [selected, setSelected] = useState<(string | null)[]>(
    Array(questions.length).fill(null)
  );
  const [isCorrect, setIsCorrect] = useState<boolean[]>(
    Array(questions.length).fill(false)
  );
  const [submitted, setSubmitted] = useState<boolean[]>(
    Array(questions.length).fill(false)
  );

  // 🔓 unlock soal
  const isUnlocked = (idx: number) => {
    if (idx === 0) return true;
    return isCorrect[idx - 1];
  };

  const handleSelect = (qIdx: number, option: string) => {
    if (!isUnlocked(qIdx)) return;

    const newSelected = [...selected];
    newSelected[qIdx] = option;
    setSelected(newSelected);
  };

  const handleSubmitAnswer = (idx: number) => {
    if (!selected[idx]) return;

    const newSubmitted = [...submitted];
    const newCorrect = [...isCorrect];

    newSubmitted[idx] = true;
    newCorrect[idx] = selected[idx] === questions[idx].answer;

    setSubmitted(newSubmitted);
    setIsCorrect(newCorrect);
  };

  const score = isCorrect.filter(Boolean).length;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">
          Latihan Soal Matematika
        </h2>

        <div className="space-y-6">
          {questions.map((q, idx) => (
            <div key={idx} className="p-5 bg-blue-50 rounded-xl shadow">
              <p className="font-semibold text-blue-800 mb-3">
                {idx + 1}. {q.question}
              </p>

              {!isUnlocked(idx) && (
                <p className="text-sm text-gray-500 mb-2">
                  🔒 Selesaikan soal sebelumnya dulu
                </p>
              )}

              <div className="grid grid-cols-2 gap-3">
                {q.options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    disabled={!isUnlocked(idx)}
                    onClick={() => handleSelect(idx, opt)}
                    className={`p-2 rounded border
                      ${
                        selected[idx] === opt
                          ? "bg-blue-500 text-white"
                          : "bg-white"
                      }
                      ${
                        !isUnlocked(idx)
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-blue-100"
                      }
                    `}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {/* 🔘 tombol submit per soal */}
              <button
                type="button"
                onClick={() => handleSubmitAnswer(idx)}
                disabled={!selected[idx] || !isUnlocked(idx)}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
              >
                Submit Jawaban
              </button>

              {/* 📢 hasil */}
              {submitted[idx] && (
                <div className="mt-2">
                  {isCorrect[idx] ? (
                    <span className="text-green-600 font-semibold">
                      ✅ Benar!
                    </span>
                  ) : (
                    <span className="text-red-600 font-semibold">
                      ❌ Salah, coba lagi
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* skor */}
        <div className="mt-8 text-center font-bold text-blue-900">
          Skor: {score} / {questions.length}
        </div>
      </div>
    </div>
  );
};

export default Course;