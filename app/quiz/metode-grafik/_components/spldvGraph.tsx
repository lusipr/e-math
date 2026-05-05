"use client";
import React, { useState } from "react";
import GeoGebraGraph from "./geobra";

export default function SPLDVGraph() {
  const [a1, setA1] = useState(2);
  const [b1, setB1] = useState(2);
  const [c1, setC1] = useState(20);

  const [a2, setA2] = useState(2);
  const [b2, setB2] = useState(4);
  const [c2, setC2] = useState(50);

  const [result, setResult] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleSolve = () => {
    const D = a1 * b2 - a2 * b1;
    const Dx = c1 * b2 - c2 * b1;
    const Dy = a1 * c2 - a2 * c1;

    if (D === 0) {
      alert("Tidak memiliki titik potong!");
      setResult(null);
      return;
    }

    const x = Dx / D;
    const y = Dy / D;

    setResult({ x, y });
  };

  return (
    <div className="space-y-4">
      <div className="bg-gray-100 p-4 rounded">
        <p className="font-semibold mb-2">Persamaan 1</p>
        <div className="flex gap-2">
          <input type="number" value={a1} onChange={(e) => setA1(+e.target.value)} className="w-16 p-1 border rounded" /> x +
          <input type="number" value={b1} onChange={(e) => setB1(+e.target.value)} className="w-16 p-1 border rounded" /> y =
          <input type="number" value={c1} onChange={(e) => setC1(+e.target.value)} className="w-16 p-1 border rounded" />
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded">
        <p className="font-semibold mb-2">Persamaan 2</p>
        <div className="flex gap-2">
          <input type="number" value={a2} onChange={(e) => setA2(+e.target.value)} className="w-16 p-1 border rounded" /> x +
          <input type="number" value={b2} onChange={(e) => setB2(+e.target.value)} className="w-16 p-1 border rounded" /> y =
          <input type="number" value={c2} onChange={(e) => setC2(+e.target.value)} className="w-16 p-1 border rounded" />
        </div>
      </div>

      <button
        onClick={handleSolve}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Hitung Titik Potong
      </button>

      {result && (
        <div className="bg-green-100 p-3 rounded">
          Titik potong: ({result.x}, {result.y})
        </div>
      )}

      <GeoGebraGraph
        equations={[
          `${a1}x + ${b1}y = ${c1}`,
          `${a2}x + ${b2}y = ${c2}`,
        ]}
        point={result}
      />
    </div>
  );
}