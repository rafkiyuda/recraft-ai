"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
    const router = useRouter();
    const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(price).replace('IDR', 'Rp');
    };

    if (cart.length === 0) {
        return (
            <div className="flex flex-col min-h-screen bg-white">
                <div className="p-4 flex items-center gap-4">
                    <button onClick={() => router.back()} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-neutral-900" />
                    </button>
                    <h1 className="text-xl font-bold text-neutral-900">Keranjang</h1>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center gap-4">
                    <div className="w-24 h-24 bg-neutral-50 rounded-full flex items-center justify-center mb-2">
                        <ShoppingBag className="w-12 h-12 text-neutral-200" />
                    </div>
                    <h2 className="text-xl font-bold text-neutral-900">Keranjang Kosong</h2>
                    <p className="text-neutral-500 text-sm max-w-[240px]">
                        Wah, keranjangmu masih kosong nih. Yuk mulai belanja produk eco-friendly!
                    </p>
                    <Link href="/marketplace">
                        <button className="mt-4 bg-primary text-white font-bold px-8 py-3 rounded-2xl shadow-lg shadow-primary/30 active:scale-95 transition-all">
                            Mulai Belanja
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-neutral-50 pb-40">
            {/* Header */}
            <div className="bg-white p-4 sticky top-0 z-30 border-b border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button onClick={() => router.back()} className="p-2 hover:bg-neutral-50 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-neutral-900" />
                    </button>
                    <h1 className="text-xl font-bold text-neutral-900">Keranjang ({totalItems})</h1>
                </div>
            </div>

            {/* Cart Items */}
            <div className="flex flex-col p-4 gap-4">
                {cart.map((item) => (
                    <motion.div
                        layout
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        key={item.id}
                        className="bg-white p-4 rounded-3xl border border-neutral-100 shadow-sm flex gap-4"
                    >
                        <div className="w-24 h-24 rounded-2xl overflow-hidden bg-neutral-100 flex-shrink-0">
                            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                        </div>

                        <div className="flex flex-col flex-1 justify-between py-1">
                            <div>
                                <h3 className="font-bold text-neutral-900 text-sm line-clamp-1">{item.title}</h3>
                                <p className="text-primary font-bold text-sm mt-1">{item.price}</p>
                            </div>

                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-3 bg-neutral-50 px-3 py-1.5 rounded-xl border border-neutral-100">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="text-neutral-500 disabled:opacity-30"
                                        disabled={item.quantity <= 1}
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="text-sm font-bold text-neutral-900 w-4 text-center">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="text-neutral-500"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Order Summary Sticky Bottom */}
            <div className="fixed bottom-[84px] left-0 right-0 p-4 max-w-md mx-auto bg-white border-t border-neutral-100 z-40 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                <div className="flex flex-col gap-3 mb-4">
                    <div className="flex justify-between text-sm">
                        <span className="text-neutral-500">Subtotal</span>
                        <span className="text-neutral-900 font-bold">{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-neutral-500">Biaya Layanan</span>
                        <span className="text-neutral-900 font-bold">Rp 2.000</span>
                    </div>
                    <div className="h-px bg-dashed bg-neutral-100 my-1"></div>
                    <div className="flex justify-between items-center">
                        <span className="text-base font-bold text-neutral-900">Total Pembayaran</span>
                        <span className="text-xl font-black text-primary">{formatPrice(totalPrice + 2000)}</span>
                    </div>
                </div>

                <button
                    onClick={() => alert("Pesanan berhasil dikirim!")}
                    className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/30 flex justify-center items-center gap-2 hover:bg-primary-dark active:scale-95 transition-all text-lg"
                >
                    Bayar Sekarang
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
