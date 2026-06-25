import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const tests = [
  { topic: "Arrays", score: 92 },
  { topic: "SQL joins", score: 86 },
  { topic: "Recursion", score: 74 },
];

export default function TestPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-8 sm:px-6">
        <Sidebar />
        <main className="flex-1 space-y-8">
          <section className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">AI Test</p>
                <h1 className="mt-3 text-3xl font-semibold text-white">Evaluate your solutions with AI.</h1>
              </div>
              <p className="max-w-2xl text-slate-400">
                Generate coding and SQL tests, then review feedback and improvement guidance from the mentor.
              </p>
            </div>
          </section>
          <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20">
              <h2 className="text-xl font-semibold text-white">Take a test</h2>
              <p className="mt-4 text-slate-400">
                Use the AI-generated test suite to validate correctness and optimization for your latest coding or SQL solution.
              </p>
              <button className="mt-6 rounded-3xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                Generate test
              </button>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Recent tests</p>
              <div className="mt-6 space-y-4">
                {tests.map((test) => (
                  <div key={test.topic} className="rounded-3xl border border-slate-800/80 bg-slate-900 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-white">{test.topic}</p>
                        <p className="text-sm text-slate-400">AI feedback available</p>
                      </div>
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-200">{test.score}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
