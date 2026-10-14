# 马克思主义哲学研学社 · 官网

> 研读经典 · 明理笃行

本仓库是「马克思主义哲学研学社」的官方网站源码，使用纯静态 HTML / CSS / JS 构建，无需编译，可直接部署到任意静态托管平台（含 EdgeOne Pages / GitHub Pages）。

## 站点结构

```
marxist-philosophy-society/
├── index.html          # 首页
├── about.html          # 社团介绍
├── reading.html        # 经典研读（书单 + 笔记入口）
├── events.html         # 活动预告（时间线）
├── contact.html        # 联系我们（含留言表单）
├── assets/
│   ├── css/style.css   # 全局样式（CSS 变量主题，响应式）
│   └── js/main.js      # 移动端导航、页脚年份、表单演示
└── README.md
```

## 本地预览

直接用浏览器打开 `index.html` 即可；或启动一个本地静态服务器：

```bash
# Python
python -m http.server 8080
# 然后访问 http://localhost:8080
```

## 如何修改内容

- **社团名称 / 口号**：搜索各页面中的「马哲研学社」「研读经典 · 明理笃行」替换即可。
- **书单 / 活动**：在 `reading.html`、`events.html` 中按现有卡片 / 时间线结构增删。
- **配色主题**：编辑 `assets/css/style.css` 顶部的 `:root` CSS 变量。
- **联系方式**：在 `contact.html` 中更新邮箱与地点。

## 部署

- **EdgeOne Pages**：用「直接上传文件夹」方式部署本目录，自动获得 HTTPS + 全球加速。
- **GitHub Pages**：在仓库 Settings → Pages 选择分支根目录即可。

## 后续可扩展方向

- 接入真正的表单后端（如云函数 / 表单服务）替代演示表单。
- 用 Markdown + 静态生成器（如 Astro）管理研读笔记，便于持续产出。
- 增加文章详情页、RSS、站内搜索。

---

*本站为学习研究用途。*
