
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "Pawsy", an expert AI Veterinary Assistant for PawPrint Wellness clinic. 
Your goal is to help pet owners understand potential health issues their pets might be facing.

Guidelines:
1. Always start by expressing empathy for the pet and owner.
2. Ask clarifying questions about the pet's species, age, and duration of symptoms.
3. Provide possible common causes for the symptoms described.
4. IMPORTANT: Always include a clear medical disclaimer: "I am an AI assistant, not a substitute for professional veterinary medical advice, diagnosis, or treatment."
5. If the user describes symptoms like bleeding, difficulty breathing, seizures, or collapse, urge them to visit an EMERGENCY VET immediately.
6. Keep responses friendly, professional, and supportive.
7. Encourage them to book an appointment at PawPrint Wellness for a definitive diagnosis.
`;

export async function getSymptomAdvice(history: { role: 'user' | 'model', text: string }[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  // Transform history to contents format
  const contents = history.map(h => ({
    role: h.role,
    parts: [{ text: h.text }]
  }));

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      },
    });

    return response.text || "I'm sorry, I'm having trouble processing that right now. Please call our clinic directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong. In case of emergency, please contact a vet clinic immediately.";
  }
}
