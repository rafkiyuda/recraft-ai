"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Leaf, Download, Share2, Globe, Award, Target } from "lucide-react";

export default function ESGPage() {
    return (
        <div className="flex flex-col gap-6 p-4 bg-neutral-50 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mt-2">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-neutral-900">ESG Impact</h1>
                    <p className="text-sm text-neutral-500">Our collective sustainability data.</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 border border-neutral-200 rounded-full bg-white shadow-sm">
                        <Share2 className="w-5 h-5 text-neutral-600" />
                    </button>
                    <button className="p-2 border border-neutral-200 rounded-full bg-white shadow-sm flex items-center gap-2">
                        <Download className="w-4 h-4 text-neutral-600" />
                        <span className="text-xs font-semibold text-neutral-700 hidden sm:block">Report</span>
                    </button>
                </div>
            </div>

            {/* Main Stats Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full relative overflow-hidden rounded-3xl bg-neutral-900 text-white shadow-xl p-6"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-secondary" />
                        <span className="font-semibold text-sm tracking-widest text-neutral-400 uppercase">Total Plastic Diverted</span>
                    </div>

                    <div className="flex items-end gap-2">
                        <h2 className="text-5xl font-black tabular-nums tracking-tight">12.5</h2>
                        <span className="text-xl text-neutral-400 font-bold mb-1">Tons</span>
                    </div>

                    <div className="flex items-center gap-2 text-green-400 text-sm font-semibold bg-green-400/10 w-fit px-3 py-1.5 rounded-full">
                        <TrendingUp className="w-4 h-4" />
                        <span>+24.5% from last month</span>
                    </div>
                </div>
            </motion.div>

            {/* Mini Grid Metrics */}
            <div className="grid grid-cols-2 gap-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white border border-neutral-100 rounded-3xl p-5 shadow-sm flex flex-col gap-3"
                >
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                        <Users className="w-5 h-5 text-blue-500" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-neutral-900">4,208</span>
                        <span className="text-xs text-neutral-500 font-medium mt-1">Active Eco-Warriors</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white border border-neutral-100 rounded-3xl p-5 shadow-sm flex flex-col gap-3"
                >
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
                        <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-neutral-900">1,450</span>
                        <span className="text-xs text-neutral-500 font-medium mt-1">Upcycled Products</span>
                    </div>
                </motion.div>
            </div>

            {/* Leaderboard or Impact Feed */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-4 mt-2"
            >
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-neutral-900 flex items-center gap-2">
                        <Award className="w-5 h-5 text-yellow-500" />
                        Community Impact
                    </h3>
                    <span className="text-xs font-semibold text-primary cursor-pointer">See All</span>
                </div>

                <div className="bg-white border border-neutral-100 rounded-3xl shadow-sm overflow-hidden">
                    {[
                        { name: "GreenSchool Bali", impact: "450 kg", rank: 1 },
                        { name: "Tech Corp CSR", impact: "320 kg", rank: 2 },
                        { name: "Budi Santoso", impact: "54 kg", rank: 3 },
                    ].map((item, i) => (
                        <div key={i} className={`flex items-center justify-between p-4 ${i !== 2 ? 'border-b border-neutral-100' : ''}`}>
                            <div className="flex items-center gap-4">
                                <div className="w-8 flex justify-center text-sm font-bold text-neutral-400">
                                    #{item.rank}
                                </div>
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-neutral-200 to-neutral-100 flex items-center justify-center font-bold text-sm text-neutral-600">
                                    {item.name.charAt(0)}
                                </div>
                                <span className="font-semibold text-neutral-900 text-sm">{item.name}</span>
                            </div>
                            <div className="text-sm font-bold text-secondary bg-green-50 px-3 py-1 rounded-full">
                                {item.impact}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Bottom Spacer */}
            <div className="h-10"></div>
        </div>
    );
}
