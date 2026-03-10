import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
    try {
        const { imageBase64 } = await req.json();

        if (!imageBase64) {
            return NextResponse.json({ error: "No image provided" }, { status: 400 });
        }

        const ai = new GoogleGenAI({
            apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || "",
        });

        const prompt = `
      You are an expert in circular economy and upcycling. 
      Analyze the provided image of a plastic waste item. 
      1. Identify the likely type of plastic (e.g., PET, HDPE, PVC, LDPE, PP, PS, OR Other).
      2. Provide 3 specific, creative, and practical DIY upcycling ideas for this exact item.
      Respond in strict JSON format with this structure:
      {
        "plasticType": "Name of Plastic Type Detected",
        "description": "Short description of what the item appears to be",
        "ideas": [
          { "title": "Idea 1 Title", "description": "Short description of how to make it" },
          { "title": "Idea 2 Title", "description": "Short description of how to make it" },
          { "title": "Idea 3 Title", "description": "Short description of how to make it" }
        ]
      }
      Do not include any markdown formatting wrappers like \`\`\`json. Just output the raw JSON string.
    `;

        // Strip the data:image/jpeg;base64, prefix if present
        const cleanBase64 = imageBase64.replace(/^data:image\/(png|jpeg|webp|jpg);base64,/, "");

        const response = await ai.models.generateContent({
            model: "gemini-2.5-pro",
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: prompt },
                        {
                            inlineData: {
                                mimeType: "image/jpeg",
                                data: cleanBase64
                            }
                        }
                    ]
                }
            ]
        });

        const textResult = response.text || "";
        // Clean up possible markdown artifacts if model ignored the instruction
        const cleanedText = textResult.replace(/^```json/g, "").replace(/```$/g, "").trim();

        const jsonResponse = JSON.parse(cleanedText);

        return NextResponse.json(jsonResponse);
    } catch (error) {
        console.error("Error analyzing image:", error);
        return NextResponse.json({ error: "Failed to analyze image" }, { status: 500 });
    }
}
