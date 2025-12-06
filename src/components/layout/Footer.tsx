"use client";

import { Github, Mail, Cpu, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="glass-strong">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Cpu className="w-8 h-8 text-cyan-400" />
                <span className="font-display text-xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    LivStyle
                  </span>
                  <span className="text-white ml-1">AI</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                探索人工智能的未来发展与Rust编程语言在AI领域的革命性应用。
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">快速链接</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="#ai-future"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  AI未来展望
                </a>
                <a
                  href="#rust-future"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Rust在AI中的应用
                </a>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  联系我们
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">联系方式</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/livstyle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>github.com/livstyle</span>
                </a>
                <a
                  href="mailto:livstylecn@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>livstylecn@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} LivStyle AI.</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="w-4 h-4 text-pink-500 hidden sm:inline" />
              <span className="hidden sm:inline">using Next.js & Rust</span>
            </div>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-400 transition-colors text-sm"
            >
              粤ICP备2022019199号-1
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

