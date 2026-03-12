import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: "Invalid messages provided" }, { status: 400 });
        }

        const ai = new GoogleGenAI({
            apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || "",
        });

        const systemPrompt = `
      You are ReCraft AI Assistant, a friendly and expert guide in circular economy, plastic upcycling, and sustainable living. 
      Your goal is to help users identify how to recycle or upcycle waste and provide tips for a greener lifestyle.
      Keep your answers concise, practical, and encouraging. Use Indonesian as the primary language.
    `;

        const result = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: [
                {
                    role: "user",
                    parts: [{ text: systemPrompt }],
                },
                {
                    role: "model",
                    parts: [{ text: "Halo! Saya ReCraft AI Assistant. Ada yang bisa saya bantu seputar lingkungan atau daur ulang hari ini?" }],
                },
                ...messages.map((m: any) => ({
                    role: m.role === "assistant" ? "model" : "user",
                    parts: [{ text: m.content }],
                })),
            ],
        });

        const responseText = result.text || "Maaf, saya tidak bisa menjawab itu sekarang.";
        return NextResponse.json({ content: responseText });
    } catch (error: any) {
        console.error("Chat API Error:", error);
        return NextResponse.json({
            error: "Chat failed",
            details: error.message || "Unknown error"
        }, { status: 500 });
    }
}
