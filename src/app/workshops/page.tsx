"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ChevronRight, Star, Clock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const WORKSHOPS = [
    {
        id: 1,
        title: "Eco Crafting: Plastic Bottle Planters",
        instructor: "Sarah Collins",
        date: "Sat, Oct 14",
        time: "10:00 AM",
        location: "Green Hub Center",
        price: "Free",
        spots: 5,
        rating: 4.8,
        imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80"
    },
    {
        id: 2,
        title: "Advanced Upcycling: Lamp Design",
        instructor: "Budi Santoso",
        date: "Sun, Oct 15",
        time: "02:00 PM",
        location: "Online Zoom",
        price: "Rp 50.000",
        spots: 12,
        rating: 4.9,
        imageUrl: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=400&q=80"
    },
    {
        id: 3,
        title: "Kids DIY: Eco Toys from HDPE",
        instructor: "Maria Lisa",
        date: "Sat, Oct 21",
        time: "09:00 AM",
        location: "Community Park",
        price: "Free",
        spots: 2,
        rating: 4.7,
        imageUrl: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&q=80"
    }
];

export default function WorkshopsPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col gap-6 p-4">
            {/* Header */}
            <div className="flex justify-between items-center mt-2">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Discover Classes</h1>
                    <p className="text-sm text-neutral-500">Learn to turn waste into wonder.</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 border border-neutral-200 rounded-full bg-white shadow-sm">
                        <Calendar className="w-5 h-5 text-neutral-600" />
                    </button>
                </div>
            </div>

            {/* Categories/Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
                {["All", "DIY Recycle", "Eco Crafting", "Sustainability", "Kids"].map((cat, i) => (
                    <button
                        key={i}
                        className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors ${i === 0
                            ? "bg-primary text-white shadow-md shadow-primary/30"
                            : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Featured Workshop */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full relative overflow-hidden rounded-3xl bg-neutral-900 text-white shadow-xl min-h-[220px] p-6 flex flex-col justify-end"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/80 to-primary/40 z-0 mix-blend-multiply"></div>
                {/* Placeholder for an actual image */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80')] bg-cover bg-center z-0 opacity-40 mix-blend-overlay"></div>

                <div className="relative z-10">
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md w-fit px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-white/30">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>Featured</span>
                    </div>
                    <h2 className="text-2xl font-bold leading-tight mb-2">Masterclass: Furniture from Plactic Waste</h2>
                    <div className="flex items-center gap-4 text-xs text-white/80">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Oct 28</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Recraft Studio</span>
                    </div>
                </div>
            </motion.div>

            {/* Workshop List */}
            <div className="flex flex-col gap-4">
                <h3 className="font-bold text-lg text-neutral-900 mt-2">Upcoming Sessions</h3>

                {WORKSHOPS.map((workshop, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * (i + 1) }}
                        key={workshop.id}
                        className="group flex flex-col gap-3 p-4 rounded-3xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    >
                        <div className="flex gap-4">
                            <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-neutral-100">
                                <img src={workshop.imageUrl} alt={workshop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="flex flex-col flex-1 justify-center">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-bold text-neutral-900 leading-tight line-clamp-2">{workshop.title}</h4>
                                </div>
                                <p className="text-xs text-neutral-500 mt-1">by {workshop.instructor}</p>
                                <div className="flex items-center gap-3 mt-3 text-xs font-medium text-neutral-500 bg-neutral-50 w-fit px-2 py-1 rounded-lg">
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-neutral-400" /> {workshop.time}</span>
                                    <span className="text-neutral-300">|</span>
                                    <span className="flex items-center gap-1"><Users className="w-3 h-3 text-neutral-400" /> {workshop.spots} spots</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between border-t border-neutral-100 pt-3 mt-1">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">Price</span>
                                <span className="text-primary font-bold">{workshop.price}</span>
                            </div>
                            <button className="flex items-center gap-1 bg-neutral-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary transition-colors">
                                Book <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
