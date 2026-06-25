import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const problems = [
  { title: "Binary search", difficulty: "Easy" },
  { title: "Top salaries", difficulty: "Medium" },
  { title: "Nested SQL joins", difficulty: "Medium" },
];

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-8 sm:px-6">
        <Sidebar />
        <main className="flex-1 space-y-8">
          <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Coding practice</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Solve problems and get AI feedback.</h1>
              <div className="mt-8 space-y-6">
                {problems.map((problem) => (
                  <div key={problem.title} className="rounded-3xl border border-slate-800/80 bg-slate-900 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold text-white">{problem.title}</p>
                        <p className="text-sm text-slate-400">Difficulty: {problem.difficulty}</p>
                      </div>
                      <button className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                        Open
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">SQL practice</p>
              <p className="mt-4 text-slate-400">
                Write queries, execute results, and review correctness with AI evaluation.
              </p>
              <button className="mt-6 rounded-3xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                Start SQL challenge
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
