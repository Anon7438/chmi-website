"use client";
import { Ambulance, Zap, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Convenient",
        desc: "No patient travel required",
        icon: <Ambulance size={40} className="text-blue-600" />,
    },
    {
        title: "Fast",
        desc: "Quick turnaround reporting",
        icon: <Zap size={40} className="text-blue-600" />,
    },
    {
        title: "Reliable",
        desc: "Accredited radiologist support",
        icon: <Stethoscope size={40} className="text-blue-600" />,
    },
];

export default function WhyChoose() {
    return (
        <section className="bg-white py-20 px-6">

            <div className="max-w-6xl mx-auto text-center">

                <h2 className="text-3xl font-semibold text-gray-900">
                    Why Choose CHMI
                </h2>

                <p className="mt-3 text-gray-600">
                    Trusted mobile imaging for clinics and patients
                </p>

                <div className="mt-12 grid md:grid-cols-3 gap-8">

                    {features.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center flex flex-col items-center"
                        >

                            <motion.div whileHover={{ scale: 1.2 }}>
                                {item.icon}
                            </motion.div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 mt-2 text-sm">
                                {item.desc}
                            </p>

                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
}