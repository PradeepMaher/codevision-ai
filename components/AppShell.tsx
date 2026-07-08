import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";

type AppShellProps = {
  children: ReactNode;
  className?: string;
};

export default function AppShell({ children, className = "" }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <Navbar />
      <main className={`mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:py-8 ${className}`.trim()}>{children}</main>
    </div>
  );
}
