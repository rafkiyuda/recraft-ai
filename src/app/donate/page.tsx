"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Weight, Truck, CheckCircle2 } from "lucide-react";

export default function DonatePage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="flex flex-col items-center justify-center p-6 h-[calc(100vh-120px)] bg-white text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6"
                >
                    <CheckCircle2 className="w-12 h-12" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold mb-2 text-neutral-900"
                >
                    Pickup Scheduled!
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-neutral-500 mb-8 max-w-[250px]"
                >
                    Our courier will arrive at your location on the selected date. Thank you for recycling!
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => setIsSubmitted(false)}
                    className="bg-neutral-900 text-white px-8 py-3 rounded-full font-bold hover:bg-neutral-800 transition-colors"
                >
                    Done
                </motion.button>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-6 p-4">
            <div className="flex flex-col gap-1 mt-2">
                <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Donate Plastic</h1>
                <p className="text-sm text-neutral-500">Request a pickup and earn points.</p>
            </div>

            {/* Info Card */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-blue-50 border border-blue-100 p-4 rounded-3xl flex gap-4 mt-2"
            >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-blue-50">
                    <Truck className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                    <h3 className="font-bold text-blue-900 text-sm mb-1">How it works</h3>
                    <p className="text-xs text-blue-700 leading-relaxed">
                        Pack your sorted plastic waste. Our team will pick it up right from your doorstep and reward you with <strong>100 Eco Points</strong> per kg.
                    </p>
                </div>
            </motion.div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-neutral-700 ml-1">Pickup Location</label>
                    <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                        <input
                            required
                            type="text"
                            placeholder="Enter your full address"
                            className="w-full bg-white border border-neutral-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-neutral-700 ml-1">Preferred Date</label>
                        <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                            <input
                                required
                                type="date"
                                className="w-full bg-white border border-neutral-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none text-neutral-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-neutral-700 ml-1">Est. Weight</label>
                        <div className="relative">
                            <Weight className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                            <select required className="w-full bg-white border border-neutral-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none text-neutral-700">
                                <option value="">Select weight</option>
                                <option value="1-5">&lt; 5 kg</option>
                                <option value="5-10">5 - 10 kg</option>
                                <option value="10-20">10 - 20 kg</option>
                                <option value="20+">&gt; 20 kg</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-neutral-700 ml-1">Additional Notes</label>
                    <textarea
                        placeholder="e.g., Leave it at the front gate..."
                        rows={3}
                        className="w-full bg-white border border-neutral-200 rounded-2xl py-3 px-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    />
                </div>

                {/* Action Button */}
                <div className="fixed bottom-[84px] left-0 right-0 px-4 max-w-md mx-auto pointer-events-none">
                    <motion.button
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/30 pointer-events-auto flex justify-center items-center gap-2"
                    >
                        Confirm Request
                    </motion.button>
                </div>
            </form>
        </div>
    );
}
