import { env } from "process";

const BASE_URL = "https://api.llama.ai";

export async function explainCode(code: string, language: string) {
  const apiKey = process.env.LLAMA_API_KEY;
  if (!apiKey) {
    throw new Error("Missing LLAMA_API_KEY");
  }

  const response = await fetch(`${BASE_URL}/v1/explain`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ code, language }),
  });

  if (!response.ok) {
    throw new Error("AI explain endpoint returned an error");
  }

  return response.json();
}

export async function generateSQL(prompt: string) {
  const apiKey = process.env.LLAMA_API_KEY;
  if (!apiKey) {
    throw new Error("Missing LLAMA_API_KEY");
  }

  const response = await fetch(`${BASE_URL}/v1/sql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error("AI sql endpoint returned an error");
  }

  return response.json();
}
