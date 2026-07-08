"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/generate", label: "Generate" },
];

export default function Navbar() {
  const { isSignedIn } = useUser();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#BBF7D0] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-[#0F172A]">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#16A34A] text-sm font-bold text-white shadow-sm">
            CV
          </span>
          <span>CodeVision AI</span>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-[#BBF7D0] bg-[#F4FFF6] p-1 text-sm font-medium text-[#475569] sm:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 transition ${active ? "bg-[#16A34A] text-white shadow-sm" : "hover:bg-white hover:text-[#16A34A]"}`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-4 py-2 transition hover:bg-white hover:text-[#16A34A]"
          >
            GitHub
          </a>
        </nav>

        {isSignedIn ? (
          <div className="flex items-center gap-3">
            <UserButton />
            <SignOutButton>
              <button className="rounded-2xl border border-[#BBF7D0] bg-white px-3 py-2 text-sm font-semibold text-[#14532D] transition hover:border-[#16A34A] hover:bg-[#F4FFF6]">
                Sign out
              </button>
            </SignOutButton>
          </div>
        ) : (
          <Link href="/sign-in" className="rounded-2xl bg-[#16A34A] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#15803D]">
            Sign in
          </Link>
        )}
      </div>
    </header>
  );
}
