import Link from "next/link";

const features = [
  { title: "AI Code Generator", description: "Create production-ready snippets for JavaScript, TypeScript, Python, and more." },
  { title: "AI SQL Generator", description: "Turn plain English into clean SQL statements with a short explanation." },
  { title: "Premium Output", description: "Review generated solutions in polished cards with syntax-aware formatting." },
  { title: "Fast Workflow", description: "Copy, download, or clear results in a single streamlined experience." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-4 py-8 text-[#0F172A] sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <section className="rounded-[36px] border border-[#BBF7D0] bg-white p-8 shadow-[0_30px_80px_rgba(22,163,74,0.08)] sm:p-10 lg:p-12">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#16A34A]">CodeVision AI</p>
            <h1 className="text-4xl font-semibold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
              AI Code Generator and AI SQL Generator for polished demos.
            </h1>
            <p className="text-lg leading-8 text-[#475569]">
              Focus on fast, clean generation with a premium experience tailored for tomorrow&apos;s showcase.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/generate" className="inline-flex items-center justify-center rounded-2xl bg-[#16A34A] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#15803D]">
                Open generator
              </Link>
              <a href="#features" className="inline-flex items-center justify-center rounded-2xl border border-[#BBF7D0] bg-[#F4FFF6] px-6 py-3 text-base font-semibold text-[#14532D] transition hover:bg-white">
                Explore features
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-[#BBF7D0] bg-white p-8 shadow-[0_20px_60px_rgba(22,163,74,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#16A34A]">Generator-only experience</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#0F172A]">Everything you need for a focused AI demo.</h2>
            <p className="mt-3 text-[#475569]">
              Keep the spotlight on code generation, SQL generation, clean input, and polished output without the distraction of extra modules.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {features.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#BBF7D0] bg-[#F4FFF6] p-5">
                  <h3 className="font-semibold text-[#14532D]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#475569]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#BBF7D0] bg-white p-8 shadow-[0_20px_60px_rgba(22,163,74,0.08)]">
            <h2 className="text-2xl font-semibold text-[#0F172A]">Ready for tomorrow&apos;s presentation</h2>
            <p className="mt-3 text-[#475569]">
              Launch the generator, enter a prompt, and show off the same premium workflow your teacher expects to see.
            </p>
            <div className="mt-8 space-y-3">
              <div className="rounded-2xl border border-[#BBF7D0] bg-[#F4FFF6] px-5 py-4 text-[#14532D]">AI Code Generator</div>
              <div className="rounded-2xl border border-[#BBF7D0] bg-[#F4FFF6] px-5 py-4 text-[#14532D]">AI SQL Generator</div>
              <div className="rounded-2xl border border-[#BBF7D0] bg-[#F4FFF6] px-5 py-4 text-[#14532D]">Copy, download, and clear actions</div>
            </div>
          </div>
        </section>

        <footer className="rounded-[28px] border border-[#BBF7D0] bg-white px-6 py-5 text-sm text-[#64748B] shadow-[0_10px_30px_rgba(22,163,74,0.06)]">
          Crafted for a clean generator-first demo experience.
        </footer>
      </div>
    </main>
  );
}
