# 🪻 Lilac: A Skill-Driven TUI Agent Framework

> **Lilac** is a high-performance, modular CLI agent system built with **Bun** and **Ink**. It treats AI behaviors as "Skills" stored in Markdown files, allowing you to swap agent identities instantly within a beautiful terminal interface.

> **Lilac** 是一个基于 **Bun** 和 **Ink** 构建的高性能、模块化 CLI 智能体系统。它将 AI 行为视为存储在 Markdown 文件中的“技能 (Skills)”，让你能在精美的终端界面中瞬间切换智能体身份。

---

![Lilac TUI Interface](./intro.png)

---

## 🚀 Technical Highlights / 技术亮点

- **⚡ Powered by Bun**: Ultra-fast startup, native TypeScript support, and zero-config build.
- **🎨 Reactive TUI with Ink**: A modern terminal UI built using React's declarative component patterns.
- **🧩 Skill-Driven Architecture**: Define agent personas, constraints, and models in local `.md` files.
- **🌈 Rich Visuals**: Features gradient pixel-art headers and smooth streaming animations.
- **🔌 Provider Agnostic**: Compatible with any OpenAI-style API (GPT, DeepSeek, Ollama, etc.).

- **⚡ Bun 驱动**: 极速启动，原生支持 TypeScript，零配置构建。
- **🎨 Ink 响应式 TUI**: 使用 React 的声明式组件模式构建现代终端界面。
- **🧩 技能驱动架构**: 在本地 `.md` 文件中定义智能体人格、约束和模型。
- **🌈 丰富视觉**: 具备渐变像素艺术标题和流畅的流式动画。
- **🔌 服务商无关**: 兼容任何 OpenAI 风格的 API (GPT, DeepSeek, Ollama 等)。

---

## 🛠 Tech Stack / 技术栈

| Tool / 工具 | Purpose / 用途 |
| :--- | :--- |
| **[Bun](https://bun.sh/)** | Runtime & Package Manager / 运行环境与包管理 |
| **[Ink](https://github.com/vadimdemedes/ink)** | Core TUI Framework (React for CLI) / 核心 TUI 框架 |
| `ink-text-input` | Interactive user input / 交互式用户输入 |
| `ink-spinner` | Thinking/Loading animations / 思考与加载动画 |
| `ink-big-text` | Pixel art terminal headers / 像素艺术终端标题 |
| `ink-gradient` | Colorful gradient text effects / 彩色渐变文本效果 |
| `gray-matter` | Markdown frontmatter parsing / Markdown 前置信息解析 |

---

## 📂 Project Structure / 项目结构

```text
lilac/
├── skills/          # .md Skill definitions / 技能定义文件
├── src/
│   ├── components/  # Ink UI Components / 视觉组件
│   ├── core/        # Logic & API Clients / 逻辑与 API 客户端
│   └── index.tsx    # Entry point / 程序入口
├── .env             # API Configuration / API 配置
└── intro.png        # TUI Screenshot / TUI 截图
```

---

## 🚦 Getting Started / 快速上手

### 1. Installation / 安装

```bash
cd lilac
bun install
```

### 2. Configure API / 配置 API

Copy `.env.example` to `.env` and add your `LILAC_API_KEY`.
将 `.env.example` 复制为 `.env` 并添加你的 `LILAC_API_KEY`。

```bash
cp .env.example .env
```

### 3. Run / 运行

```bash
# Development mode (with HMR) / 开发模式 (热更新)
bun run dev

# Production start / 生产启动
bun run start
```

---

## 🎭 Creating Skills / 创建技能

Skills are simple Markdown files. Example `skills/coder.md`:
技能是简单的 Markdown 文件。例如 `skills/coder.md`：

```markdown
---
name: Coder-Expert
model: gpt-4o
temperature: 0.2
---

# Role
You are an expert TypeScript developer.
你是一位精通 TypeScript 的开发者。
```

---

## 👤 Author / 作者

**Tempsyche**

