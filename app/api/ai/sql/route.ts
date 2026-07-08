import { NextResponse } from "next/server";
import { generateAI } from "@/lib/ai";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const prompt = typeof body?.prompt === "string" ? body.prompt.trim() : "";

    if (!prompt) {
      return NextResponse.json({ error: "A SQL prompt is required." }, { status: 400 });
    }

    const sqlPrompt = `Generate a correct SQL query for the following request. Return the SQL and a short explanation.\n\nUser request:\n${prompt}`;

    const result = await generateAI(sqlPrompt, {
      systemPrompt: "You are a SQL expert. Return correct SQL, clear explanations, and avoid unsafe or invalid syntax.",
      temperature: 0.4,
      maxTokens: 2048,
    });

    return NextResponse.json({ result });
  } catch (error) {
    console.error("AI SQL generation failed", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to generate SQL." },
      { status: 502 }
    );
  }
}
