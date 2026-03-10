"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, Filter, Star } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PRODUCTS = [
    {
        id: 1,
        title: "Woven Totebag from Sachet",
        seller: "Eco Crafters Bali",
        price: "Rp 125.000",
        rating: 4.9,
        reviews: 124,
        imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80"
    },
    {
        id: 2,
        title: "HDPE Skateboard Deck",
        seller: "Board Rebuilders",
        price: "Rp 850.000",
        rating: 5.0,
        reviews: 89,
        imageUrl: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?w=400&q=80"
    },
    {
        id: 3,
        title: "Recycled PET Desk Lamp",
        seller: "Lumina Upcycle",
        price: "Rp 320.000",
        rating: 4.7,
        reviews: 56,
        imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80"
    },
    {
        id: 4,
        title: "Coasters from Bottle Caps",
        seller: "Community Hub JK",
        price: "Rp 45.000",
        rating: 4.8,
        reviews: 212,
        imageUrl: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&q=80"
    }
];

export default function MarketplacePage() {
    return (
        <div className="flex flex-col gap-6 p-4">
            {/* Header */}
            <div className="flex justify-between items-center mt-2">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Eco Market</h1>
                    <p className="text-sm text-neutral-500">Shop premium upcycled products.</p>
                </div>
                <div className="relative p-2 border border-neutral-200 rounded-full bg-white shadow-sm cursor-pointer">
                    <ShoppingBag className="w-5 h-5 text-neutral-600" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">2</span>
                </div>
            </div>

            {/* Search Bar */}
            <div className="flex gap-3 items-center">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <input
                        type="text"
                        placeholder="Search bags, decor..."
                        className="w-full bg-white border border-neutral-200 rounded-2xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                </div>
                <button className="p-3 bg-white border border-neutral-200 rounded-2xl">
                    <Filter className="w-5 h-5 text-neutral-600" />
                </button>
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
                {["All", "Fashion", "Home Decor", "Furniture", "Accessories"].map((cat, i) => (
                    <button
                        key={i}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0
                            ? "bg-neutral-900 text-white shadow-md"
                            : "bg-white text-neutral-600 border border-neutral-200"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 gap-4">
                {PRODUCTS.map((prod, i) => (
                    <Link href={`/marketplace/${prod.id}`} key={prod.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * (i + 1) }}
                            className="flex flex-col rounded-3xl bg-white border border-neutral-100 shadow-sm overflow-hidden hover:shadow-md transition-all h-full"
                        >
                            <div className="h-40 w-full bg-neutral-100 flex items-center justify-center overflow-hidden">
                                <img src={prod.imageUrl} alt={prod.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <h4 className="font-bold text-sm text-neutral-900 leading-tight line-clamp-2">{prod.title}</h4>
                                <p className="text-[10px] text-neutral-500 mt-1">{prod.seller}</p>

                                <div className="mt-auto pt-3 flex items-center justify-between">
                                    <span className="font-bold text-primary text-sm">{prod.price}</span>
                                    <div className="flex items-center gap-1 text-[10px] text-neutral-500">
                                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        <span>{prod.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
