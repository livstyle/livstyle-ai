"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Cpu,
  Network,
  Sparkles,
  Bot,
  Eye,
  Mic,
  Globe,
  Rocket,
  Lightbulb,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

const aiTopics = [
  {
    icon: Brain,
    title: "AGI - 通用人工智能",
    description:
      "AGI 代表着 AI 发展的终极目标：创造出能够执行任何人类智力任务的系统。2025年，我们正见证向这一目标迈进的关键突破。",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Sparkles,
    title: "大语言模型革命",
    description:
      "从 GPT-4 到下一代多模态模型，大语言模型正在重新定义人机交互。推理能力、长上下文理解和实时学习正成为新的前沿。",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: Bot,
    title: "AI Agent 自主体",
    description:
      "AI Agent 能够自主规划、执行任务并与环境交互。这标志着 AI 从被动响应到主动行动的范式转变。",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Eye,
    title: "多模态感知",
    description:
      "融合视觉、听觉、语言的多模态 AI 正在实现更接近人类的感知理解，为具身智能和虚拟助手带来革命性突破。",
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: Network,
    title: "边缘 AI 计算",
    description:
      "AI 正在从云端走向边缘设备。本地化的 AI 推理带来更低延迟、更好隐私和更广泛的应用场景。",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    icon: Globe,
    title: "AI 基础设施",
    description:
      "高性能 AI 芯片、分布式训练框架和 MLOps 平台正在构建支撑 AI 发展的基础设施层。",
    gradient: "from-indigo-500 to-purple-600",
  },
];

const futureVisions = [
  {
    icon: Rocket,
    title: "2025: AI 应用爆发",
    items: [
      "AI 编程助手成为开发标配",
      "AI 代理处理日常任务",
      "多模态交互无处不在",
      "个性化 AI 助手普及",
    ],
  },
  {
    icon: Cpu,
    title: "2026-2027: 深度融合",
    items: [
      "AI 原生应用生态成熟",
      "人机协作新范式确立",
      "专业领域 AI 深度应用",
      "AI 安全与治理框架完善",
    ],
  },
  {
    icon: Lightbulb,
    title: "2028+: 智能新纪元",
    items: [
      "AGI 可能实现重大突破",
      "AI 助力科学研究加速",
      "具身智能走入现实",
      "人类与 AI 共同进化",
    ],
  },
];

export default function AIFutureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ai-future" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Brain className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">人工智能</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">AI 的</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              未来展望
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            人工智能正以前所未有的速度发展，从大语言模型到通用人工智能，
            我们正处于技术革命的最前沿
          </p>
        </motion.div>

        {/* AI Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {aiTopics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="glow" className="h-full">
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${topic.gradient} p-3 mb-4 shadow-lg`}
                  >
                    <topic.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-lg">{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {topic.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Future Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-12 text-white">
            AI 发展时间线
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureVisions.map((vision, index) => (
              <motion.div
                key={vision.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                className="glass rounded-2xl p-6 relative overflow-hidden group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <vision.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-white">
                      {vision.title}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {vision.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-gray-400 text-sm"
                      >
                        <Mic className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline connector */}
                {index < futureVisions.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10" />
          <div className="relative z-10">
            <Sparkles className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl text-white font-medium mb-4 leading-relaxed">
              &ldquo;我们正站在人工智能发展的拐点。未来十年，AI 将不仅是工具，
              更将成为人类智慧的延伸，重新定义我们工作、创造和生活的方式。&rdquo;
            </blockquote>
            <p className="text-gray-400">— AI 未来展望</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

