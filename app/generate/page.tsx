"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Copy, Download, Loader2, RotateCcw, Sparkles } from "lucide-react";
import AppShell from "@/components/AppShell";

const languageOptions = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
];

export default function GeneratePage() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [codePrompt, setCodePrompt] = useState("Build a reusable API client for a REST endpoint with error handling.");
  const [sqlPrompt, setSqlPrompt] = useState("Show the top 5 customers by lifetime spend in a retail database.");
  const [codeOutput, setCodeOutput] = useState("");
  const [sqlOutput, setSqlOutput] = useState("");
  const [loadingCode, setLoadingCode] = useState(false);
  const [loadingSql, setLoadingSql] = useState(false);
  const [codeError, setCodeError] = useState("");
  const [sqlError, setSqlError] = useState("");

  async function generateCode() {
    if (!codePrompt.trim()) {
      setCodeError("Please enter a prompt to generate code.");
      return;
    }

    setLoadingCode(true);
    setCodeError("");
    setCodeOutput("");

    try {
      const res = await fetch("/api/ai/code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: codePrompt, language: selectedLanguage }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate code.");
      setCodeOutput(typeof data.result === "string" ? data.result : "No response generated");
    } catch (error) {
      setCodeError(error instanceof Error ? error.message : "Unable to generate code right now.");
    } finally {
      setLoadingCode(false);
    }
  }

  async function generateSQL() {
    if (!sqlPrompt.trim()) {
      setSqlError("Please enter a prompt to generate SQL.");
      return;
    }

    setLoadingSql(true);
    setSqlError("");
    setSqlOutput("");

    try {
      const res = await fetch("/api/ai/sql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: sqlPrompt }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate SQL.");
      setSqlOutput(typeof data.result === "string" ? data.result : "No response generated");
    } catch (error) {
      setSqlError(error instanceof Error ? error.message : "Unable to generate SQL right now.");
    } finally {
      setLoadingSql(false);
    }
  }

  function copyOutput(text: string) {
    if (!text) return;
    navigator.clipboard.writeText(text);
  }

  function downloadOutput(text: string, fileName: string) {
    if (!text) return;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  }

  function clearCode() {
    setCodePrompt("");
    setCodeOutput("");
    setCodeError("");
  }

  function clearSql() {
    setSqlPrompt("");
    setSqlOutput("");
    setSqlError("");
  }

  return (
    <AppShell>
      <div className="space-y-6">
        <section className="rounded-[32px] border border-[#BBF7D0] bg-white p-6 shadow-[0_20px_60px_rgba(22,163,74,0.08)] sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#16A34A]">Generator workspace</p>
              <h1 className="mt-3 text-3xl font-semibold text-[#0F172A]">AI code and SQL generation in one polished flow.</h1>
              <p className="mt-3 max-w-2xl text-[#475569]">Enter your prompt, generate a clean solution, and share or download the result instantly.</p>
            </div>
            <div className="rounded-full border border-[#BBF7D0] bg-[#F4FFF6] px-4 py-2 text-sm font-medium text-[#14532D]">Groq-powered output</div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-[32px] border border-[#BBF7D0] bg-white p-6 shadow-[0_20px_60px_rgba(22,163,74,0.08)] sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold text-[#0F172A]">AI Code Generator</h2>
                <p className="mt-1 text-sm text-[#64748B]">Describe the feature you want and generate a polished solution.</p>
              </div>
              <span className="rounded-full bg-[#F4FFF6] px-3 py-1 text-sm font-medium text-[#16A34A]">Code</span>
            </div>

            <label className="mt-5 block text-sm font-medium text-[#14532D]">
              Language
              <select
                value={selectedLanguage}
                onChange={(event) => setSelectedLanguage(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-[#BBF7D0] bg-[#F4FFF6] px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#16A34A]"
              >
                {languageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <textarea
              value={codePrompt}
              onChange={(event) => setCodePrompt(event.target.value)}
              rows={6}
              className="mt-5 w-full rounded-2xl border border-[#BBF7D0] bg-[#F4FFF6] px-4 py-4 text-sm text-[#0F172A] outline-none transition focus:border-[#16A34A] focus:ring-2 focus:ring-[#22C55E]/30"
              placeholder="Create a binary search implementation in Java"
            />

            <div className="mt-5 flex flex-wrap gap-3">
              <button onClick={generateCode} className="inline-flex items-center gap-2 rounded-2xl bg-[#16A34A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#15803D]">
                {loadingCode ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                {loadingCode ? "Generating..." : "Generate code"}
              </button>
              <button onClick={clearCode} className="inline-flex items-center gap-2 rounded-2xl border border-[#BBF7D0] bg-white px-5 py-3 text-sm font-semibold text-[#14532D] transition hover:bg-[#F4FFF6]">
                <RotateCcw className="h-4 w-4" /> Clear
              </button>
            </div>

            {codeError ? <p className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{codeError}</p> : null}

            {codeOutput ? (
              <div className="mt-5 rounded-[24px] border border-[#BBF7D0] bg-[#F8FAFC] p-3">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-[#14532D]">Generated output</p>
                  <div className="flex gap-2">
                    <button onClick={() => copyOutput(codeOutput)} className="inline-flex items-center gap-2 rounded-full border border-[#BBF7D0] bg-white px-3 py-2 text-sm font-semibold text-[#14532D] transition hover:bg-[#F4FFF6]">
                      <Copy className="h-4 w-4" /> Copy
                    </button>
                    <button onClick={() => downloadOutput(codeOutput, `${selectedLanguage}-output.txt`)} className="inline-flex items-center gap-2 rounded-full border border-[#BBF7D0] bg-white px-3 py-2 text-sm font-semibold text-[#14532D] transition hover:bg-[#F4FFF6]">
                      <Download className="h-4 w-4" /> Download
                    </button>
                  </div>
                </div>
                <Editor
                  height="280px"
                  language={selectedLanguage === "typescript" ? "typescript" : selectedLanguage === "python" ? "python" : selectedLanguage === "java" ? "java" : "javascript"}
                  value={codeOutput}
                  theme="vs"
                  options={{ readOnly: true, minimap: { enabled: false }, fontSize: 14, padding: { top: 12, bottom: 12 } }}
                />
              </div>
            ) : null}
          </div>

          <div className="rounded-[32px] border border-[#BBF7D0] bg-white p-6 shadow-[0_20px_60px_rgba(22,163,74,0.08)] sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold text-[#0F172A]">AI SQL Generator</h2>
                <p className="mt-1 text-sm text-[#64748B]">Turn your prompt into accurate SQL with a short explanation.</p>
              </div>
              <span className="rounded-full bg-[#F4FFF6] px-3 py-1 text-sm font-medium text-[#16A34A]">SQL</span>
            </div>

            <textarea
              value={sqlPrompt}
              onChange={(event) => setSqlPrompt(event.target.value)}
              rows={6}
              className="mt-5 w-full rounded-2xl border border-[#BBF7D0] bg-[#F4FFF6] px-4 py-4 text-sm text-[#0F172A] outline-none transition focus:border-[#16A34A] focus:ring-2 focus:ring-[#22C55E]/30"
              placeholder="Find the top 5 employee salaries"
            />

            <div className="mt-5 flex flex-wrap gap-3">
              <button onClick={generateSQL} className="inline-flex items-center gap-2 rounded-2xl bg-[#16A34A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#15803D]">
                {loadingSql ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                {loadingSql ? "Generating..." : "Generate SQL"}
              </button>
              <button onClick={clearSql} className="inline-flex items-center gap-2 rounded-2xl border border-[#BBF7D0] bg-white px-5 py-3 text-sm font-semibold text-[#14532D] transition hover:bg-[#F4FFF6]">
                <RotateCcw className="h-4 w-4" /> Clear
              </button>
            </div>

            {sqlError ? <p className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{sqlError}</p> : null}

            {sqlOutput ? (
              <div className="mt-5 rounded-[24px] border border-[#BBF7D0] bg-[#F8FAFC] p-3">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-[#14532D]">Generated output</p>
                  <div className="flex gap-2">
                    <button onClick={() => copyOutput(sqlOutput)} className="inline-flex items-center gap-2 rounded-full border border-[#BBF7D0] bg-white px-3 py-2 text-sm font-semibold text-[#14532D] transition hover:bg-[#F4FFF6]">
                      <Copy className="h-4 w-4" /> Copy
                    </button>
                    <button onClick={() => downloadOutput(sqlOutput, "sql-output.sql")} className="inline-flex items-center gap-2 rounded-full border border-[#BBF7D0] bg-white px-3 py-2 text-sm font-semibold text-[#14532D] transition hover:bg-[#F4FFF6]">
                      <Download className="h-4 w-4" /> Download
                    </button>
                  </div>
                </div>
                <Editor
                  height="280px"
                  language="sql"
                  value={sqlOutput}
                  theme="vs"
                  options={{ readOnly: true, minimap: { enabled: false }, fontSize: 14, padding: { top: 12, bottom: 12 } }}
                />
              </div>
            ) : null}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
