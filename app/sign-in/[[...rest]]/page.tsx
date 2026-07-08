import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F4FFF6] px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-[32px] border border-[#BBF7D0] bg-white p-6 shadow-[0_20px_60px_rgba(22,163,74,0.08)] sm:p-8">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#16A34A]">Welcome back</p>
          <h1 className="mt-3 text-3xl font-semibold text-[#0F172A]">Sign in to continue</h1>
          <p className="mt-2 text-sm text-[#475569]">Access your workspace, practice tools, and AI mentor.</p>
        </div>
        <SignIn routing="path" path="/sign-in" fallbackRedirectUrl="/dashboard" signUpUrl="/sign-in" />
      </div>
    </main>
  );
}