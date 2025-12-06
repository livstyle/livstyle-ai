"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  Zap,
  Code2,
  Boxes,
  Server,
  GitBranch,
  Terminal,
  Cpu,
  Lock,
  Gauge,
  Workflow,
  Database,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const rustAdvantages = [
  {
    icon: Shield,
    title: "内存安全",
    description:
      "Rust 的所有权系统在编译时消除了数据竞争和内存安全漏洞，为 AI 系统提供坚实的安全基础。",
    color: "text-emerald-400",
    bg: "from-emerald-500/20 to-green-500/20",
  },
  {
    icon: Zap,
    title: "极致性能",
    description:
      "接近 C/C++ 的运行速度，零成本抽象让高级特性不影响性能，是训练和推理的理想选择。",
    color: "text-yellow-400",
    bg: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Workflow,
    title: "并发优势",
    description:
      "无惧数据竞争的并发编程，async/await 原生支持，完美适配分布式 AI 训练场景。",
    color: "text-blue-400",
    bg: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Boxes,
    title: "WebAssembly",
    description:
      "Rust 是 WebAssembly 的一等公民，让 AI 模型能够高效运行在浏览器和边缘设备上。",
    color: "text-purple-400",
    bg: "from-purple-500/20 to-pink-500/20",
  },
];

const rustAIProjects = [
  {
    name: "Candle",
    description: "Hugging Face 开发的轻量级 ML 框架",
    stars: "15k+",
    category: "ML Framework",
  },
  {
    name: "Burn",
    description: "灵活的深度学习框架",
    stars: "8k+",
    category: "Deep Learning",
  },
  {
    name: "Linfa",
    description: "Rust 版 scikit-learn",
    stars: "3k+",
    category: "ML Toolkit",
  },
  {
    name: "tokenizers",
    description: "超快速分词器库",
    stars: "9k+",
    category: "NLP",
  },
  {
    name: "tract",
    description: "ONNX 和 TensorFlow 推理",
    stars: "2k+",
    category: "Inference",
  },
  {
    name: "tch-rs",
    description: "PyTorch 的 Rust 绑定",
    stars: "4k+",
    category: "PyTorch",
  },
];

const rustUseCases = [
  {
    icon: Server,
    title: "AI 推理服务器",
    description: "高性能、低延迟的模型服务部署",
  },
  {
    icon: Database,
    title: "向量数据库",
    description: "如 Qdrant、Milvus 等都选择 Rust",
  },
  {
    icon: Terminal,
    title: "AI 开发工具",
    description: "CLI 工具、数据处理流水线",
  },
  {
    icon: Lock,
    title: "安全 AI 系统",
    description: "对安全性要求极高的 AI 应用",
  },
];

export default function RustFutureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rust-future" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-red-500/8 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Code2 className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">Rust Language</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-600">
              Rust
            </span>{" "}
            <span className="text-white">在 AI 领域的崛起</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Rust 凭借其独特的安全性和性能优势，正在成为构建下一代 AI 基础设施的首选语言
          </p>
        </motion.div>

        {/* Rust advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {rustAdvantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="gradient" className="h-full">
                <div className="flex items-start gap-5">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${advantage.bg} flex items-center justify-center flex-shrink-0`}
                  >
                    <advantage.icon className={`w-8 h-8 ${advantage.color}`} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${advantage.color}`}>
                      {advantage.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Rust AI Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-24"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-4 text-white">
            Rust AI 生态系统
          </h3>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            越来越多的 AI 项目选择 Rust 构建核心组件
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rustAIProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                className="glass rounded-xl p-5 group hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <GitBranch className="w-5 h-5 text-orange-400" />
                    <span className="font-bold text-white group-hover:text-orange-400 transition-colors">
                      {project.name}
                    </span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-orange-500/20 text-orange-400">
                    ⭐ {project.stars}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                  {project.category}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-12 text-white">
            Rust 在 AI 领域的应用场景
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rustUseCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass rounded-2xl p-6 text-center group hover:border-orange-500/30 transition-colors"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <useCase.icon className="w-7 h-7 text-orange-400" />
                </div>
                <h4 className="font-bold text-white mb-2">{useCase.title}</h4>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
                为什么 AI 基础设施选择 Rust？
              </h3>
              <div className="space-y-4">
                {[
                  { label: "内存安全漏洞", rust: "0%", other: "70%", better: true },
                  { label: "运行时性能", rust: "100%", other: "60%", better: true },
                  { label: "编译时错误检测", rust: "95%", other: "40%", better: true },
                  { label: "并发安全性", rust: "100%", other: "50%", better: true },
                ].map((item, index) => (
                  <div key={item.label} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{item.label}</span>
                      <span className="text-orange-400 font-medium">Rust: {item.rust}</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: item.rust } : {}}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <Gauge className="w-12 h-12 text-orange-400 mx-auto mb-2" />
                    <div className="font-display text-3xl font-bold text-orange-400">100x</div>
                    <div className="text-gray-400 text-sm">性能优势</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

