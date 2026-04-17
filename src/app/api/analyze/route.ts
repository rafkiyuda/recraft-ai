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
      Anda adalah ahli dalam ekonomi sirkular dan upcycling.
      Analisis gambar item limbah plastik yang diberikan.
      Identifikasi jenis plastik dan berikan 3 ide upcycling DIY yang kreatif.
      Berikan respon dalam format JSON yang ketat dalam Bahasa Indonesia:
      {
        "plasticType": "Jenis Plastik",
        "description": "Deskripsi item",
        "ideas": [
          { "title": "Judul Ide", "description": "Cara pembuatannya" },
          { "title": "Judul Ide", "description": "Cara pembuatannya" },
          { "title": "Judul Ide", "description": "Cara pembuatannya" }
        ]
      }
    `;

        const cleanBase64 = imageBase64.replace(/^data:image\/(png|jpeg|webp|jpg);base64,/, "");

        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash",
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

        const textResult = result.text || "";
        const cleanedText = textResult.replace(/^```json/g, "").replace(/```$/g, "").trim();
        const jsonResponse = JSON.parse(cleanedText);

        return NextResponse.json(jsonResponse);
    } catch (error: any) {
        console.error("Analysis Error:", error);
        return NextResponse.json({
            error: "Failed to analyze image",
            details: error.message || "Unknown error"
        }, { status: 500 });
    }
}
