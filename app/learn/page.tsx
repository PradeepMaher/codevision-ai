import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const examples = [
  { question: "Explain binary search", category: "Algorithms" },
  { question: "Explain SQL joins", category: "SQL" },
  { question: "How does recursion work?", category: "Algorithms" },
];

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-8 sm:px-6">
        <Sidebar />
        <main className="flex-1 space-y-8">
          <section className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">AI Mentor</p>
                <h1 className="mt-3 text-3xl font-semibold text-white">Ask anything about code or SQL.</h1>
              </div>
              <p className="max-w-2xl text-slate-400">
                The mentor returns explanations, examples, time complexity, and visual representations for every question.
              </p>
            </div>
          </section>
          <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20">
              <h2 className="text-xl font-semibold text-white">Ask a question</h2>
              <textarea
                rows={8}
                className="mt-4 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-4 text-sm text-slate-100 outline-none transition focus:border-cyan-500"
                placeholder="Example: Explain time complexity for merge sort"
              />
              <button className="mt-4 rounded-3xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                Send to AI mentor
              </button>
            </div>
            <div className="space-y-4">
              {examples.map((item) => (
                <div key={item.question} className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6">
                  <p className="text-sm text-cyan-300/80">{item.category}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.question}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
