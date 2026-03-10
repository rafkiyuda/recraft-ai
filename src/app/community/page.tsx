"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Users,
    Flame,
    Trophy,
    MapPin,
    Search,
    ChevronRight,
    Calendar,
    UserPlus,
    Sparkles,
    CheckCircle2
} from "lucide-react";

const COMMUNITY_ACTIVITIES = [
    {
        id: 1,
        title: "Cleanup Day Pantai Ancol",
        description: "Aksi bersih-bersih pantai bersama komunitas. Sampah plastik akan didaur ulang menjadi...",
        date: "05 Mar 2025, 07:00",
        location: "Pantai Ancol, Jakarta Utara",
        participants: "Maks. 50 peserta",
        organizer: "Coastal Cleanup Indonesia",
        category: "Cleanup",
        type: "event",
        icon: <Sparkles className="w-6 h-6 text-white" />
    },
    {
        id: 2,
        title: "Workshop: Kreasi Pot dari PVC",
        description: "Ubah pipa PVC bekas menjadi pot tanaman yang estetik dan fungsional di rumah.",
        date: "12 Mar 2025, 13:00",
        location: "ReCraft Studio, Jakarta",
        participants: "Maks. 15 peserta",
        organizer: "Eco Art Studio",
        category: "Workshop",
        type: "event",
        icon: <Trophy className="w-6 h-6 text-white" />
    },
    {
        id: 3,
        title: "DIY Project: Wall Decor Eco",
        description: "Proyek DIY mingguan: membuat dekorasi dinding dari tutup botol berwarna.",
        date: "Setiap Sabtu",
        location: "Online (Zoom)",
        participants: "Unlimited",
        organizer: "ReCraft Community",
        category: "DIY Project",
        type: "event",
        icon: <MapPin className="w-6 h-6 text-white" />
    }
];

export default function CommunityPage() {
    const [selectedCategory, setSelectedCategory] = useState("Semua");

    const categories = ["Semua", "DIY Project", "Workshop", "Challenge"];

    const filteredActivities = selectedCategory === "Semua" || selectedCategory === "Challenge"
        ? COMMUNITY_ACTIVITIES
        : COMMUNITY_ACTIVITIES.filter(a => a.category === selectedCategory);

    return (
        <div className="flex flex-col gap-6 p-4 pb-24 bg-white min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mt-2">
                <div>
                    <h1 className="text-2xl font-black tracking-tight text-primary-dark">Komunitas</h1>
                    <p className="text-sm text-neutral-500 font-medium tracking-tight">Temukan aksi & tantangan hijau.</p>
                </div>
                <button className="p-2 border border-neutral-100 rounded-full bg-white shadow-sm hover:bg-neutral-50 transition-colors">
                    <Search className="w-5 h-5 text-neutral-600" />
                </button>
            </div>

            {/* Categories Navigation */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sticky top-0 bg-white/80 backdrop-blur-md z-30 border-b border-neutral-50 px-4">
                {categories.map((cat, i) => (
                    <button
                        key={i}
                        onClick={() => setSelectedCategory(cat)}
                        className={`whitespace-nowrap px-5 py-2 rounded-xl text-sm font-bold transition-all ${selectedCategory === cat
                            ? "bg-white text-primary-dark shadow-md border-b-4 border-primary scale-105"
                            : "bg-transparent text-neutral-400 hover:text-neutral-600"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Active Challenge Card (Featured) */}
            {(selectedCategory === "Semua" || selectedCategory === "Challenge") && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full relative overflow-hidden rounded-[32px] bg-gradient-to-br from-primary via-primary to-primary-dark text-white shadow-xl p-7"
                >
                    <div className="relative z-10 flex flex-col gap-4">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-black border border-white/20 uppercase tracking-widest">
                                <Flame className="w-3.5 h-3.5 text-green-300 fill-green-300" />
                                <span>Eco Challenge</span>
                            </div>
                            <span className="text-xs font-black opacity-80 uppercase tracking-wider">3 Days Left</span>
                        </div>

                        <div className="flex flex-col gap-2 mt-2">
                            <h2 className="text-3xl font-black leading-[1.15]">Create a Lamp From Plastic Bottle</h2>
                            <p className="text-sm font-medium opacity-90 leading-relaxed">
                                Join 1,240 eco-warriors and win <span className="text-green-300 font-black">500 Eco Points!</span>
                            </p>
                        </div>

                        <button className="mt-4 bg-white text-primary font-black py-4 px-10 rounded-2xl shadow-lg border-b-4 border-neutral-100 active:scale-95 transition-all text-base w-full sm:w-fit">
                            Join Challenge
                        </button>
                    </div>

                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                </motion.div>
            )}

            {/* Activities List */}
            <div className="flex flex-col gap-5 mt-2">
                <div className="flex items-center justify-between px-1">
                    <h3 className="font-black text-lg text-primary-dark tracking-tight">Aktivitas Terdekat</h3>
                    <div className="flex items-center gap-1 text-[10px] font-black text-primary uppercase tracking-widest cursor-pointer">
                        Lihat Peta <ChevronRight className="w-3 h-3" />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <AnimatePresence mode="popLayout">
                        {filteredActivities.map((activity, i) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: 0.05 * i }}
                                key={activity.id}
                                className="bg-[#f2fcf1] border border-neutral-50 rounded-[32px] p-6 shadow-sm hover:shadow-md transition-all flex flex-col gap-5 relative overflow-hidden group"
                            >
                                {/* Category Badge */}
                                <div className="absolute top-6 right-6">
                                    <span className="bg-white/90 backdrop-blur-md text-primary-dark px-3 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-wider shadow-sm border border-neutral-100">
                                        {activity.category}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {/* Icon Box */}
                                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                                        {activity.icon}
                                    </div>

                                    <div className="flex flex-col">
                                        <h4 className="text-xl font-black text-primary-dark leading-tight">{activity.title}</h4>
                                        <p className="text-xs text-neutral-500 font-medium mt-2 leading-relaxed opacity-80">
                                            {activity.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 pt-4 border-t border-primary/10">
                                    <div className="flex items-center gap-3 text-xs">
                                        <Calendar className="w-4 h-4 text-primary opacity-60" />
                                        <span className="font-bold text-neutral-600">{activity.date}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs">
                                        <MapPin className="w-4 h-4 text-primary opacity-60" />
                                        <span className="font-bold text-neutral-600">{activity.location}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs">
                                        <Users className="w-4 h-4 text-primary opacity-60" />
                                        <span className="font-bold text-neutral-600">{activity.participants}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-1 pt-4 border-t border-primary/5">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] text-neutral-400 font-black uppercase tracking-widest">Organizer</span>
                                        <span className="text-sm font-black text-primary-dark">{activity.organizer}</span>
                                    </div>
                                    <button className="flex items-center gap-2 bg-primary text-white text-xs font-black px-6 py-3 rounded-2xl shadow-lg shadow-primary/20 active:scale-95 transition-all">
                                        <UserPlus className="w-4 h-4" /> Gabung
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Empty State */}
            {filteredActivities.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-center opacity-40">
                    <CheckCircle2 className="w-16 h-16 text-neutral-300 mb-4" />
                    <p className="text-sm font-bold text-neutral-400">Belum ada aktivitas di kategori ini.</p>
                </div>
            )}

            <div className="h-5"></div>
        </div>
    );
}
