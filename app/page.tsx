import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100 sm:px-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-10 shadow-[0_25px_80px_rgba(15,23,42,0.5)] backdrop-blur-xl">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">CodeVision AI</p>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              AI Coding & SQL Mentor for modern learners.
            </h1>
            <p className="text-lg leading-8 text-slate-300">
              Learn programming fundamentals, practice SQL and DSA problems, and get instant AI-powered explanations, optimization recommendations, and visual execution insights.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/sign-in"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Start learning
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-base font-semibold text-slate-100 transition hover:bg-white/5"
              >
                View dashboard
              </Link>
            </div>
          </div>
        </section>
        <section className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
          <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/80 p-8">
            <h2 className="text-2xl font-semibold text-white">Built for focused learning</h2>
            <p className="text-slate-400">
              Work side-by-side with an AI mentor in a dedicated workspace that combines code/sql editing, live execution visuals, and step-by-step guidance.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "AI explanations",
                "SQL generation",
                "Coding practice",
                "Test evaluation",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                  <p className="font-medium text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8">
            <h2 className="text-2xl font-semibold text-white">Your workspace, reimagined</h2>
            <p className="mt-3 text-slate-400">
              Navigate to the dashboard to track progress, practice problems, and generate AI-powered code and SQL with explanation cards and execution diagrams.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                { label: "Learn", href: "/learn" },
                { label: "Practice", href: "/practice" },
                { label: "Generate", href: "/generate" },
                { label: "Test", href: "/test" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4 text-white transition hover:border-cyan-400/40 hover:bg-slate-900"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
