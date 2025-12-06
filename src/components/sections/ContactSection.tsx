"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Mail, MessageCircle, ExternalLink, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";

const contactLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/livstyle",
    href: "https://github.com/livstyle",
    color: "text-white",
    hoverColor: "hover:text-purple-400",
    gradient: "from-gray-700 to-gray-800",
  },
  {
    icon: Mail,
    label: "Email",
    value: "livstylecn@gmail.com",
    href: "mailto:livstylecn@gmail.com",
    color: "text-red-400",
    hoverColor: "hover:text-red-300",
    gradient: "from-red-500/20 to-orange-500/20",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-cyan-500/10 via-purple-500/5 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <MessageCircle className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">联系我们</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">一起探索</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              未来技术
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            对 AI 和 Rust 感兴趣？欢迎与我交流探讨，一起探索技术的无限可能
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass rounded-2xl p-6 group hover:bg-white/5 transition-all duration-300 flex items-center gap-5"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <link.icon className={`w-7 h-7 ${link.color}`} />
                </div>
                <div className="flex-1">
                  <div className="text-gray-400 text-sm mb-1">{link.label}</div>
                  <div
                    className={`font-medium text-white ${link.hoverColor} transition-colors flex items-center gap-2`}
                  >
                    {link.value}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <Heart className="w-10 h-10 text-pink-400" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                加入 AI 与 Rust 的探索之旅
              </h3>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                无论你是 AI 研究者、Rust 开发者，还是对未来技术充满好奇的探索者，
                欢迎通过 GitHub 或邮件与我联系
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => window.open("https://github.com/livstyle", "_blank")}
                >
                  <Github className="w-5 h-5 mr-2" />
                  访问 GitHub
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open("mailto:livstylecn@gmail.com", "_blank")}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  发送邮件
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

