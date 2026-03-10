import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReCraft - Turning Plastic Waste into Value",
  description: "Identify, recycle, and monetize plastic waste through an integrated digital ecosystem using AI Computer Vision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white min-h-screen pb-safe`}>
        <div className="max-w-md mx-auto min-h-screen bg-white shadow-xl relative overflow-x-hidden flex flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto pb-20">
            {children}
          </main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
