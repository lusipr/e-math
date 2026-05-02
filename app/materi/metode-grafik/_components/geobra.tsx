"use client";
import React from "react";

type Props = {
  equations: string[];
  point?: { x: number; y: number } | null;
};

export default function GeoGebraGraph({ equations, point }: Props) {
  const commands =
    equations.join("\n") +
    (point ? `\nA=(${point.x},${point.y})` : "");

  return (
    <iframe
      src={`https://www.geogebra.org/classic?command=${encodeURIComponent(
        commands
      )}`}
      width="100%"
      height="400"
      style={{ border: "1px solid #ccc", borderRadius: "8px" }}
      allowFullScreen
    />
  );
}