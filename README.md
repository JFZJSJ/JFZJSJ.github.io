# 鸡分拯救世界 · 个人博客

一个极简的个人博客静态站点：**零依赖、无构建工具**，只有 HTML / CSS / 几行 JavaScript，
双击 `index.html` 就能在浏览器里打开。

## 目录结构

```
personal-blog/
├── index.html            # 首页：个人介绍 + 文章列表
├── about.html            # 关于页
├── css/
│   └── style.css         # 全局样式（含深色模式，跟随系统）
├── js/
│   └── main.js           # 页脚年份、阅读时长小脚本
├── posts/
│   ├── hello-world.html  # 示例文章 1
│   ├── tech-stack.html   # 示例文章 2
│   └── slow-down.html    # 示例文章 3
└── README.md
```

## 如何预览

**方式一（最简单）**：直接双击 `index.html`，浏览器即可打开。

**方式二（推荐，路径更干净）**：在项目目录下启动一个静态服务器：

```bash
# Python
python -m http.server 8000
# 然后浏览器访问 http://localhost:8000
```

## 如何改成你自己的

1. **个人资料**：昵称（鸡分拯救世界）、GitHub（JFZJSJ）、Gitee（bao-shusen）、
   邮箱（2593194911@qq.com）已经填好；微博 / RSS 还是占位，在 `index.html` 和
   `about.html` 里改成你的。
2. **换头像**：把新照片放到 `assets/avatar.jpg` 覆盖即可（当前用的是桌面「灵活奋斗」图片）。
3. **加文章**：复制 `posts/` 里的任意一篇，改标题、日期、正文和标签；
   再在 `index.html` 的「最新文章」区域复制一份 `.post-card` 卡片并修改链接。
4. **改社交链接**：`index.html` 的 `.hero-social` 区块里，微博 / RSS 的 `href` 换成你的地址。

## 部署到 GitHub Pages（推荐）

> 你的 GitHub 是 https://github.com/JFZJSJ 。
> 想得到最简洁的网址 **https://JFZJSJ.github.io**，仓库名必须叫 `JFZJSJ.github.io`。

### 方式一：网页上传（不需要命令行，约 2 分钟）

1. 打开 https://github.com/new ，仓库名填 `JFZJSJ.github.io`，选 **Public**，
   其他保持默认，点 **Create repository**
2. 进入仓库 → 点 **Add file → Upload files**
3. 把本文件夹里的内容拖进去：`index.html`、`about.html`、`css/`、`js/`、
   `posts/`、`assets/`（**一个都不能少，尤其 `assets/` 里是头像**）
4. 点 **Commit changes**
5. 仓库 **Settings → Pages** → Source 选 **Deploy from a branch** →
   分支 `main`、目录 `/ (root)` → **Save**
6. 等 1~2 分钟，打开 **https://JFZJSJ.github.io** 就能看到了

### 方式二：git 命令行（本机已装 git）

```bash
cd D:\dsh\personal-blog
git init
git add .
git commit -m "init blog"
git branch -M main
git remote add origin https://github.com/JFZJSJ/JFZJSJ.github.io.git
git push -u origin main
```

推送时会弹出 GitHub 登录窗口（或要求输入用户名 + Token），登录后按上面的
第 5 步开启 Pages 即可。

### 其他免费方案

| 平台 | 说明 |
| --- | --- |
| [Vercel](https://vercel.com/) | 直接拖入文件夹即可部署，自动 HTTPS |
| [Netlify](https://www.netlify.com/) | 拖入文件夹即可，支持自定义域名 |

因为是纯静态页面，任意静态托管都能用，部署后无需任何配置。

## 小功能

- 自动适配浅色 / 深色模式（跟随系统设置）
- 页脚年份自动更新
- 文章页自动估算阅读时长
- 手机端自适应布局
