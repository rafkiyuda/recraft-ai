"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ChevronRight, Star, Clock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const WORKSHOPS = [
    {
        id: 1,
        title: "Workshop Tas Dari Botol Plastik",
        description: "Pelajari cara membuat tas cantik dari botol plastik bekas. Cocok untuk pemula yang ingin...",
        instructor: "Ibu Rina Pratiwi",
        date: "15 Februari 2025",
        time: "09:00 WIB",
        location: "Offline",
        type: "upcycle",
        category: "Prakarya Eco",
        price: "Rp 75.000",
        spots: 5,
        rating: 4.8,
        imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80"
    },
    {
        id: 2,
        title: "Edukasi Pengelolaan Sampah Rumah Tangga",
        description: "Kelas online tentang cara memilah dan mengelola sampah di rumah dengan efektif....",
        instructor: "Dr. Ahmad Hidayat",
        date: "20 Februari 2025",
        time: "14:00 WIB",
        location: "Online",
        type: "edukasi",
        category: "Daur Ulang DIY",
        price: "Gratis",
        spots: 12,
        rating: 4.9,
        imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&q=80"
    },
    {
        id: 3,
        title: "DIY Anak: Mainan Eco dari HDPE",
        description: "Ajak si kecil berkreasi membuat mainan lucu dari limbah plastik tutup botol...",
        instructor: "Kak Maria Lisa",
        date: "22 Februari 2025",
        time: "09:00 WIB",
        location: "Offline",
        type: "anak-anak",
        category: "Anak-anak",
        price: "Gratis",
        spots: 2,
        rating: 4.7,
        imageUrl: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&q=80"
    }
];

export default function WorkshopsPage() {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const [filterByMonth, setFilterByMonth] = useState(false);

    const categories = ["Semua", "Daur Ulang DIY", "Prakarya Eco", "Keberlanjutan", "Anak-anak"];

    const filteredWorkshops = WORKSHOPS.filter(w => {
        const matchesCategory = selectedCategory === "Semua" || w.category === selectedCategory;
        // For simulation, calendar filter filters for "Februari" workshops
        const matchesMonth = !filterByMonth || w.date.includes("Februari");
        return matchesCategory && matchesMonth;
    });

    return (
        <div className="flex flex-col gap-6 p-4 pb-24">
            {/* Header */}
            <div className="flex justify-between items-center mt-2">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-primary-dark font-display">Temukan Kelas</h1>
                    <p className="text-sm text-neutral-500">Belajar mengubah limbah menjadi karya.</p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setFilterByMonth(!filterByMonth)}
                        className={`p-2 border rounded-full shadow-sm transition-all ${filterByMonth
                            ? "bg-primary border-primary text-white scale-110 shadow-lg shadow-primary/20"
                            : "bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50"
                            }`}
                    >
                        <Calendar className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Categories/Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sticky top-0 bg-white/80 backdrop-blur-md z-30">
                {categories.map((cat, i) => (
                    <button
                        key={i}
                        onClick={() => setSelectedCategory(cat)}
                        className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all ${selectedCategory === cat
                            ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                            : "bg-white text-neutral-500 border border-neutral-100 hover:border-primary/30"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Featured Workshop (Hanya tampil di 'Semua') */}
            {selectedCategory === "Semua" && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full relative overflow-hidden rounded-[32px] bg-primary-dark text-white shadow-xl min-h-[200px] p-6 flex flex-col justify-end group cursor-pointer"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80')] bg-cover bg-center z-0 group-hover:scale-105 transition-transform duration-700"></div>

                    <div className="relative z-20">
                        <div className="flex items-center gap-1 bg-primary/90 backdrop-blur-md w-fit px-3 py-1 rounded-full text-[10px] font-bold mb-2 border border-white/20 uppercase tracking-wider">
                            <Star className="w-3 h-3 fill-white" />
                            <span>Unggulan</span>
                        </div>
                        <h2 className="text-2xl font-bold leading-tight mb-2">Masterclass: Furniture from Plastic Waste</h2>
                        <div className="flex items-center gap-4 text-xs text-white/80 font-medium">
                            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> 28 Okt</span>
                            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Studio Recraft</span>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Workshop List */}
            <div className="flex flex-col gap-6">
                <h3 className="font-bold text-lg text-primary-dark mt-2 px-1">
                    {selectedCategory === "Semua" ? "Sesi Mendatang" : `Sesi ${selectedCategory}`}
                </h3>

                {filteredWorkshops.map((workshop, i) => (
                    <Link href={`/workshops/${workshop.id}`} key={workshop.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * (i + 1) }}
                            className="group flex flex-col rounded-[32px] bg-white border border-neutral-100 shadow-sm overflow-hidden hover:shadow-md transition-all active:scale-[0.98]"
                        >
                            {/* Image Banner */}
                            <div className="relative h-56 w-full">
                                <img src={workshop.imageUrl} alt={workshop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                                {/* Badges Left */}
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-bold text-white backdrop-blur-md ${workshop.location === 'Online' ? 'bg-blue-500/80 shadow-[0_4px_12px_rgba(59,130,246,0.3)]' : 'bg-emerald-500/80 shadow-[0_4px_12px_rgba(16,185,129,0.3)]'
                                        }`}>
                                        {workshop.location === 'Online' ? <Clock className="w-3 h-3" /> : <MapPin className="w-3 h-3" />}
                                        {workshop.location}
                                    </span>
                                </div>

                                {/* Badge Right (Category) */}
                                <div className="absolute top-4 right-4">
                                    <span className="bg-white/90 backdrop-blur-md text-primary-dark px-3 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-wider shadow-sm border border-black/5">
                                        {workshop.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col gap-5">
                                <div>
                                    <h4 className="text-xl font-bold text-primary-dark leading-tight group-hover:text-primary transition-colors">{workshop.title}</h4>
                                    <p className="text-sm text-neutral-500 mt-2 leading-relaxed line-clamp-2">
                                        {workshop.description}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3 text-sm">
                                        <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-100">
                                            <Calendar className="w-4 h-4 text-neutral-400" />
                                        </div>
                                        <span className="font-semibold text-neutral-600">{workshop.date}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-100">
                                            <Clock className="w-4 h-4 text-neutral-400" />
                                        </div>
                                        <span className="font-semibold text-neutral-600">{workshop.time}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-100">
                                            <Users className="w-4 h-4 text-neutral-400" />
                                        </div>
                                        <span className="font-semibold text-neutral-600">{workshop.instructor}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-3 border-t border-neutral-50 mt-1">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">Investasi</span>
                                        <span className={`text-2xl font-black ${workshop.price === 'Gratis' ? 'text-primary' : 'text-primary-dark'}`}>
                                            {workshop.price}
                                        </span>
                                    </div>
                                    <div className="bg-[#00bcd4] text-white px-8 py-3 rounded-2xl font-bold hover:bg-[#00acc1] transition-all shadow-lg shadow-cyan-500/20 active:scale-95">
                                        Daftar
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}

                {filteredWorkshops.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center py-24 text-center px-6"
                    >
                        <div className="w-20 h-20 bg-neutral-50 rounded-full flex items-center justify-center mb-4">
                            <Star className="w-10 h-10 text-neutral-200" />
                        </div>
                        <h4 className="font-bold text-neutral-400 mb-1">Yah, Belum Ada Kelas</h4>
                        <p className="text-xs text-neutral-400 italic">Belum ada kelas untuk kategori {selectedCategory}. Cek kategori lain yuk!</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

