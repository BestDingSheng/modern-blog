# Modern Blog

一个现代化、优雅的个人博客，使用 Next.js 14 + TypeScript + Tailwind CSS 构建。

## ✨ 特性

- 🎨 现代化 UI 设计，简洁优雅
- 📱 完全响应式，支持移动端
- 🌓 暗色/亮色主题切换
- 📝 Markdown 文章支持
- 🏷️ 标签系统
- ⚡ 基于 Next.js 14 App Router
- 🎯 TypeScript 类型安全
- 💨 Tailwind CSS 快速开发

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 📝 添加文章

在 `posts` 目录下创建 `.md` 文件：

```markdown
---
title: "文章标题"
date: "2024-03-12"
excerpt: "文章摘要"
tags: ["标签1", "标签2"]
---

# 文章内容

这里是文章正文...
```

## 🎨 自定义

### 修改主题颜色

编辑 `tailwind.config.ts` 文件：

```typescript
theme: {
  extend: {
    colors: {
      // 添加自定义颜色
    },
  },
}
```

### 修改网站信息

编辑 `app/layout.tsx` 中的 metadata：

```typescript
export const metadata: Metadata = {
  title: "你的博客标题",
  description: "你的博客描述",
};
```

## 📦 技术栈

- [Next.js 14](https://nextjs.org/) - React 框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Markdown 解析
- [remark](https://github.com/remarkjs/remark) - Markdown 处理

## 📄 License

MIT
