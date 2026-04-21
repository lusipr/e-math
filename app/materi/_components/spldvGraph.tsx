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