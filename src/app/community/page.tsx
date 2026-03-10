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
    const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: "", visible: false });
    const [activeModal, setActiveModal] = useState<"challenge" | "event" | "host" | null>(null);
    const [selectedEvent, setSelectedEvent] = useState<any>(null);
    const [isJoinedChallenge, setIsJoinedChallenge] = useState(false);
    const [joinedEvents, setJoinedEvents] = useState<number[]>([]);

    const showToast = (msg: string) => {
        setToast({ message: msg, visible: true });
        setTimeout(() => setToast({ message: "", visible: false }), 3000);
    };

    const categories = ["Semua", "DIY Project", "Workshop", "Challenge"];

    const filteredActivities = selectedCategory === "Semua" || selectedCategory === "Challenge"
        ? COMMUNITY_ACTIVITIES
        : COMMUNITY_ACTIVITIES.filter(a => a.category === selectedCategory);

    const handleJoinChallenge = () => {
        setIsJoinedChallenge(true);
        setActiveModal(null);
        showToast("Anda telah bergabung dalam tantangan!");
    };

    const handleJoinEvent = (id: number) => {
        setJoinedEvents([...joinedEvents, id]);
        setActiveModal(null);
        showToast("Pendaftaran event berhasil!");
    };

    return (
        <div className="flex flex-col gap-6 p-4 pb-24 bg-white min-h-screen relative">
            {/* Toast Notification */}
            <AnimatePresence>
                {toast.visible && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, x: "-50%" }}
                        animate={{ opacity: 1, y: 20, x: "-50%" }}
                        exit={{ opacity: 0, y: -20, x: "-50%" }}
                        className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] bg-primary-dark text-white px-6 py-3 rounded-2xl shadow-2xl font-bold flex items-center gap-2 border border-white/10"
                    >
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        {toast.message}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Modals Overlay */}
            <AnimatePresence>
                {activeModal && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveModal(null)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed inset-x-4 top-[15%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[400px] z-[80] bg-white rounded-[40px] p-8 shadow-2xl overflow-hidden"
                        >
                            {activeModal === "challenge" && (
                                <div className="flex flex-col gap-6 items-center text-center">
                                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                                        <Flame className="w-10 h-10 text-primary fill-primary" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-2xl font-black text-primary-dark">Gabung Tantangan?</h3>
                                        <p className="text-sm text-neutral-500 font-medium">Buat lampu dari botol plastik, kumpulkan <span className="text-primary font-bold">500 Eco Points</span>, dan jadilah pahlawan lingkungan!</p>
                                    </div>
                                    <div className="flex flex-col w-full gap-3 mt-4">
                                        <button
                                            onClick={handleJoinChallenge}
                                            className="w-full bg-primary text-white font-black py-4 rounded-2xl shadow-lg border-b-4 border-primary-dark active:scale-95 transition-all"
                                        >
                                            Ya, Saya Bergabung!
                                        </button>
                                        <button
                                            onClick={() => setActiveModal(null)}
                                            className="w-full bg-neutral-50 text-neutral-400 font-bold py-4 rounded-2xl active:scale-95 transition-all"
                                        >
                                            Nanti Saja
                                        </button>
                                    </div>
                                </div>
                            )}

                            {activeModal === "event" && selectedEvent && (
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shrink-0">
                                            {selectedEvent.icon}
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="text-xl font-black text-primary-dark leading-tight">{selectedEvent.title}</h3>
                                            <span className="text-xs font-bold text-primary uppercase tracking-widest">{selectedEvent.category}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex flex-col gap-1">
                                            <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest px-1">Nama Lengkap</label>
                                            <input type="text" placeholder="Masukkan nama Anda" className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-5 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest px-1">Nomor WhatsApp</label>
                                            <input type="tel" placeholder="0812..." className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-5 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleJoinEvent(selectedEvent.id)}
                                        className="w-full bg-primary text-white font-black py-4 rounded-2xl shadow-lg border-b-4 border-primary-dark active:scale-95 transition-all mt-4"
                                    >
                                        Daftar Sekarang
                                    </button>
                                </div>
                            )}

                            {activeModal === "host" && (
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-1 text-center items-center">
                                        <div className="w-16 h-16 bg-primary-dark/10 rounded-full flex items-center justify-center mb-2">
                                            <Users className="w-8 h-8 text-primary-dark" />
                                        </div>
                                        <h3 className="text-2xl font-black text-primary-dark tracking-tight">Buat Event Baru</h3>
                                        <p className="text-xs text-neutral-400 font-medium px-4">Ajukan kegiatan komunitasmu untuk ditinjau oleh tim ReCraft.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <input type="text" placeholder="Nama Event" className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-5 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                                        <select className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-5 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                                            <option>Pilih Kategori</option>
                                            <option>Cleanup</option>
                                            <option>Workshop</option>
                                            <option>DIY Project</option>
                                        </select>
                                        <input type="text" placeholder="Lokasi Event" className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-5 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                                    </div>
                                    <button
                                        onClick={() => {
                                            setActiveModal(null);
                                            showToast("Pengajuan event terkirim!");
                                        }}
                                        className="w-full bg-primary-dark text-white font-black py-4 rounded-2xl shadow-lg border-b-4 border-black/20 active:scale-95 transition-all mt-2"
                                    >
                                        Ajukan Event
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

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
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sticky top-0 bg-white/80 backdrop-blur-md z-30 border-b border-neutral-50">
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

                        {isJoinedChallenge ? (
                            <div className="mt-4 bg-white/20 backdrop-blur-md text-white font-black py-4 px-10 rounded-2xl flex items-center justify-center gap-2 border border-white/30">
                                <CheckCircle2 className="w-5 h-5 text-green-300" />
                                Sudah Bergabung
                            </div>
                        ) : (
                            <button
                                onClick={() => setActiveModal("challenge")}
                                className="mt-4 bg-white text-primary font-black py-4 px-10 rounded-2xl shadow-lg border-b-4 border-neutral-100 active:scale-95 transition-all text-base w-full sm:w-fit"
                            >
                                Join Challenge
                            </button>
                        )}
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
                        {filteredActivities.map((activity, i) => {
                            const isJoined = joinedEvents.includes(activity.id);
                            return (
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
                                        {isJoined ? (
                                            <div className="bg-primary/10 text-primary text-xs font-black px-6 py-3 rounded-2xl flex items-center gap-1 border border-primary/20">
                                                <CheckCircle2 className="w-4 h-4" /> Terdaftar
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => {
                                                    setSelectedEvent(activity);
                                                    setActiveModal("event");
                                                }}
                                                className="flex items-center gap-2 bg-primary text-white text-xs font-black px-6 py-3 rounded-2xl shadow-lg shadow-primary/20 active:scale-95 transition-all focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                            >
                                                <UserPlus className="w-4 h-4" /> Gabung
                                            </button>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>

            {/* Create Community / Event Button */}
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setActiveModal("host")}
                className="w-full bg-primary-dark text-white font-black py-5 rounded-[24px] shadow-xl flex justify-center items-center gap-3 hover:bg-black active:scale-[0.98] transition-all mt-4 border-b-4 border-black/20"
            >
                <Users className="w-6 h-6 text-green-400" />
                <span>Buat Komunitas / Event</span>
            </motion.button>

            {/* Empty State */}
            {filteredActivities.length === 0 && (selectedCategory !== "Semua" && selectedCategory !== "Challenge") && (
                <div className="flex flex-col items-center justify-center py-20 text-center opacity-40">
                    <CheckCircle2 className="w-16 h-16 text-neutral-300 mb-4" />
                    <p className="text-sm font-bold text-neutral-400">Belum ada aktivitas di kategori ini.</p>
                </div>
            )}

            <div className="h-10"></div>
        </div>
    );
}
