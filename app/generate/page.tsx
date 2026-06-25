import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function GeneratePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-8 sm:px-6">
        <Sidebar />
        <main className="flex-1 space-y-8">
          <section className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Generate</p>
                <h1 className="mt-3 text-3xl font-semibold text-white">AI code and SQL generation.</h1>
              </div>
              <p className="max-w-2xl text-slate-400">
                Enter a prompt and get curated output, explanation, and optimization suggestions.
              </p>
            </div>
          </section>
          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20">
              <h2 className="text-xl font-semibold text-white">Generate Code</h2>
              <textarea
                rows={6}
                className="mt-4 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-4 text-sm text-slate-100 outline-none transition focus:border-cyan-500"
                placeholder="Create binary search in Java"
              />
              <button className="mt-4 rounded-3xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                Generate code
              </button>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20">
              <h2 className="text-xl font-semibold text-white">Generate SQL</h2>
              <textarea
                rows={6}
                className="mt-4 w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-4 text-sm text-slate-100 outline-none transition focus:border-cyan-500"
                placeholder="Find top 5 employee salaries"
              />
              <button className="mt-4 rounded-3xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                Generate SQL
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
