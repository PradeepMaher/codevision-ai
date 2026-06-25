import Link from "next/link";
import { SignOutButton, UserButton, auth } from "@clerk/nextjs";

export default function Navbar() {
  const { userId } = auth();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/dashboard" className="text-lg font-semibold text-white">
          CodeVision AI
        </Link>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-4 text-sm text-slate-300 sm:flex">
            <Link href="/learn" className="transition hover:text-white">
              Learn
            </Link>
            <Link href="/practice" className="transition hover:text-white">
              Practice
            </Link>
            <Link href="/generate" className="transition hover:text-white">
              Generate
            </Link>
            <Link href="/test" className="transition hover:text-white">
              Test
            </Link>
          </nav>
          {userId ? (
            <div className="flex items-center gap-3">
              <UserButton afterSignOutUrl="/" />
              <SignOutButton>
                <button className="rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-700">
                  Sign out
                </button>
              </SignOutButton>
            </div>
          ) : (
            <Link href="/sign-in" className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
