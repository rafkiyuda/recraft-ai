"use client";

import { motion } from "framer-motion";
import { Search, Filter, PlayCircle, Clock, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const TUTORIALS = [
    {
        id: 1,
        title: "How to Build a Lamp from Plastic Spoons",
        category: "Home Decor",
        author: "Budi S.",
        likes: "2.4k",
        duration: "10 mins",
        imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80"
    },
    {
        id: 2,
        title: "Vertical Garden with PET Bottles",
        category: "Gardening",
        author: "Sarah C.",
        likes: "1.8k",
        duration: "15 mins",
        imageUrl: "https://images.unsplash.com/photo-1582215286591-63ee345c2253?w=400&q=80"
    },
    {
        id: 3,
        title: "HDPE Desk Organizer Hack",
        category: "Office",
        author: "Alex Wong",
        likes: "956",
        duration: "8 mins",
        imageUrl: "https://images.unsplash.com/photo-1534073828943-f8f5379a0bc4?w=400&q=80"
    },
    {
        id: 4,
        title: "Weaving a Tote Bag from Pouches",
        category: "Fashion",
        author: "Sinta O.",
        likes: "3.1k",
        duration: "30 mins",
        imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80"
    }
];

export default function TutorialsPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col gap-6 p-4">
            {/* Header */}
            <div className="flex flex-col gap-1 mt-2">
                <h1 className="text-2xl font-bold tracking-tight text-neutral-900">DIY Guides</h1>
                <p className="text-sm text-neutral-500">Step-by-step upcycling tutorials.</p>
            </div>

            {/* Search & Filter */}
            <div className="flex gap-3 items-center">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <input
                        type="text"
                        placeholder="Search ideas (e.g., bottle, lamp)"
                        className="w-full bg-white border border-neutral-200 rounded-2xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                </div>
                <button className="p-3 bg-white border border-neutral-200 rounded-2xl">
                    <Filter className="w-5 h-5 text-neutral-600" />
                </button>
            </div>

            {/* Featured Video Tutorial */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative w-full rounded-3xl overflow-hidden bg-neutral-900 text-white shadow-lg group cursor-pointer"
            >
                <div className="relative h-48 w-full bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                            <PlayCircle className="w-8 h-8 text-white fill-white/20" />
                        </div>
                    </div>
                </div>
                <div className="p-5 flex flex-col gap-2 relative z-10 bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 left-0 right-0">
                    <div className="flex items-center gap-2">
                        <span className="bg-primary/90 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Top Pick</span>
                        <span className="text-xs text-white/80 flex items-center gap-1"><Clock className="w-3 h-3" /> 12 mins</span>
                    </div>
                    <h2 className="text-xl font-bold leading-tight">Create a Beautiful Self-Watering Planter</h2>
                </div>
            </motion.div>

            {/* Grid of Tutorials */}
            <div className="flex flex-col gap-4">
                <h3 className="font-bold text-lg text-neutral-900 mt-2">Popular Projects</h3>

                <div className="grid grid-cols-2 gap-4">
                    {TUTORIALS.map((tutorial, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * (i + 1) }}
                            key={tutorial.id}
                            className="flex flex-col rounded-3xl bg-white border border-neutral-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                        >
                            <div className="h-28 w-full bg-neutral-100 flex items-center justify-center overflow-hidden">
                                <img src={tutorial.imageUrl} alt={tutorial.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-4 flex flex-col gap-2">
                                <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">{tutorial.category}</span>
                                <h4 className="font-bold text-sm text-neutral-900 leading-tight line-clamp-2">{tutorial.title}</h4>

                                <div className="mt-2 flex items-center justify-between text-xs text-neutral-500">
                                    <span className="flex items-center gap-1"><Heart className="w-3 h-3 text-red-400" /> {tutorial.likes}</span>
                                    <span className="font-semibold text-primary flex items-center gap-1">View <ArrowRight className="w-3 h-3" /></span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
