# 恒言Tech 的博客

这是恒言Tech 的中文博客和产品展示站，基于 Nuxt 4、Vue 3 与 Nuxt Content 构建。文章使用 Markdown 维护，目前主要介绍独立开发产品与实践记录。

## 环境要求

- Node.js 24
- pnpm 11

## 本地运行

```bash
pnpm install
pnpm dev
```

开发服务器会使用 `43129` 端口，并通过轮询实时监听 Markdown 与代码变化。请手动打开 `http://localhost:43129`。

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

产品介绍放在 `content/products/`，对应落地页放在 `app/pages/products/`。

## 协作与提交

每完成一个独立模块，都应先运行相关检查并报告结果。默认由用户手动提交；只有用户明确要求时，才只暂存该模块的文件，使用 `<type>(<scope>): <中文说明>` 格式提交，并按要求推送当前分支。开始新模块前先检查工作区；如果上一次提交或推送失败，先处理遗留改动，不重复创建提交。

## 构建

```bash
pnpm build
```
