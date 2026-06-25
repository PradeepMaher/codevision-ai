import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Learn", href: "/learn" },
  { label: "Practice", href: "/practice" },
  { label: "Generate", href: "/generate" },
  { label: "Test", href: "/test" },
];

export default function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 shrink-0 border-r border-slate-800/80 bg-slate-950/95 p-6 lg:block">
      <div className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">Workspace</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Mentor hub</h2>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-900 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
