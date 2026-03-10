"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Share2, Heart, Star, ShoppingBag, ShieldCheck, Leaf } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const { id } = use(params);

    // Mock checking the product based on ID (simplified for MVP)
    const isSkateboard = id === "2";

    return (
        <div className="flex flex-col min-h-screen bg-neutral-50 pb-24">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10 w-full max-w-md mx-auto pointer-events-none">
                <button onClick={() => router.back()} className="p-2 bg-white/50 backdrop-blur-md rounded-full text-neutral-900 pointer-events-auto border border-white/20">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-2 pointer-events-auto">
                    <button className="p-2 bg-white/50 backdrop-blur-md rounded-full text-neutral-900 border border-white/20">
                        <Share2 className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-white/50 backdrop-blur-md rounded-full text-neutral-900 border border-white/20">
                        <Heart className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Product Image Area */}
            <div className="w-full h-80 bg-neutral-200 rounded-b-3xl overflow-hidden relative shadow-sm">
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    src={isSkateboard ? 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?w=800&q=80' : 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80'}
                    alt="Product"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col p-5 gap-5">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <span className="text-primary font-semibold text-xs flex items-center gap-1"><Leaf className="w-3 h-3" /> 100% Upcycled</span>
                        <div className="flex items-center gap-1 text-sm text-neutral-600 font-medium">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>4.9</span>
                            <span className="text-neutral-400">(124 reviews)</span>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold text-neutral-900 leading-tight">
                        {isSkateboard ? 'HDPE Skateboard Deck (Premium)' : 'Woven Totebag from Reclaimed Sachet'}
                    </h1>

                    <div className="text-primary font-bold text-2xl mt-1">
                        {isSkateboard ? 'Rp 850.000' : 'Rp 125.000'}
                    </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-neutral-100">
                    <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-500">
                        {isSkateboard ? 'BR' : 'EB'}
                    </div>
                    <div className="flex flex-col flex-1">
                        <span className="text-sm font-bold text-neutral-900">{isSkateboard ? 'Board Rebuilders' : 'Eco Crafters Bali'}</span>
                        <span className="text-xs text-neutral-500">Verified Upcycler ✓</span>
                    </div>
                    <button className="text-xs px-3 py-1.5 rounded-full border border-neutral-300 font-medium">Follow</button>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-neutral-900">About Product</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                        {isSkateboard
                            ? "Made from 100% recycled High-Density Polyethylene (HDPE) collected from local beaches. Each board is hand-pressed and completely unique in color pattern while maintaining professional-grade durability."
                            : "Beautifully hand-woven tote bag made entirely from reclaimed coffee sachets. Water-resistant, extremely durable, and perfect for your daily grocery runs while saving hundreds of plastics from landfills."}
                    </p>
                </div>

                <div className="flex flex-col gap-3 mt-2">
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                        <ShieldCheck className="w-5 h-5 text-green-500" />
                        <span>Quality Guaranteed</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                        <Leaf className="w-5 h-5 text-primary" />
                        <span>Saves {isSkateboard ? '2.5kg' : '0.8kg'} of plastic waste</span>
                    </div>
                </div>
            </div>

            {/* Bottom Actions Fixed */}
            <div className="fixed bottom-[84px] left-0 right-0 p-4 max-w-md mx-auto bg-white/80 backdrop-blur-md border-t border-neutral-200 flex items-center gap-3 z-40">
                <button className="p-4 border border-neutral-200 rounded-2xl bg-white hover:bg-neutral-50 transition-colors">
                    <ShoppingBag className="w-6 h-6 text-neutral-700" />
                </button>
                <button className="flex-1 bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/30 flex justify-center items-center gap-2 hover:bg-primary-dark transition-colors">
                    Buy Now
                </button>
            </div>
        </div>
    );
}
