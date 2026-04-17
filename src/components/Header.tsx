"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 w-full max-w-md mx-auto bg-white/80 backdrop-blur-md z-50 border-b border-neutral-100">
            <div className="flex items-center justify-between px-4 h-14">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="relative h-10 w-auto flex items-center justify-center">
                        <img
                            src="/assets/logo_landscape.png"
                            alt="Logo"
                            className="h-full w-auto object-contain"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                        />
                        <div className="hidden w-full h-full rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                            R
                        </div>
                    </div>
                    <span className="font-bold text-lg tracking-tight text-primary">ReCraft</span>
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
