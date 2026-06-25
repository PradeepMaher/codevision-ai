import Link from "next/link";

export default function DashboardSkeleton() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Welcome back</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Your AI learning dashboard</h1>
          <p className="mt-4 text-slate-400">
            Track coding progress, SQL practice scores, and AI recommendations in one unified learning workspace.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link href="/practice" className="rounded-3xl bg-slate-900/80 px-6 py-5 text-white transition hover:bg-slate-800">
              Start practice
            </Link>
            <Link href="/learn" className="rounded-3xl bg-slate-900/80 px-6 py-5 text-white transition hover:bg-slate-800">
              Ask mentor
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          {[
            { title: "Problems solved", value: "24" },
            { title: "SQL score", value: "88%" },
            { title: "Coding progress", value: "Intermediate" },
            { title: "Weak topics", value: "Recursion, Joins" },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6">
              <p className="text-sm text-slate-400">{item.title}</p>
              <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Recent activity</p>
          <ul className="mt-5 space-y-3 text-slate-300">
            <li>Reviewed recursion explanation</li>
            <li>Submitted SQL join practice</li>
            <li>Generated optimized Java search algorithm</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Learning recommendation</p>
          <p className="mt-4 text-slate-300">
            Focus next on dynamic programming and complex join patterns. Use the AI mentor to explain table relationships visually.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Quick links</p>
          <div className="mt-4 space-y-3 text-slate-300">
            <Link href="/generate" className="block rounded-2xl bg-slate-900/70 px-4 py-3 transition hover:bg-slate-800">Generate code</Link>
            <Link href="/test" className="block rounded-2xl bg-slate-900/70 px-4 py-3 transition hover:bg-slate-800">Run AI test</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
