"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Image as ImageIcon, Zap, ChevronLeft, RefreshCw, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Webcam from "react-webcam";

type ScanResult = {
    plasticType: string;
    description: string;
    ideas: { title: string; description: string }[];
};

export default function ScanPage() {
    const router = useRouter();
    const webcamRef = useRef<Webcam>(null);

    const [isScanning, setIsScanning] = useState(false);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [result, setResult] = useState<ScanResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    const capture = useCallback(() => {
        if (webcamRef.current) {
            const imageSrcBase64 = webcamRef.current.getScreenshot();
            if (imageSrcBase64) {
                setImageSrc(imageSrcBase64);
                processImage(imageSrcBase64);
            }
        }
    }, [webcamRef]);

    const processImage = async (base64String: string) => {
        setIsScanning(true);
        setError(null);
        setResult(null);

        try {
            const response = await fetch("/api/analyze", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ imageBase64: base64String }),
            });

            if (!response.ok) {
                throw new Error("Failed to analyze image");
            }

            const data = await response.json();
            setResult(data);
        } catch (err: any) {
            setError(err.message || "An unexpected error occurred");
        } finally {
            setIsScanning(false);
        }
    };

    const resetScan = () => {
        setImageSrc(null);
        setResult(null);
        setError(null);
    };

    return (
        <div className="flex flex-col h-[calc(100vh-120px)] relative bg-black">
            {/* Top Bar over camera */}
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10 bg-gradient-to-b from-black/70 to-transparent">
                <button onClick={() => router.back()} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <span className="text-white font-medium">Scan Plastic</span>
                <div className="w-10"></div>
            </div>

            {/* Main Area */}
            <div className="flex-1 relative flex items-center justify-center overflow-hidden rounded-b-3xl">
                {!imageSrc ? (
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={{ facingMode: "environment" }}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <img src={imageSrc} alt="Captured plastic" className="w-full h-full object-cover" />
                )}

                {/* Scanning Animation overlay */}
                {isScanning && (
                    <>
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-20 flex flex-col items-center justify-center">
                            <div className="relative w-48 h-48 border-2 border-primary/50 rounded-3xl overflow-hidden">
                                <motion.div
                                    initial={{ top: "-10%" }}
                                    animate={{ top: "110%" }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 right-0 h-2 bg-primary shadow-[0_0_25px_rgba(230,122,60,1)] z-30"
                                />
                            </div>
                            <p className="text-white mt-6 font-medium animate-pulse">Analyzing Material with AI...</p>
                        </div>
                    </>
                )}
            </div>

            {/* Bottom Interface Area */}
            <div className="bg-black text-white p-6 pb-8 rounded-t-3xl relative z-40 flex flex-col items-center gap-6 min-h-[160px]">
                {/* Placeholder for layout consistency */}

                <AnimatePresence mode="wait">
                    {!result && !error && !isScanning && (
                        <motion.div
                            key="capture-mode"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="flex flex-col items-center gap-6 w-full absolute top-6 pointer-events-auto"
                        >
                            <div className="flex items-center gap-2 px-4 py-2 bg-neutral-900 rounded-full border border-neutral-800 text-sm">
                                <Zap className="w-4 h-4 text-primary" />
                                <span>Point at any plastic item</span>
                            </div>

                            <div className="flex justify-between items-center w-full px-4">
                                <button className="p-4 bg-neutral-900 rounded-full text-neutral-400 hover:text-white transition-colors">
                                    <ImageIcon className="w-6 h-6" />
                                </button>

                                <button
                                    onClick={capture}
                                    className="w-20 h-20 rounded-full border-4 border-white/20 p-1 relative flex items-center justify-center"
                                >
                                    <motion.div
                                        whileTap={{ scale: 0.9 }}
                                        className="w-full h-full rounded-full bg-primary flex items-center justify-center cursor-pointer"
                                    >
                                        <Camera className="w-8 h-8 text-white" />
                                    </motion.div>
                                </button>

                                <div className="w-14"></div>
                            </div>
                        </motion.div>
                    )}

                    {result && (
                        <motion.div
                            key="result-mode"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-full flex flex-col gap-4 text-left absolute top-6 px-6 pointer-events-auto"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold flex items-center gap-2">
                                        {result.plasticType} <CheckCircle2 className="text-primary w-6 h-6" />
                                    </h3>
                                    <p className="text-neutral-400 text-sm mt-1">{result.description}</p>
                                </div>
                                <button onClick={resetScan} className="p-2 bg-neutral-800 rounded-full text-neutral-300">
                                    <RefreshCw className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="mt-2 h-[40vh] overflow-y-auto pr-2 flex flex-col gap-3 pb-20">
                                <h4 className="font-semibold text-primary">DIY Ideas</h4>
                                {result.ideas.map((idea, index) => (
                                    <div key={index} className="bg-neutral-900 border border-neutral-800 p-4 rounded-2xl">
                                        <h5 className="font-bold text-white text-sm mb-1">{idea.title}</h5>
                                        <p className="text-neutral-400 text-xs leading-relaxed">{idea.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {error && (
                        <motion.div className="w-full text-center py-6 flex flex-col items-center gap-4 relative pointer-events-auto">
                            <p className="text-red-400">{error}</p>
                            <button
                                onClick={resetScan}
                                className="px-6 py-3 bg-neutral-800 rounded-full font-medium"
                            >
                                Try Again
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
