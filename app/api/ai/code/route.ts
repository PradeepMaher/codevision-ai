import { NextResponse } from "next/server";
import { explainCode } from "@/lib/ai";

export async function POST(request: Request) {
  const body = await request.json();
  const code = body.code as string;
  const language = body.language as string;

  if (!code || !language) {
    return NextResponse.json({ error: "Missing code or language" }, { status: 400 });
  }

  try {
    const result = await explainCode(code, language);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
