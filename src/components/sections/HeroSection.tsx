"use client";

import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Zap, Brain } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Glowing orb effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-8 mb-8"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="p-4 glass rounded-2xl"
            >
              <Brain className="w-8 h-8 text-cyan-400" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="p-4 glass rounded-2xl"
            >
              <Sparkles className="w-8 h-8 text-purple-400" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              className="p-4 glass rounded-2xl"
            >
              <Zap className="w-8 h-8 text-yellow-400" />
            </motion.div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-shift bg-[length:200%_auto]">
                探索 AI 的未来
              </span>
            </h1>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-white/90">
              与 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Rust</span> 的无限可能
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            在这个充满无限可能的时代，人工智能正在重塑世界的每一个角落。
            <br className="hidden md:block" />
            而 <span className="text-cyan-400 font-semibold">Rust</span> 语言，以其卓越的性能和安全性，
            正在成为构建下一代 AI 基础设施的首选语言。
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => {
                document.querySelector("#ai-future")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              探索 AI 未来
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document.querySelector("#rust-future")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              了解 Rust 革命
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {[
              { value: "GPT-5", label: "下一代大模型" },
              { value: "AGI", label: "通用人工智能" },
              { value: "100x", label: "Rust 性能优势" },
              { value: "2025", label: "AI 爆发元年" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="glass rounded-2xl p-6 text-center group hover:bg-white/5 transition-colors"
              >
                <div className="font-display text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 cursor-pointer"
            onClick={() => {
              document.querySelector("#ai-future")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="text-sm mb-2">向下滚动</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

