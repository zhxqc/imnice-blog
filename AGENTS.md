# AGENTS.md

## 项目定位

这是一个基于 Nuxt 4、Vue 3 和 Nuxt Content 的中文博客。项目保持轻量，文章内容放在 `content/` 中，优先满足真实写作需要，再增加功能。

## 协作工具

- 本项目以 OpenAI Codex 作为主要开发工具。
- 维护本文件作为项目级协作规则。
- 不创建或维护 `CLAUDE.md`，也不写 Claude Code 专用说明。

## 常用命令

```bash
pnpm install    # 安装依赖
pnpm dev        # 启动开发服务，使用 43129 端口并自动打开浏览器
pnpm build      # 构建生产版本
pnpm generate   # 生成静态站点
pnpm preview    # 预览生产构建
```

开发地址：`http://localhost:43129`

## 目录约定

- `app/app.vue`：全局布局、导航、页脚和全局样式。
- `app/pages/index.vue`：首页。
- `app/pages/[...slug].vue`：Markdown 内容页的通用渲染页面。
- `content/**/*.md`：文章和页面内容，包括 `content/products/` 下的产品介绍。
- `public/`：需要直接访问的静态资源。
- `README_zh-CN.md`：面向人的项目说明。

## 内容约定

新增文章时，在 `content/` 下创建 Markdown 文件，并包含以下 frontmatter：

```markdown
---
title: '文章标题'
description: '文章简介'
date: '2026-08-03'
---
```

默认使用中文文案。不要为了演示而重新添加无实际用途的 YAML、JSON、CSV 示例数据。

## 开发规则

- 保持现有 Nuxt 结构和 pnpm 工作流，不引入不必要的依赖或框架。
- 完成一个独立模块后，先运行相关检查，再自动提交该模块的代码，无需用户重复提醒；不要把多个未完成模块混在一次提交里。
- 开始新模块前先检查 `git status`。如果发现上一个模块留下的已暂存改动，先核对并收口它，再开始新的文件修改。
- 提交前检查 `git diff` 和 `git status`，只暂存当前模块相关文件；提交后检查工作区，确认没有遗漏或误纳入其他改动。
- 提交成功后，自动将当前分支推送到已配置的远程仓库：`git push origin <当前分支>`。
- 如果提交或推送因权限、网络或服务故障失败，保留未提交改动，记录失败阶段和原因；下一次继续工作前先处理这次未完成的提交，不创建重复提交。
- 提交信息使用 `<type>(<scope>): <中文说明>`，例如 `feat(mengya): 完善产品介绍` 或 `docs(config): 更新项目协作规则`。
- 不提交 `.nuxt/`、`.output/`、`.data/`、`node_modules/`、`.pnpm-store/`、日志或密钥文件。
- 不使用 `git reset --hard`、`git checkout --` 覆盖用户改动。

## 完成模块后的提交流程

1. 运行与改动相关的验证命令。
2. 查看差异，确认没有混入其他未完成工作。
3. 只暂存本模块文件并创建一次清晰的提交。
4. 提交成功后推送当前分支到远程仓库。
5. 向用户报告验证结果、提交摘要和推送结果。
