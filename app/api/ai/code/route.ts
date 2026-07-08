import { NextResponse } from "next/server";
import { generateAI } from "@/lib/ai";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const prompt = typeof body?.prompt === "string" ? body.prompt.trim() : "";
    const language = typeof body?.language === "string" ? body.language.trim() : "";

    if (!prompt) {
      return NextResponse.json({ error: "A prompt is required." }, { status: 400 });
    }

    const languageHint = language ? `Generate ${language} code.` : "Generate code.";
    const result = await generateAI(`${languageHint}\n\nUser request:\n${prompt}`, {
      systemPrompt:
        "You are CodeVision AI. Generate clean, production-ready code with a brief explanation and complexity notes.",
      temperature: 0.6,
      maxTokens: 2048,
    });

    return NextResponse.json({ result });
  } catch (error) {
    console.error("AI code generation failed", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to generate code." },
      { status: 502 }
    );
  }
}
