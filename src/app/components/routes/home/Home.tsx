import Link from "next/link";
import Code from "./Code";
import { ChevronRight, Play, Terminal } from "lucide-react";

const PRINT_COMMAND = 'print(f"Hello, {name}")';

const FEATURES = [
  {
    title: "Code that runs instantly",
    description:
      "Every lesson drops you into a live editor. No setup, no installs — just write code and see it run in milliseconds. The environment is configured for the course, so you focus on learning, not tooling.",
    bg: "bg-indigo-50 dark:bg-indigo-950/30",
    visual: (
      <div className="bg-bg-base rounded-xl border border-border p-5 font-mono text-sm shadow-2xl">
        <div className="flex items-center gap-2 mb-4">
          <Terminal size={16} className="text-text-secondary" />
          <span className="ml-2 text-xs text-text-secondary">main.py</span>
        </div>
        <div className="space-y-1">
          <p>
            <span className="text-indigo-400">def</span>{" "}
            <span className="text-sky-400">greet</span>
            <span className="text-slate-700">(name):</span>
          </p>
          <p className="pl-4 text-slate-500 dark:text-slate-300">
            {PRINT_COMMAND}
          </p>
          <p className="mt-3 text-slate-500 dark:text-slate-300">
            greet("James")
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-2">
          <span className="text-xs  text-emerald-500 font-sans"> Output</span>
          <span className="text-xs text-slate-400 font-sans">Hello, James</span>
        </div>
      </div>
    ),
  },
  {
    title: "Interactive Quizzes",
    description:
      "Learn the basics of a subject through the integrated interactive quizzes. Concepts are not just explained, but they're illustrated through graphics to help you understand how a concept works.",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    visual: (
      <div className="bg-bg-base rounded-xl border border-slate-100 dark:border-white/5 p-5 shadow-sm space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center flex-shrink-0">
            <span className="text-indigo-500 text-xs font-bold">AI</span>
          </div>
          <div className="bg-slate-50 dark:bg-white/5 rounded-xl rounded-tl-none px-4 py-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Almost! Your base case handles{" "}
            <code className="text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 px-1 rounded">
              n == 0
            </code>{" "}
            but misses{" "}
            <code className="text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 px-1 rounded">
              n == 1
            </code>
            . Try returning{" "}
            <code className="text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 px-1 rounded">
              n
            </code>{" "}
            when{" "}
            <code className="text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 px-1 rounded">
              n &lt;= 1
            </code>{" "}
            instead.
          </div>
        </div>
        <div className="flex items-start gap-3 justify-end">
          <div className="bg-indigo rounded-xl rounded-tr-none px-4 py-3 text-sm text-text-primary leading-relaxed max-w-[80%]">
            Oh that makes sense — so both 0 and 1 are base cases?
          </div>
          <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 text-xs font-bold text-slate-500">
            U
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center flex-shrink-0">
            <span className="text-indigo-500 text-xs font-bold">AI</span>
          </div>
          <div className="bg-slate-50 dark:bg-white/5 rounded-xl rounded-tl-none px-4 py-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Exactly. Fibonacci(1) = 1 by definition — there's nothing left to
            recurse into.
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Projects you can show off",
    description:
      "Every course ends with a real project — not a multiple choice quiz. Build a data pipeline, a REST API, or a CLI tool. Something you can put in your portfolio and talk about in interviews.",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    visual: (
      <div className="bg-white dark:bg-[#0D1221] rounded-xl border border-slate-100 dark:border-white/5 p-5 shadow-sm space-y-3">
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-4">
          Course project — Python for Data Science
        </p>
        {[
          { label: "Ingest & clean CSV data", done: true },
          { label: "Compute rolling averages", done: true },
          { label: "Visualise with matplotlib", done: true },
          { label: "Export summary report", done: false, active: true },
          { label: "Deploy to the web", done: false },
        ].map((step) => (
          <div key={step.label} className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                step.done
                  ? "bg-emerald-500"
                  : step.active
                    ? "border-2 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30"
                    : "border-2 border-slate-200 dark:border-white/10"
              }`}
            >
              {step.done && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5l2.5 2.5L8 3"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <span
              className={`text-sm ${
                step.done
                  ? "text-slate-400 line-through"
                  : step.active
                    ? "text-slate-800 dark:text-white font-medium"
                    : "text-slate-400"
              }`}
            >
              {step.label}
            </span>
            {step.active && (
              <span className="ml-auto text-xs bg-indigo-100 dark:bg-indigo-900/40 text-indigo-500 px-2 py-0.5 rounded-full">
                In progress
              </span>
            )}
          </div>
        ))}
      </div>
    ),
  },
];

export default function HomeContent() {
  return (
    <>
      <div className="w-full min-h-screen bg-bg-base grid place-items-center">
        <div className="relative max-w-6xl mx-auto px-6 py-24 w-full mt-32 mb-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h1
                className="display font-space-grotesk text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight
             bg-[linear-gradient(135deg,#F0EFFF_0%,#6C63FF_25%,#C4BFFF_50%,#6C63FF_75%,#C4BFFF_100%)]
             bg-size-[300%_300%]
             bg-clip-text text-transparent
             animate-[gradient-wave_8s_linear_infinite]"
              >
                Learning isn't <br />
                just listening, <br />
                it's doing.
              </h1>

              <p className="text-text-secondary font-medium text-lg leading-relaxed max-w-md">
                Lumio doesn't just teach programming, it teaches logic. Lumio
                provides interactive activities from code-writing, excercises,
                videos, and data visualisation.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button className="bg-indigo border-b-4 border-indigo-700 text-text-primary transition-all font-medium px-6 py-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer">
                  Start for free
                  <ChevronRight size={16} />
                </button>

                <button className="border border-border text-text-secondary hover:text-text-primary font-medium px-6 py-3 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer">
                  <Play size={16} />
                  Watch overview
                </button>
              </div>

              <p className="text-xs text-text-secondary">
                No credit card required · 7-day free trial on Pro
              </p>
            </div>

            <div className="relative">
              <div className="glow absolute inset-0 rounded-2xl pointer-events-none" />
              <div className="relative bg-bg-base border border-border rounded-2xl overflow-hidden shadow-2xl">
                {/* Terminal chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-bg-base dark:border-white/8">
                  <Terminal size={16} className="text-text-tertiary" />
                  <span className="ml-3 text-xs text-text-tertiary font-mono">
                    lesson_5.py
                  </span>
                </div>

                <div className="p-6 min-h-[200px]">
                  <Code />
                </div>
                {/* Progress bar */}
                <div className="px-6 pb-5">
                  <div className="flex items-center justify-between text-xs text-text-secondary mb-2">
                    <span>Lesson 5 of 48</span>
                    <span>10% complete</span>
                  </div>
                  <div className="h-1 bg-bg-popover rounded-full overflow-hidden">
                    <div className="h-full w-1/10 bg-gradient-to-r from-indigo to-violet-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="w-full">
              <h2 className="display text-5xl font-space-grotesk font-bold text-text-primary leading-tight justify-self-center">
                Here's what we do
              </h2>
            </div>
          </div>

          <section className="max-w-6xl mx-auto px-6 py-24 space-y-24">
            {FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}
              >
                {/* Visual card */}
                <div className={`w-full md:w-1/2 rounded-2xl p-8`}>
                  {feature.visual}
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 space-y-4">
                  <h2 className="font-space-grotesk text-3xl font-bold text-slate-900 dark:text-white leading-snug">
                    {feature.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </section>

          <div className="text-center mt-12">
            <button className="flex gap-2 border border-white/10 hover:border-indigo-500/40 text-slate-400 transition-all text-md font-medium items-center justify-center px-8 py-3 rounded-xl cursor-pointer">
              <Link
                key="/courses"
                href="/courses"
                className="flex gap-2 items-center justify-center"
              >
                Browse all Courses
                <ChevronRight size={16} />
              </Link>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
