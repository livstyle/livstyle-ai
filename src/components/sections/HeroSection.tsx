"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Sparkles, Zap, Brain } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Glowing orb effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Floating icons */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="p-4 glass rounded-2xl floating" style={{ animationDelay: "0s" }}>
              <Brain className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="p-4 glass rounded-2xl floating" style={{ animationDelay: "0.5s" }}>
              <Sparkles className="w-8 h-8 text-purple-400" />
            </div>
            <div className="p-4 glass rounded-2xl floating" style={{ animationDelay: "1s" }}>
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
          </div>

          {/* Main heading */}
          <div className={`transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-shift bg-[length:200%_auto]">
                探索 AI 的未来
              </span>
            </h1>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-white/90">
              与 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Rust</span> 的无限可能
            </h2>
          </div>

          {/* Subtitle */}
          <p className={`text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            在这个充满无限可能的时代，人工智能正在重塑世界的每一个角落。
            <br className="hidden md:block" />
            而 <span className="text-cyan-400 font-semibold">Rust</span> 语言，以其卓越的性能和安全性，
            正在成为构建下一代 AI 基础设施的首选语言。
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 transition-all duration-1000 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {[
              { value: "GPT-5", label: "下一代大模型" },
              { value: "AGI", label: "通用人工智能" },
              { value: "100x", label: "Rust 性能优势" },
              { value: "2025", label: "AI 爆发元年" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center group hover:bg-white/5 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="font-display text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${mounted ? "opacity-100" : "opacity-0"}`}>
          <div
            className="flex flex-col items-center text-gray-400 cursor-pointer animate-bounce"
            onClick={() => {
              document.querySelector("#ai-future")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="text-sm mb-2">向下滚动</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
