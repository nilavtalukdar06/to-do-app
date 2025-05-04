import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main(title) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: title.toString().trim(),
    config: {
      systemInstruction:
        "You are an expert at generating concise task descriptions based on task titles. Given a valid task title, generate a task description in 10-20 words that clearly conveys the task's objective. If the title is missing or nonsensical, generate a realistic, AI-enhanced task title and its corresponding description.",
    },
  });
  return response.text;
}

export default main;
