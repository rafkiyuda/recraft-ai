"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Share2, Heart, Calendar, Clock, MapPin, Users, Star, ShieldCheck, Leaf, Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { use, useState } from "react";

const WORKSHOPS = [
    {
        id: 1,
        title: "Workshop Tas Dari Botol Plastik",
        description: "Pelajari cara membuat tas cantik dari botol plastik bekas. Cocok untuk pemula yang ingin memulai gaya hidup berkelanjutan. Dalam sesi ini, Anda akan dipandu langkah demi langkah dari pembersihan material hingga teknik anyaman yang kuat.",
        instructor: "Ibu Rina Pratiwi",
        instructorTitle: "Eco-Artist & Craft Expert",
        date: "15 Februari 2025",
        time: "09:00 WIB",
        location: "Offline - Recraft Studio Jakarta",
        category: "Prakarya Eco",
        price: "Rp 75.000",
        spots: 5,
        rating: 4.8,
        reviews: 42,
        imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
    },
    {
        id: 2,
        title: "Edukasi Pengelolaan Sampah Rumah Tangga",
        description: "Kelas online tentang cara memilah dan mengelola sampah di rumah dengan efektif. Pelajari sistem zero-waste yang bisa diterapkan langsung di dapur Anda. Kita akan membahas cara mengompos, memilah plastik, dan mengurangi jejak karbon keluarga.",
        instructor: "Dr. Ahmad Hidayat",
        instructorTitle: "Environmental Specialist",
        date: "20 Februari 2025",
        time: "14:00 WIB",
        location: "Online via Zoom",
        category: "Daur Ulang DIY",
        price: "Gratis",
        spots: 12,
        rating: 4.9,
        reviews: 156,
        imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80"
    },
    {
        id: 3,
        title: "DIY Anak: Mainan Eco dari HDPE",
        description: "Ajak si kecil berkreasi membuat mainan lucu dari limbah plastik tutup botol. Sesi interaktif yang menyenangkan untuk meningkatkan kreativitas anak sekaligus mengenalkan pentingnya menjaga lingkungan sejak dini.",
        instructor: "Kak Maria Lisa",
        instructorTitle: "Creative Educator",
        date: "22 Februari 2025",
        time: "09:00 WIB",
        location: "Offline - Community Park",
        category: "Anak-anak",
        price: "Gratis",
        spots: 2,
        rating: 4.7,
        reviews: 28,
        imageUrl: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&q=80"
    }
];

export default function WorkshopDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const { id } = use(params);
    const [isLiked, setIsLiked] = useState(false);

    const workshop = WORKSHOPS.find(w => w.id === parseInt(id)) || WORKSHOPS[0];

    return (
        <div className="flex flex-col min-h-screen bg-white pb-32">
            {/* Nav Bar Mobile */}
            <div className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-50 w-full max-w-md mx-auto">
                <button
                    onClick={() => router.back()}
                    className="p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white border border-white/20 shadow-lg"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-2">
                    <button className="p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white border border-white/20 shadow-lg">
                        <Share2 className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setIsLiked(!isLiked)}
                        className={`p-3 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg transition-colors ${isLiked ? 'bg-red-500 text-white' : 'bg-white/20 text-white'
                            }`}
                    >
                        <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full h-[400px] overflow-hidden">
                <motion.img
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={workshop.imageUrl}
                    alt={workshop.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>

                {/* Float Category Badge */}
                <div className="absolute bottom-8 left-6 z-20">
                    <span className="bg-primary text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/30">
                        {workshop.category}
                    </span>
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-20 -mt-6 bg-white rounded-t-[40px] px-6 pt-8 flex flex-col gap-6">
                {/* Title and Rating */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-sm font-bold text-neutral-600">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{workshop.rating}</span>
                        </div>
                        <span className="text-neutral-300">•</span>
                        <span className="text-sm font-medium text-neutral-400">{workshop.reviews} Ulasan</span>
                    </div>
                    <h1 className="text-2xl font-black text-primary-dark leading-tight">
                        {workshop.title}
                    </h1>
                </div>

                {/* Info Cards Grid */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-neutral-50 p-4 rounded-3xl border border-neutral-100 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm">
                            <Calendar className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-tighter">Tanggal</span>
                            <span className="text-xs font-bold text-neutral-700">{workshop.date}</span>
                        </div>
                    </div>
                    <div className="bg-neutral-50 p-4 rounded-3xl border border-neutral-100 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-tighter">Waktu</span>
                            <span className="text-xs font-bold text-neutral-700">{workshop.time}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-50 p-4 rounded-3xl border border-neutral-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-tighter">Lokasi</span>
                        <span className="text-sm font-bold text-neutral-700">{workshop.location}</span>
                    </div>
                </div>

                {/* Instructor */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-extrabold text-primary-dark">Instruktur</h3>
                    <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-3xl border border-primary/10">
                        <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center font-black text-primary overflow-hidden">
                            <img src={`https://ui-avatars.com/api/?name=${workshop.instructor}&background=1ed085&color=fff&bold=true`} alt="Avatar" />
                        </div>
                        <div className="flex flex-col flex-1">
                            <span className="font-bold text-primary-dark">{workshop.instructor}</span>
                            <span className="text-xs text-primary font-medium">{workshop.instructorTitle}</span>
                        </div>
                        <button className="text-xs font-bold text-primary border border-primary/20 px-4 py-2 rounded-xl hover:bg-primary/10 transition-colors">
                            Profil
                        </button>
                    </div>
                </div>

                {/* About Section */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-extrabold text-primary-dark">Tentang Kelas</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                        {workshop.description}
                    </p>
                </div>

                {/* Benefits */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-extrabold text-primary-dark">Benefit Sesi Ini</h3>
                    <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
                            <ShieldCheck className="w-5 h-5 text-emerald-500" />
                            <span className="text-sm font-medium text-neutral-600">Sertifikat Digital E-Recraft</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
                            <Leaf className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium text-neutral-600">Bahan Baku Disediakan Panitia</span>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
                            <Globe className="w-5 h-5 text-blue-500" />
                            <span className="text-sm font-medium text-neutral-600">Networking dengan ReCrafter lainnya</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Bottom Actions */}
            <div className="fixed bottom-[84px] left-0 right-0 p-4 max-w-md mx-auto bg-white/90 backdrop-blur-xl border-t border-neutral-100 flex items-center justify-between gap-4 z-40 animate-in fade-in slide-in-from-bottom-5">
                <div className="flex flex-col">
                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Biaya</span>
                    <span className="text-2xl font-black text-primary-dark">{workshop.price}</span>
                </div>
                <button
                    onClick={() => alert("Permintaan pendaftaran dikirim!")}
                    className="flex-1 bg-primary text-white font-black py-4 rounded-[24px] shadow-xl shadow-primary/30 flex justify-center items-center gap-3 hover:bg-primary-dark active:scale-95 transition-all text-lg"
                >
                    Daftar Sekarang
                </button>
            </div>
        </div>
    );
}
