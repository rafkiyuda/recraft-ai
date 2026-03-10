"use client";

import { motion } from "framer-motion";
import {
    ChevronLeft,
    TrendingUp,
    Recycle,
    Leaf,
    Users,
    Globe,
    BarChart3,
    PieChart,
    ArrowUpRight,
    Trophy,
    Calendar
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ImpactPage() {
    const router = useRouter();

    const stats = [
        { label: "Total Sampah Terkumpul", value: "12,450 kg", icon: <Recycle />, color: "bg-emerald-500", trend: "+12.5%" },
        { label: "CO2 Terselamatkan", value: "8,920 kg", icon: <Leaf />, color: "bg-green-600", trend: "+8.2%" },
        { label: "Pengguna Aktif", value: "3,200+", icon: <Users />, color: "bg-blue-600", trend: "+15.3%" },
        { label: "Produk Upcycle", value: "450+", icon: <BarChart3 />, color: "bg-amber-600", trend: "+20.1%" },
    ];

    const wasteTypes = [
        { type: "PET (Botol)", amount: "45%", color: "bg-blue-400" },
        { type: "HDPE (Tutup Botol)", amount: "25%", color: "bg-emerald-400" },
        { type: "PP (Kemasan)", amount: "20%", color: "bg-amber-400" },
        { type: "Lainnya", amount: "10%", color: "bg-neutral-300" },
    ];

    const topContributors = [
        { name: "Pionir Hijau Polinema", waste: "1,240 kg", points: "4,500", rank: 1 },
        { name: "Budi Santoso", waste: "890 kg", points: "3,200", rank: 2 },
        { name: "Siti Aminah", waste: "750 kg", points: "2,800", rank: 3 },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-neutral-50 pb-20">
            {/* Header */}
            <div className="bg-white p-4 sticky top-0 z-30 border-b border-neutral-100 flex items-center gap-4">
                <button onClick={() => router.back()} className="p-2 hover:bg-neutral-50 rounded-full transition-colors">
                    <ChevronLeft className="w-6 h-6 text-neutral-900" />
                </button>
                <div>
                    <h1 className="text-xl font-black text-primary-dark">Data & Impact</h1>
                    <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">Komunitas ReCraft</p>
                </div>
            </div>

            <div className="p-5 flex flex-col gap-8">
                {/* Hero Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full bg-gradient-to-br from-primary-dark to-emerald-900 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl"
                >
                    <div className="relative z-10">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Status Komunitas</span>
                        <h2 className="text-3xl font-black mt-2 leading-tight">Dampak Nyata Bersama</h2>
                        <div className="flex items-center gap-4 mt-6">
                            <div className="flex flex-col">
                                <span className="text-xs opacity-60 font-bold uppercase tracking-widest">Global Rank</span>
                                <span className="text-2xl font-black">#12 <span className="text-xs font-bold text-emerald-400">Asia</span></span>
                            </div>
                            <div className="w-[1px] h-10 bg-white/20"></div>
                            <div className="flex flex-col">
                                <span className="text-xs opacity-60 font-bold uppercase tracking-widest">Eco Points</span>
                                <span className="text-2xl font-black">450K+</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <Globe className="absolute bottom-4 right-4 w-24 h-24 opacity-10" />
                </motion.div>

                {/* Stats Grid */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-black text-primary-dark flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" /> Ringkasan Statistik
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, i) => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 * i }}
                                key={i}
                                className="bg-white p-5 rounded-3xl border border-neutral-100 shadow-sm flex flex-col gap-3"
                            >
                                <div className={`w-10 h-10 ${stat.color} text-white rounded-2xl flex items-center justify-center shadow-lg shadow-opacity-20`}>
                                    {stat.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-tight">{stat.label}</span>
                                    <span className="text-lg font-black text-neutral-900">{stat.value}</span>
                                    <span className="text-[10px] font-bold text-emerald-500 mt-1 flex items-center gap-1">
                                        <ArrowUpRight className="w-3 h-3" /> {stat.trend} bulan ini
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Waste Distribution */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-black text-primary-dark flex items-center gap-2">
                        <PieChart className="w-5 h-5" /> Distribusi Jenis Sampah
                    </h3>
                    <div className="bg-white p-6 rounded-[32px] border border-neutral-100 shadow-sm flex flex-col gap-6">
                        <div className="flex h-4 w-full rounded-full bg-neutral-100 overflow-hidden shadow-inner">
                            {wasteTypes.map((type, i) => (
                                <div key={i} className={`h-full ${type.color}`} style={{ width: type.amount }}></div>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                            {wasteTypes.map((type, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className={`w-3 h-3 rounded-full ${type.color}`}></div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-neutral-400 uppercase tracking-tight">{type.type}</span>
                                        <span className="text-sm font-bold text-neutral-800">{type.amount}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Top Contributors */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-black text-primary-dark flex items-center gap-2">
                        <Trophy className="w-5 h-5" /> Top Kontributor
                    </h3>
                    <div className="flex flex-col gap-3">
                        {topContributors.map((user, i) => (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i }}
                                key={i}
                                className="bg-white p-4 rounded-3xl border border-neutral-100 shadow-sm flex items-center gap-4 transition-transform active:scale-[0.98]"
                            >
                                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black ${i === 0 ? 'bg-amber-100 text-amber-600 shadow-inner' :
                                        i === 1 ? 'bg-slate-100 text-slate-400 shadow-inner' :
                                            'bg-orange-50 text-orange-400 shadow-inner'
                                    }`}>
                                    {user.rank}
                                </div>
                                <div className="flex flex-col flex-1">
                                    <span className="font-bold text-neutral-900 text-sm">{user.name}</span>
                                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">{user.waste} • {user.points} XP</span>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-neutral-200" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Footer Info */}
                <div className="bg-emerald-50 p-6 rounded-[32px] border border-emerald-100 flex items-center gap-4 mt-4">
                    <Calendar className="w-8 h-8 text-emerald-500" />
                    <p className="text-[10px] text-emerald-800 font-bold leading-relaxed uppercase tracking-widest">
                        Data diperbarui setiap 24 jam. Mari terus berkontribusi untuk masa depan yang lebih hijau!
                    </p>
                </div>
            </div>
        </div>
    );
}
