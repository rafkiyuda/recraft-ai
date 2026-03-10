"use client";

import { motion } from "framer-motion";
import {
  Scan,
  GraduationCap,
  ShoppingBag,
  Users,
  Sparkles,
  Recycle,
  ArrowRight,
  Leaf,
  Trophy
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      {/* Top Banner Gradient */}
      <div className="relative pt-8 pb-12 px-6 rounded-b-[40px] shadow-lg green-motif bg-gradient-to-br from-primary via-primary to-primary-dark text-white flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-4 relative z-10 w-full"
        >
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-1 border border-white/30">
            <Leaf className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">Selamat Datang, R&D! 👋</h1>
          <p className="text-[14px] font-medium leading-relaxed max-w-[280px] opacity-90">
            Bersama mengubah sampah plastik menjadi produk bernilai dan menjaga kelestarian bumi kita.
          </p>

          <Link
            href="/scan"
            className="mt-4 bg-white text-primary font-bold text-lg px-8 py-4 rounded-2xl w-full max-w-[320px] shadow-[0_10px_30px_rgba(16,185,129,0.3)] flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform"
          >
            <Scan className="w-6 h-6" />
            Mulai Scan Sampah
          </Link>
        </motion.div>
      </div>

      <div className="flex flex-col gap-10 p-6 -mt-2">

        {/* Fitur ReCraft Section */}
        <section className="flex flex-col items-center text-center gap-2">
          <h2 className="text-2xl font-extrabold text-primary-dark">Fitur ReCraft</h2>
          <p className="text-sm text-neutral-500 max-w-[280px] leading-relaxed">
            Jelajahi berbagai fitur untuk membantu Anda berkontribusi pada lingkungan
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6 w-full">
            {/* Card 1 */}
            <Link href="/scan" className="flex flex-col gap-3 p-5 rounded-3xl bg-primary/5 border border-primary/10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-sm">
                <Scan className="w-7 h-7" />
              </div>
              <div className="flex flex-col gap-1 text-left mt-1">
                <span className="font-bold text-primary-dark leading-tight">Scan Sampah</span>
                <span className="text-[12px] text-gray-500 leading-tight">AI scan untuk rekomendasi upcycle</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 mt-2" />
            </Link>

            {/* Card 2 */}
            <Link href="/workshops" className="flex flex-col gap-3 p-5 rounded-3xl bg-[#faf5fc] border border-[#f5ebf8] hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-[#cb3eab] text-white flex items-center justify-center shadow-sm">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="flex flex-col gap-1 text-left mt-1">
                <span className="font-bold text-primary-dark leading-tight">Kelas ReCraft</span>
                <span className="text-[12px] text-gray-500 leading-tight">Workshop prakarya & edukasi</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 mt-2" />
            </Link>

            {/* Card 3 */}
            <Link href="/marketplace" className="flex flex-col gap-3 p-5 rounded-3xl bg-[#fffaf5] border border-[#fff2e5] hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-[#ef7e00] text-white flex items-center justify-center shadow-sm">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <div className="flex flex-col gap-1 text-left mt-1">
                <span className="font-bold text-primary-dark leading-tight">Marketplace</span>
                <span className="text-[12px] text-gray-500 leading-tight">Jual beli produk upcycle</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 mt-2" />
            </Link>

            {/* Card 4 */}
            <Link href="/community" className="flex flex-col gap-3 p-5 rounded-3xl bg-[#f5f8ff] border border-[#eff3ff] hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-[#3f65e2] text-white flex items-center justify-center shadow-sm">
                <Users className="w-7 h-7" />
              </div>
              <div className="flex flex-col gap-1 text-left mt-1">
                <span className="font-bold text-primary-dark leading-tight">Build Together</span>
                <span className="text-[12px] text-gray-500 leading-tight">Event & komunitas kolaboratif</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 mt-2" />
            </Link>

            {/* Card 5 */}
            <Link href="/community" className="flex flex-col gap-3 p-5 rounded-3xl bg-primary/5 border border-primary/10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-sm">
                <Sparkles className="w-7 h-7" />
              </div>
              <div className="flex flex-col gap-1 text-left mt-1">
                <span className="font-bold text-primary-dark leading-tight">Bersih Tempatmu</span>
                <span className="text-[12px] text-gray-500 leading-tight">Event organizer lingkungan</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 mt-2" />
            </Link>

            {/* Card 6 */}
            <Link href="/donate" className="flex flex-col gap-3 p-5 rounded-3xl bg-[#fff5f5] border border-[#ffe0e0] hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-[#f24747] text-white flex items-center justify-center shadow-sm">
                <Recycle className="w-7 h-7" />
              </div>
              <div className="flex flex-col gap-1 text-left mt-1">
                <span className="font-bold text-primary-dark leading-tight">Donasi Plastik</span>
                <span className="text-[12px] text-gray-500 leading-tight">Jadwalkan penjemputan plastik</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 mt-2" />
            </Link>
          </div>
        </section>

        {/* Dampak Komunitas Section */}
        <section className="flex flex-col items-center text-center gap-2">
          <h2 className="text-2xl font-extrabold text-primary-dark">Dampak Komunitas ReCraft</h2>
          <p className="text-sm text-neutral-500 max-w-[280px] leading-relaxed">
            Bersama kita telah membuat perubahan nyata
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6 w-full">
            <div className="bg-white rounded-3xl p-5 flex flex-col items-center text-center shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-neutral-100">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
                <Recycle className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-extrabold text-gray-900">12,450</span>
              <span className="text-[12px] text-gray-500 font-medium leading-tight mt-1">Kg Plastik<br />Dikumpulkan</span>
            </div>

            <div className="bg-white rounded-3xl p-5 flex flex-col items-center text-center shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-neutral-100">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-extrabold text-gray-900">8,920</span>
              <span className="text-[12px] text-gray-500 font-medium leading-tight mt-1">Kg CO₂<br />Diselamatkan</span>
            </div>

            <div className="bg-white rounded-3xl p-5 flex flex-col items-center text-center shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-neutral-100">
              <div className="w-12 h-12 rounded-2xl bg-[#f5f8ff] flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-[#3f65e2]" />
              </div>
              <span className="text-xl font-extrabold text-gray-900">3,200+</span>
              <span className="text-[12px] text-gray-500 font-medium leading-tight mt-1">Pengguna<br />Aktif</span>
            </div>

            <div className="bg-white rounded-3xl p-5 flex flex-col items-center text-center shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-neutral-100">
              <div className="w-12 h-12 rounded-2xl bg-[#fffaf5] flex items-center justify-center mb-3">
                <Trophy className="w-6 h-6 text-[#ef7e00]" />
              </div>
              <span className="text-xl font-extrabold text-gray-900">450+</span>
              <span className="text-[12px] text-gray-500 font-medium leading-tight mt-1">Produk<br />Upcycle</span>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section>
          <div className="w-full bg-gradient-to-br from-primary to-primary-dark rounded-[32px] p-8 flex flex-col items-center text-center text-white relative overflow-hidden shadow-lg">
            <Leaf className="w-12 h-12 mb-4 drop-shadow-md" />
            <h2 className="text-2xl font-extrabold leading-tight mb-3 relative z-10 w-full px-2">
              Mulai Perjalanan Hijau Anda
            </h2>
            <p className="text-sm font-medium opacity-90 leading-relaxed mb-6 relative z-10">
              Setiap tindakan kecil memiliki dampak besar. Mari bersama menjadi bagian dari solusi untuk planet kita.
            </p>

            <Link href="/donate" className="bg-white text-primary font-bold py-3.5 px-6 w-full rounded-2xl flex items-center justify-center gap-2 relative z-10 shadow-md">
              <Recycle className="w-5 h-5" />
              Donasi Plastik
            </Link>

            <Link href="/impact" className="w-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-3.5 px-6 rounded-2xl mt-4 backdrop-blur-md flex items-center justify-center gap-2 relative z-10 transition-colors">
              <Users className="w-5 h-5 text-white" />
              Lihat data & Impact
            </Link>

            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </section>

      </div>
    </div>
  );
}
