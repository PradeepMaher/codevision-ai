"use client";

import { useMemo, useState } from "react";
import Editor, { OnChange, OnMount } from "@monaco-editor/react";
import { ChevronDown, Play, RefreshCcw, Save } from "lucide-react";

const languageOptions = ["javascript", "typescript", "python", "java", "sql"];

export default function EditorWorkspace() {
  const [language, setLanguage] = useState("javascript");
  const [content, setContent] = useState<string>("// Write your code or SQL here\n");

  const placeholder = useMemo(() => {
    if (language === "sql") {
      return "SELECT * FROM employees WHERE salary > 100000;";
    }

    return `function example() {\n  console.log(\"Hello CodeVision AI\");\n}`;
  }, [language]);

  const handleRun = () => {
    console.log("Run code", language, content);
  };

  return (
    <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4 shadow-xl shadow-slate-950/20">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {languageOptions.map((option) => (
            <button
              key={option}
              onClick={() => setLanguage(option)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                language === option ? "bg-cyan-500 text-slate-950" : "bg-slate-900 text-slate-300 hover:bg-slate-800"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-800">
            <RefreshCcw size={16} /> Clear
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400" onClick={handleRun}>
            <Play size={16} /> Run
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-800">
            <Save size={16} /> Save
          </button>
        </div>
      </div>

      <Editor
        height="520px"
        defaultLanguage={language}
        language={language}
        defaultValue={placeholder}
        value={content}
        onChange={(value) => setContent(value ?? "")}
        theme="vs-dark"
        options={{ minimap: { enabled: false }, fontSize: 14, tabSize: 2 }}
      />
    </div>
  );
}
