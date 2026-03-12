---
title: "Tailwind CSS 实用技巧"
date: "2024-03-08"
excerpt: "分享一些 Tailwind CSS 的实用技巧和最佳实践，帮助你更高效地构建界面。"
tags: ["CSS", "Tailwind", "前端"]
---

# Tailwind CSS 实用技巧

Tailwind CSS 是一个功能强大的 CSS 框架，这里分享一些实用技巧。

## 1. 使用 @apply 提取重复样式

当你发现某些样式组合经常重复使用时，可以使用 `@apply` 提取：

```css
.btn-primary {
  @apply px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700;
}
```

## 2. 自定义配置

在 `tailwind.config.js` 中扩展默认主题：

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#3b82f6',
      },
    },
  },
}
```

## 3. 响应式设计

Tailwind 的响应式前缀让移动优先设计变得简单：

```html
<div class="text-sm md:text-base lg:text-lg">
  响应式文字大小
</div>
```

## 4. 暗色模式

使用 `dark:` 前缀轻松实现暗色模式：

```html
<div class="bg-white dark:bg-gray-900">
  自动适配暗色模式
</div>
```

## 总结

掌握这些技巧可以让你更高效地使用 Tailwind CSS 构建美观的界面。
