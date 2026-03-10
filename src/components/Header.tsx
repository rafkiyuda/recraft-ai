"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 w-full max-w-md mx-auto bg-white/80 backdrop-blur-md z-50 border-b border-neutral-100">
            <div className="flex items-center justify-between px-4 h-14">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                        R
                    </div>
                    <span className="font-bold text-lg tracking-tight">ReCraft</span>
                </Link>
                <div className="flex items-center space-x-3">
                    <button className="relative p-2 text-neutral-600 hover:text-primary transition-colors">
                        <span className="text-xl">🔔</span>
                        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
