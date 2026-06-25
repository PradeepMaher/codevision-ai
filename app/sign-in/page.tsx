import { SignIn } from "@clerk/nextjs/app-beta";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100 sm:px-6">
      <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-800/80 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/40">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Sign in</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Continue with Google or email</h1>
        </div>
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </div>
    </main>
  );
}
