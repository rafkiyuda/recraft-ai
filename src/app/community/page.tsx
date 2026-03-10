"use client";

import { motion } from "framer-motion";
import { Users, Flame, Trophy, MapPin, Search, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CommunityPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col gap-6 p-4">
            {/* Header */}
            <div className="flex justify-between items-center mt-2">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Community</h1>
                    <p className="text-sm text-neutral-500">Join challenges & activities.</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 border border-neutral-200 rounded-full bg-white shadow-sm cursor-pointer">
                        <Search className="w-5 h-5 text-neutral-600" />
                    </button>
                </div>
            </div>

            {/* Active Challenge Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-light to-primary text-white shadow-xl p-6"
            >
                <div className="relative z-10 flex flex-col gap-2">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-1 bg-white/30 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold border border-white/40">
                            <Flame className="w-3.5 h-3.5 text-green-300 fill-green-300" />
                            <span>Eco Challenge</span>
                        </div>
                        <span className="text-xs font-medium text-white/80">3 Days Left</span>
                    </div>

                    <h2 className="text-2xl font-bold leading-tight mt-2">Create a Lamp From Plastic Bottle</h2>
                    <p className="text-xs text-white/90">Join 1,240 eco-warriors and win 500 Eco Points!</p>

                    <button className="mt-4 bg-white text-primary font-bold py-3 px-6 rounded-2xl shadow-sm hover:scale-105 transition-transform w-fit text-sm">
                        Join Challenge
                    </button>
                </div>

                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            </motion.div>

            {/* Leaderboard Sneak Peek */}
            <div className="bg-white border border-neutral-100 rounded-3xl p-5 shadow-sm flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                            <Trophy className="w-4 h-4 text-yellow-500" />
                        </div>
                        <h3 className="font-bold text-neutral-900">Top Creators This Week</h3>
                    </div>
                    <ChevronRight className="w-5 h-5 text-neutral-400" />
                </div>

                <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide">
                    {["Sarah C.", "Budi S.", "Alicia", "Kyo"].map((name, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 min-w-[72px]">
                            <div className="w-16 h-16 rounded-full bg-neutral-100 border-2 border-primary overflow-hidden flex items-center justify-center text-xl font-bold text-neutral-400">
                                {name.charAt(0)}
                            </div>
                            <span className="text-xs font-medium text-neutral-600">{name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Local Cleanup Events ("Bersih Tempatmu") */}
            <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-neutral-900">Local Cleanup Events</h3>
                    <span className="text-xs font-semibold text-primary cursor-pointer">View Map</span>
                </div>

                <div className="flex flex-col gap-3">
                    {[
                        { title: "Beach Cleanup & Sort", loc: "Kuta Beach, Bali", date: "Saturday, 08:00 AM", org: "Ocean Care" },
                        { title: "City Park Eco Walk", loc: "Suropati Park, JKT", date: "Sunday, 06:30 AM", org: "JKT Green" }
                    ].map((event, i) => (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * i }}
                            key={i}
                            className="flex items-center gap-4 p-4 rounded-3xl bg-white border border-neutral-100 shadow-sm cursor-pointer hover:shadow-md transition-all"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                                <MapPin className="w-6 h-6 text-blue-500" />
                            </div>
                            <div className="flex flex-col flex-1">
                                <h4 className="font-bold text-neutral-900 leading-tight">{event.title}</h4>
                                <p className="text-[10px] text-neutral-500 mt-1">{event.date}</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-[10px] font-medium text-primary bg-green-50 px-2 py-0.5 rounded-md">{event.org}</span>
                                    <span className="text-[10px] text-neutral-400">• {event.loc}</span>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-neutral-300" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Build Together action */}
            <button className="w-full bg-neutral-900 text-white font-bold py-4 rounded-2xl shadow-lg mt-4 flex justify-center items-center gap-2 hover:bg-neutral-800 transition-colors">
                <Users className="w-5 h-5" /> Host an Event
            </button>

            <div className="h-20"></div>
        </div>
    );
}
