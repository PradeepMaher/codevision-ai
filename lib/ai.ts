import Groq from "groq-sdk";

const getGroqApiKey = () => {
  const apiKey = process.env.GROQ_API_KEY || process.env.AI_API_KEY;

  if (!apiKey) {
    throw new Error("Missing GROQ_API_KEY or AI_API_KEY environment variable.");
  }

  return apiKey;
};

const buildClient = () => new Groq({ apiKey: getGroqApiKey() });

export async function generateAI(
  prompt: string,
  options?: {
    systemPrompt?: string;
    temperature?: number;
    maxTokens?: number;
    retries?: number;
  }
) {
  const systemPrompt =
    options?.systemPrompt ??
    `You are CodeVision AI, an expert programming mentor. Provide clear, practical answers with concise explanations, code samples, complexity notes, and SQL guidance when relevant.`;

  const maxTokens = options?.maxTokens ?? 2048;
  const retries = options?.retries ?? 1;

  let lastError: unknown;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const client = buildClient();
      const completion = await client.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt },
        ],
        temperature: options?.temperature ?? 0.7,
        max_tokens: maxTokens,
      });

      return completion.choices[0]?.message?.content || "No response generated";
    } catch (error) {
      lastError = error;

      if (attempt < retries) {
        continue;
      }

      console.error("Groq AI request failed", error);
      throw new Error("The AI service is temporarily unavailable. Please try again shortly.");
    }
  }

  throw new Error(lastError instanceof Error ? lastError.message : "The AI service is temporarily unavailable.");
}

