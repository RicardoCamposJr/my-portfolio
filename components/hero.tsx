"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Desenvolvedor Full Stack";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative pt-20"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Olá, eu sou
            <span className="block text-primary mt-2">Ricardo Campos</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6 h-8">
            {text}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg">
            Transformando ideias em experiências digitais excepcionais.
            Especializado em criar soluções web completas, do front-end ao
            back-end.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-md transition-colors duration-300 inline-flex items-center"
            >
              Ver Projetos
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md transition-colors duration-300 inline-flex items-center"
            >
              Contato
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl shadow-primary/20">
            <Image
              src="/placeholder.svg?height=320&width=320"
              alt="Desenvolvedor"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.2,
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="text-primary w-8 h-8" />
      </motion.div>
    </section>
  );
}
