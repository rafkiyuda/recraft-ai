"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Share2, Heart, Star, ShoppingBag, ShieldCheck, Leaf } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use } from "react";

import { useCart } from "@/context/CartContext";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const { id } = use(params);
    const { addToCart } = useCart();

    // Mock checking the product based on ID (simplified for MVP)
    const PRODUCTS = [
        {
            id: 1,
            title: "Tas Anyaman dari Kemasan",
            seller: "Eco Crafters Bali",
            price: "Rp 125.000",
            rating: 4.9,
            reviews: 124,
            imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80"
        },
        {
            id: 2,
            title: "Papan Skateboard HDPE",
            seller: "Board Rebuilders",
            price: "Rp 850.000",
            rating: 5.0,
            reviews: 89,
            imageUrl: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?w=400&q=80"
        },
        {
            id: 3,
            title: "Lampu Meja dari PET Daur Ulang",
            seller: "Lumina Upcycle",
            price: "Rp 320.000",
            rating: 4.7,
            reviews: 56,
            imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80"
        },
        {
            id: 4,
            title: "Tatakan Gelas dari Tutup Botol",
            seller: "Community Hub JK",
            price: "Rp 45.000",
            rating: 4.8,
            reviews: 212,
            imageUrl: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&q=80"
        }
    ];

    const currentProduct = PRODUCTS.find(p => p.id === parseInt(id)) || PRODUCTS[0];
    const isSkateboard = currentProduct.id === 2;

    const handleAddToCart = () => {
        addToCart(currentProduct);
        alert(`${currentProduct.title} ditambahkan ke keranjang!`);
    };

    return (
        <div className="flex flex-col min-h-screen bg-neutral-50 pb-24">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10 w-full max-w-md mx-auto pointer-events-none">
                <button onClick={() => router.back()} className="p-2 bg-white/50 backdrop-blur-md rounded-full text-neutral-900 pointer-events-auto border border-white/20">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-2 pointer-events-auto">
                    <button className="p-2 bg-white/50 backdrop-blur-md rounded-full text-neutral-900 border border-white/20">
                        <Share2 className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-white/50 backdrop-blur-md rounded-full text-neutral-900 border border-white/20">
                        <Heart className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Product Image Area */}
            <div className="w-full h-80 bg-neutral-200 rounded-b-3xl overflow-hidden relative shadow-sm">
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    src={currentProduct.imageUrl}
                    alt="Product"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col p-5 gap-5">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <span className="text-primary font-semibold text-xs flex items-center gap-1"><Leaf className="w-3 h-3" /> 100% Upcycled</span>
                        <div className="flex items-center gap-1 text-sm text-neutral-600 font-medium">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{currentProduct.rating}</span>
                            <span className="text-neutral-400">({currentProduct.reviews} reviews)</span>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold text-neutral-900 leading-tight">
                        {currentProduct.title}
                    </h1>

                    <div className="text-primary font-bold text-2xl mt-1">
                        {currentProduct.price}
                    </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-neutral-100">
                    <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center font-bold text-neutral-500">
                        {currentProduct.seller.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="flex flex-col flex-1">
                        <span className="text-sm font-bold text-neutral-900">{currentProduct.seller}</span>
                        <span className="text-xs text-neutral-500">Verified Upcycler ✓</span>
                    </div>
                    <button className="text-xs px-3 py-1.5 rounded-full border border-neutral-300 font-medium">Follow</button>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-neutral-900">Tentang Produk</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                        {currentProduct.id === 2
                            ? "Terbuat dari 100% High-Density Polyethylene (HDPE) daur ulang yang dikumpulkan dari pesisir pantai lokal. Setiap papan dipress tangan dan memiliki pola warna yang unik namun tetap mempertahankan daya tahan kelas profesional."
                            : "Tas tote yang cantik ditenun dengan tangan seluruhnya dari sachet kopi bekas. Tahan air, sangat awet, dan sempurna untuk belanja harian sambil menyelamatkan ratusan plastik dari tempat pembuangan sampah."}
                    </p>
                </div>

                <div className="flex flex-col gap-3 mt-2">
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                        <ShieldCheck className="w-5 h-5 text-green-500" />
                        <span>Kualitas Terjamin</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-600">
                        <Leaf className="w-5 h-5 text-primary" />
                        <span>Menyelamatkan {currentProduct.id === 2 ? '2.5kg' : '0.8kg'} sampah plastik</span>
                    </div>
                </div>
            </div>

            {/* Bottom Actions Fixed */}
            <div className="fixed bottom-[84px] left-0 right-0 p-4 max-w-md mx-auto bg-white/80 backdrop-blur-md border-t border-neutral-200 flex items-center gap-3 z-40">
                <button
                    onClick={handleAddToCart}
                    className="p-4 border border-neutral-200 rounded-2xl bg-white hover:bg-neutral-50 transition-colors"
                >
                    <ShoppingBag className="w-6 h-6 text-neutral-700" />
                </button>
                <button className="flex-1 bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/30 flex justify-center items-center gap-2 hover:bg-primary-dark transition-colors">
                    Beli Sekarang
                </button>
            </div>
        </div>
    );
}
