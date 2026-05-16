"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Question = {
  id: number;
  title: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
};

const questions: Question[] = [
  {
    id: 1,
    title: "Model Matematika",
    question:
      "Jika x adalah harga 1 pensil dan y adalah harga 1 buku tulis, model matematika yang sesuai adalah ...",
    options: [
      "2x + 3y = 11.000 dan x + y = 5.000",
      "3x + 2y = 11.000 dan x + y = 5.000",
      "2x + 3y = 5.000 dan x + y = 11.000",
      "2x + y = 11.000 dan 3x + y = 5.000",
    ],
    correct: "2x + 3y = 11.000 dan x + y = 5.000",
    explanation:
      "Dua pensil dan tiga buku tulis berjumlah 11.000, sedangkan satu pensil dan satu buku tulis berjumlah 5.000.",
  },
  {
    id: 2,
    title: "Samakan Koefisien",
    question:
      "Agar variabel x dapat dieliminasi, persamaan x + y = 5.000 sebaiknya dikalikan dengan ...",
    options: ["2", "3", "5.000", "11.000"],
    correct: "2",
    explanation:
      "Persamaan kedua dikalikan 2 sehingga menjadi 2x + 2y = 10.000 dan koefisien x sama dengan persamaan pertama.",
  },
  {
    id: 3,
    title: "Eliminasi",
    question:
      "Hasil dari (2x + 3y = 11.000) dikurangi (2x + 2y = 10.000) adalah ...",
    options: ["y = 1.000", "y = 2.000", "x = 1.000", "x = 4.000"],
    correct: "y = 1.000",
    explanation:
      "Variabel x habis dieliminasi, 3y - 2y = y dan 11.000 - 10.000 = 1.000.",
  },
  {
    id: 4,
    title: "Substitusi",
    question:
      "Substitusikan y = 1.000 ke persamaan x + y = 5.000. Nilai x adalah ...",
    options: ["x = 1.000", "x = 2.000", "x = 4.000", "x = 5.000"],
    correct: "x = 4.000",
    explanation:
      "x + 1.000 = 5.000, maka x = 5.000 - 1.000 = 4.000.",
  },
  {
    id: 5,
    title: "Kesimpulan",
    question: "Harga masing-masing pensil dan buku tulis adalah ...",
    options: [
      "Pensil Rp4.000 dan buku tulis Rp1.000",
      "Pensil Rp1.000 dan buku tulis Rp4.000",
      "Pensil Rp2.000 dan buku tulis Rp3.000",
      "Pensil Rp3.000 dan buku tulis Rp2.000",
    ],
    correct: "Pensil Rp4.000 dan buku tulis Rp1.000",
    explanation:
      "Karena x = 4.000 dan y = 1.000, harga 1 pensil adalah Rp4.000 dan harga 1 buku tulis adalah Rp1.000.",
  },
];

export default function QuizMetodeCampuran() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [correctMap, setCorrectMap] = useState<{ [key: number]: boolean }>({});

  const correctCount = useMemo(
    () => Object.values(correctMap).filter(Boolean).length,
    [correctMap],
  );

  const progress = (correctCount / questions.length) * 100;
  const isFinished = correctCount === questions.length;

  const handleAnswer = (qid: number, option: string) => {
    const question = questions.find((item) => item.id === qid);

    if (!question) return;

    setAnswers((prev) => ({ ...prev, [qid]: option }));
    setCorrectMap((prev) => ({ ...prev, [qid]: option === question.correct }));
  };

  const isUnlocked = (index: number) => {
    if (index === 0) return true;
    return correctMap[questions[index - 1].id];
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-100 to-yellow-50 p-6">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="rounded-2xl bg-white p-6 text-center shadow-xl">
          <h1 className="mb-3 text-2xl font-bold text-blue-600 md:text-3xl">
            Quiz Metode Campuran
          </h1>
          <div className="rounded-xl bg-yellow-100 p-4 text-gray-800">
            <p className="font-medium">Diketahui:</p>
            <p>
              2 pensil dan 3 buku tulis berjumlah Rp11.000, sedangkan 1 pensil
              dan 1 buku tulis berjumlah Rp5.000.
            </p>
            <p className="mt-2 font-medium">
              Tentukan harga masing-masing pensil dan buku tulis!
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-white p-4 shadow">
          <div className="mb-2 flex items-center justify-between text-sm text-gray-700">
            <p>Progress</p>
            <p>
              {correctCount}/{questions.length} benar
            </p>
          </div>
          <div className="h-3 w-full rounded-full bg-gray-200">
            <div
              className="h-3 rounded-full bg-blue-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid gap-4">
          {questions.map((question, index) => {
            const unlocked = isUnlocked(index);
            const selected = answers[question.id];
            const isCorrectAnswer = correctMap[question.id];

            return (
              <div
                key={question.id}
                className={`rounded-2xl p-5 shadow-lg transition ${
                  unlocked ? "bg-white" : "bg-gray-200 opacity-60"
                }`}
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-blue-600">
                      Langkah {question.id}
                    </p>
                    <h2 className="text-lg font-bold text-gray-900">
                      {question.title}
                    </h2>
                  </div>

                  {!unlocked && (
                    <span className="rounded bg-gray-500 px-2 py-1 text-xs text-white">
                      Terkunci
                    </span>
                  )}
                </div>

                <p className="mb-4 text-gray-700">{question.question}</p>

                <div className="space-y-2">
                  {question.options.map((option) => {
                    const isSelected = selected === option;
                    const isWrong = isSelected && !isCorrectAnswer;

                    return (
                      <button
                        key={option}
                        disabled={!unlocked}
                        onClick={() => handleAnswer(question.id, option)}
                        className={`w-full rounded-lg border px-4 py-2 text-left transition ${
                          unlocked ? "hover:scale-[1.01]" : "cursor-not-allowed"
                        } ${isSelected ? "border-blue-500" : "border-gray-300"} ${
                          isSelected && isCorrectAnswer ? "bg-green-200" : ""
                        } ${isWrong ? "bg-red-200" : ""}`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {selected && unlocked && (
                  <div
                    className={`mt-4 rounded-xl p-3 text-sm ${
                      isCorrectAnswer
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    <p className="font-semibold">
                      {isCorrectAnswer ? "Jawaban benar!" : "Jawaban salah"}
                    </p>
                    <p>{question.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {isFinished && (
          <div className="rounded-2xl bg-white p-6 text-center shadow-xl">
            <h2 className="mb-2 text-xl font-bold text-blue-600">
              Quiz selesai
            </h2>
            <p className="text-gray-700">
              Kamu sudah menyelesaikan SPLDV dengan metode campuran: eliminasi
              untuk menemukan y, lalu substitusi untuk menemukan x.
            </p>
          </div>
        )}

        <div className="flex justify-center gap-3">
          <Link
            href="/materi/metode-campuran"
            className="rounded-full bg-blue-600 px-6 py-3 text-white shadow transition hover:scale-105"
          >
            Kembali Materi
          </Link>
          <Link
            href="/menu"
            className="rounded-full bg-green-600 px-6 py-3 text-white shadow transition hover:scale-105"
          >
            Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
