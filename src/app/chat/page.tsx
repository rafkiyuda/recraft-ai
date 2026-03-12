"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Send,
    ChevronLeft,
    Bot,
    User,
    Trash2,
    Sparkles,
    Info
} from "lucide-react";
import { useRouter } from "next/navigation";

type Message = {
    role: "user" | "assistant";
    content: string;
};

export default function ChatPage() {
    const router = useRouter();
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Halo! Saya ReCraft AI Assistant. Ada yang bisa saya bantu seputar lingkungan atau daur ulang hari ini?" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        setMessages(prev => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, { role: "user", content: userMessage }]
                }),
            });

            if (!response.ok) throw new Error("Gagal mengirim pesan");

            const data = await response.json();
            setMessages(prev => [...prev, { role: "assistant", content: data.content }]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages(prev => [...prev, { role: "assistant", content: "Maaf, terjadi kesalahan. Tolong coba lagi nanti." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const clearChat = () => {
        setMessages([{ role: "assistant", content: "Halo! Saya ReCraft AI Assistant. Ada yang bisa saya bantu seputar lingkungan atau daur ulang hari ini?" }]);
    };

    return (
        <div className="flex flex-col h-screen bg-[#f8fafc] overflow-hidden">
            {/* Header */}
            <div className="bg-white border-b border-neutral-100 p-4 shrink-0 flex items-center justify-between z-10 shadow-sm">
                <div className="flex items-center gap-3">
                    <button onClick={() => router.back()} className="p-2 hover:bg-neutral-50 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-neutral-600" />
                    </button>
                    <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                            <Bot className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-base font-black text-primary-dark leading-tight">Eco-Assistant</h1>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Online</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    onClick={clearChat}
                    className="p-2 text-neutral-400 hover:text-red-500 transition-colors"
                >
                    <Trash2 className="w-5 h-5" />
                </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-32 pt-6">
                {messages.map((m, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        key={i}
                        className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                        <div className={`flex gap-3 max-w-[85%] ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-sm border ${m.role === "user"
                                    ? "bg-primary text-white border-primary"
                                    : "bg-white text-neutral-500 border-neutral-100"
                                }`}>
                                {m.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                            </div>
                            <div className={`p-4 rounded-3xl text-sm leading-relaxed shadow-sm ${m.role === "user"
                                    ? "bg-primary-dark text-white rounded-tr-none border border-black/5"
                                    : "bg-white text-neutral-700 rounded-tl-none border border-neutral-100"
                                }`}>
                                {m.content}
                            </div>
                        </div>
                    </motion.div>
                ))}

                {isLoading && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                    >
                        <div className="flex gap-3 max-w-[85%]">
                            <div className="w-8 h-8 bg-white border border-neutral-100 rounded-xl flex items-center justify-center shrink-0">
                                <Bot className="w-4 h-4 text-neutral-400" />
                            </div>
                            <div className="bg-white border border-neutral-100 p-4 rounded-3xl rounded-tl-none shadow-sm flex gap-1.5">
                                <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce"></span>
                                <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                            </div>
                        </div>
                    </motion.div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc] to-transparent pointer-events-none">
                <div className="max-w-screen-md mx-auto pointer-events-auto">
                    <div className="bg-white p-2 rounded-[32px] shadow-2xl border border-neutral-100 flex items-center gap-2 group focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Tanya apa saja..."
                            className="flex-1 bg-transparent px-4 py-3 text-sm font-medium focus:outline-none placeholder:text-neutral-400"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim() || isLoading}
                            className={`p-4 rounded-2xl transition-all ${!input.trim() || isLoading
                                    ? "bg-neutral-100 text-neutral-300"
                                    : "bg-primary text-white shadow-lg shadow-primary/30 active:scale-95"
                                }`}
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-3 pb-2 opacity-50">
                        <div className="flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-primary" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-neutral-500">AI Powered</span>
                        </div>
                        <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
                        <div className="flex items-center gap-1">
                            <Info className="w-3 h-3 text-neutral-400" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-neutral-500">Recycling Guide</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
