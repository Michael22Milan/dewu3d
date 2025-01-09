# 企业官网项目

基于 Next.js 14 + TypeScript + Tailwind CSS 构建的现代化企业官网。

## 技术栈

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- ESLint
- PostCSS

## 项目结构

```
├── app/                    # Next.js 14 应用目录
│   ├── (main)/            # 主要路由组
│   │   ├── page.tsx       # 首页
│   │   ├── about/        # 关于我们
│   │   ├── products/     # 产品与技术
│   │   ├── solutions/    # 行业解决方案
│   │   ├── news/         # 新闻资讯
│   │   └── contact/      # 联系我们
│   ├── layout.tsx         # 全局布局
│   └── globals.css        # 全局样式
├── components/            # 可复用组件
│   ├── layout/           # 布局组件
│   │   ├── Header.tsx    # 导航头部
│   │   └── Footer.tsx    # 页面底部
│   └── ui/               # UI 组件
├── lib/                  # 工具函数和配置
├── public/               # 静态资源
└── types/                # TypeScript 类型定义
```

## 功能特点

- 响应式设计，适配各种设备
- 现代化的UI/UX设计
- 优化的性能和加载速度
- SEO 友好
- 支持中文字体优化

## 开始使用

1. 安装依赖：

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

2. 运行开发服务器：

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

3. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 构建部署

```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

## 主要页面

- 首页 (/)：企业形象展示，核心业务介绍
- 产品与技术 (/products)：产品列表和技术优势
- 行业解决方案 (/solutions)：不同行业的应用案例
- 新闻资讯 (/news)：企业动态和行业新闻
- 关于我们 (/about)：公司介绍和发展历程
- 联系我们 (/contact)：联系方式和留言表单

## 开发规范

- 组件采用 TypeScript 开发
- 样式使用 Tailwind CSS
- 遵循 ESLint 规范
- 提交前进行代码格式化

## 注意事项

- 开发时请确保 Node.js 版本 >= 18.17.0
- 建议使用 pnpm 作为包管理工具
- 图片资源请放置在 public 目录下
- 组件开发请遵循 TypeScript 类型检查
