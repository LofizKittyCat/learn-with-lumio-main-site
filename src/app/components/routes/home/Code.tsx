"use client";
import { useEffect, useState } from "react";

const CODE_LINES = [
  {
    text: "# lumio / python-basics / lesson-5-user-input",
    color: "text-slate-500",
  },

  { text: "", color: "" },

  { text: 'color = input("Color: ") # Take in color from input' },

  { text: "", color: "" },

  { text: "# String formatting", color: "text-slate-500" },
  { text: 'print(f"You picked the color {color}")' },

  { text: "", color: "" },
];

export default function Code() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return;

    const currentLine = CODE_LINES[visibleLines];
    if (charCount < currentLine.text.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 18);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(
        () => {
          setVisibleLines((l) => l + 1);
          setCharCount(0);
        },
        currentLine.text === "" ? 80 : 120,
      );
      return () => clearTimeout(t);
    }
  }, [visibleLines, charCount]);

  return (
    <div className="font-mono text-sm leading-6 select-none">
      {CODE_LINES.slice(0, visibleLines).map((line, i) => (
        <div key={i} className={line.color || "text-slate-400"}>
          {line.text || "\u00A0"}
        </div>
      ))}
      {visibleLines < CODE_LINES.length && (
        <div className={CODE_LINES[visibleLines].color || "text-slate-400"}>
          {CODE_LINES[visibleLines].text.slice(0, charCount)}
          <span className="animate-pulse text-indigo-400">▌</span>
        </div>
      )}
    </div>
  );
}
