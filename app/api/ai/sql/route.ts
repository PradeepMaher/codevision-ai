import { NextResponse } from "next/server";
import { generateSQL } from "@/lib/ai";

export async function POST(request: Request) {
  const body = await request.json();
  const prompt = body.prompt as string;

  if (!prompt) {
    return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
  }

  try {
    const result = await generateSQL(prompt);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
