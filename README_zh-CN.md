# 我的博客

这是一个基于 Nuxt 4 和 Nuxt Content 的中文博客，目前保持简单，方便继续添加内容。

## 本地运行

```bash
pnpm install
pnpm dev
```

开发服务器会使用 `3001` 端口并自动打开浏览器，也可以手动打开 `http://localhost:3001`。

## 添加文章

在 `content/` 目录下新建 Markdown 文件：

```markdown
---
title: '文章标题'
description: '文章简介'
date: '2026-07-31'
---

# 文章标题

文章内容写在这里。
```

## 构建

```bash
pnpm build
```
