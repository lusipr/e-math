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
    question: "Bentuk sederhana dari (x + 2)(x - 5) adalah ...",
    options: [
      "x² - 3x - 10",
      "x² - 3x + 10",
      "x² + 7x - 10",
      "x² - 7x + 10",
    ],
    answer: "x² - 3x - 10",
  },
];

const Course: React.FC = () => {
  const [selected, setSelected] = useState<(string | null)[]>(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (qIdx: number, option: string) => {
    const newSelected = [...selected];
    newSelected[qIdx] = option;
    setSelected(newSelected);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  const correctCount = selected.filter(
    (ans, idx) => ans === questions[idx].answer
  ).length;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 py-16 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-4xl w-full">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-6 text-center">
          Latihan Soal Matematika SMA Kelas 10
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {questions.map((q, idx) => (
            <div
              key={idx}
              className="bg-blue-50 rounded-xl p-6 shadow flex flex-col gap-4"
            >
              <div className="font-semibold text-blue-800">
                {idx + 1}. {q.question}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {q.options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className={`px-4 py-2 rounded-lg border transition
                      ${
                        selected[idx] === opt
                          ? "bg-blue-500 text-white border-blue-700"
                          : "bg-white text-blue-900 border-blue-300 hover:bg-blue-100"
                      }
                    `}
                    disabled={showResult}
                    onClick={() => handleSelect(idx, opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {showResult && (
                <div className="mt-2">
                  {selected[idx] === q.answer ? (
                    <span className="text-green-600 font-semibold">
                      Jawaban benar!
                    </span>
                  ) : (
                    <span className="text-red-600 font-semibold">
                      Jawaban salah. Jawaban yang benar: {q.answer}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
          {!showResult ? (
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-3 rounded-full shadow hover:scale-105 transition"
            >
              Cek Jawaban
            </button>
          ) : (
            <div className="text-center text-lg font-bold text-blue-800">
              Skor kamu: {correctCount} dari {questions.length} soal
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Course;