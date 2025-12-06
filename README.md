# LivStyle AI

探索 AI 的未来与 Rust 语言的无限可能

## 🌟 项目介绍

这是一个展示人工智能未来发展与 Rust 编程语言在 AI 领域应用的现代化网站。采用深邃宇宙主题设计，融合 3D 星空背景和炫酷动画效果，带给用户沉浸式的科技体验。

## ✨ 特性

- 🎨 **科技感设计** - 深邃宇宙主题，3D 星空背景
- 🚀 **炫酷动画** - Framer Motion 驱动的流畅动画
- 📱 **响应式布局** - 完美适配各种设备
- ⚡ **极致性能** - Next.js 静态导出，加载极速
- 🔧 **现代技术栈** - Next.js 15 + TypeScript + Tailwind CSS

## 🛠️ 技术栈

- **框架**: [Next.js 15](https://nextjs.org/) - React 全栈框架
- **样式**: [Tailwind CSS](https://tailwindcss.com/) - 原子化 CSS
- **3D 渲染**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **动画**: [Framer Motion](https://www.framer.com/motion/)
- **图标**: [Lucide Icons](https://lucide.dev/)
- **语言**: TypeScript

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建项目

```bash
npm run build
```

静态文件将生成到 `out` 目录。

## 📦 部署

本项目配置了 GitHub Actions 自动部署到 GitHub Pages：

1. 推送代码到 `main` 分支
2. GitHub Actions 自动构建并部署
3. 访问 https://livstyle.cn 查看网站

### 自定义域名配置

1. `public/CNAME` 文件包含自定义域名配置
2. 在域名服务商处添加 CNAME 记录指向 `<username>.github.io`
3. 在 GitHub 仓库设置中启用 HTTPS

## 📁 项目结构

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # 全局样式
│   │   ├── layout.tsx          # 根布局
│   │   └── page.tsx            # 主页面
│   ├── components/
│   │   ├── layout/             # 布局组件
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/           # 页面区块
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AIFutureSection.tsx
│   │   │   ├── RustFutureSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── three/              # Three.js 组件
│   │   │   └── StarField.tsx
│   │   └── ui/                 # UI 组件
│   │       ├── Button.tsx
│   │       └── Card.tsx
│   └── lib/
│       └── utils.ts            # 工具函数
├── public/
│   ├── CNAME                   # 自定义域名
│   └── .nojekyll               # 禁用 Jekyll
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 部署配置
├── next.config.ts              # Next.js 配置
├── tailwind.config.ts          # Tailwind CSS 配置
└── package.json
```

## 📄 许可证

MIT License

## 👤 联系方式

- **GitHub**: [github.com/livstyle](https://github.com/livstyle)
- **Email**: livstylecn@gmail.com

---

© 2024 LivStyle AI. Made with ❤️ using Next.js & Rust
