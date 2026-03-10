"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, Filter, Star } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

const PRODUCTS = [
    {
        id: 1,
        title: "Tas Anyaman dari Kemasan",
        seller: "Eco Crafters Bali",
        price: "Rp 125.000",
        rating: 4.9,
        reviews: 124,
        category: "Fashion",
        imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80"
    },
    {
        id: 2,
        title: "Papan Skateboard HDPE",
        seller: "Board Rebuilders",
        price: "Rp 850.000",
        rating: 5.0,
        reviews: 89,
        category: "Aksesori",
        imageUrl: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?w=400&q=80"
    },
    {
        id: 3,
        title: "Lampu Meja dari PET Daur Ulang",
        seller: "Lumina Upcycle",
        price: "Rp 320.000",
        rating: 4.7,
        reviews: 56,
        category: "Dekorasi Rumah",
        imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80"
    },
    {
        id: 4,
        title: "Tatakan Gelas dari Tutup Botol",
        seller: "Community Hub JK",
        price: "Rp 45.000",
        rating: 4.8,
        reviews: 212,
        category: "Dekorasi Rumah",
        imageUrl: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&q=80"
    }
];

export default function MarketplacePage() {
    const { totalItems } = useCart();
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = PRODUCTS.filter(p => {
        const matchesCategory = selectedCategory === "Semua" || p.category === selectedCategory;
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.seller.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="flex flex-col gap-6 p-4">
            {/* Header */}
            <div className="flex justify-between items-center mt-2">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-primary-dark">Eco Market</h1>
                    <p className="text-sm text-neutral-500">Beli produk premium hasil upcycle.</p>
                </div>
                <Link href="/cart">
                    <div className="relative p-2 border border-neutral-200 rounded-full bg-white shadow-sm cursor-pointer hover:bg-neutral-50 transition-colors">
                        <ShoppingBag className="w-5 h-5 text-neutral-600" />
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-in zoom-in">
                                {totalItems}
                            </span>
                        )}
                    </div>
                </Link>
            </div>

            {/* Search Bar */}
            <div className="flex gap-3 items-center">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <input
                        type="text"
                        placeholder="Cari tas, dekorasi..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white border border-neutral-200 rounded-2xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                </div>
                <button className="p-3 bg-white border border-neutral-200 rounded-2xl active:scale-95 transition-transform">
                    <Filter className="w-5 h-5 text-neutral-600" />
                </button>
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sticky top-[60px] bg-white/80 backdrop-blur-sm z-20">
                {["Semua", "Fashion", "Dekorasi Rumah", "Mebel", "Aksesori"].map((cat, i) => (
                    <button
                        key={i}
                        onClick={() => setSelectedCategory(cat)}
                        className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95 ${selectedCategory === cat
                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                            : "bg-white text-neutral-500 border border-neutral-200 hover:border-primary/30"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 gap-4">
                {filteredProducts.map((prod, i) => (
                    <Link href={`/marketplace/${prod.id}`} key={prod.id}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col rounded-[32px] bg-white border border-neutral-100 shadow-sm overflow-hidden hover:shadow-md transition-all h-full group"
                        >
                            <div className="h-40 w-full bg-neutral-100 flex items-center justify-center overflow-hidden">
                                <img src={prod.imageUrl} alt={prod.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <h4 className="font-bold text-sm text-primary-dark leading-tight line-clamp-2 min-h-[40px]">{prod.title}</h4>
                                <p className="text-[10px] text-neutral-400 font-medium mt-1 uppercase tracking-wider">{prod.seller}</p>

                                <div className="mt-auto pt-3 flex items-center justify-between">
                                    <span className="font-black text-primary text-sm">{prod.price}</span>
                                    <div className="flex items-center gap-1 text-[10px] text-neutral-500 font-bold">
                                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        <span>{prod.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
            {filteredProducts.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-center opacity-60">
                    <ShoppingBag className="w-16 h-16 text-neutral-200 mb-4" />
                    <p className="text-sm font-bold text-neutral-400">Belum ada produk untuk kategori ini.</p>
                </div>
            )}
        </div>
    );
}
