---
layout: home

hero:
  name: 公司产品 UI 设计规范
  text: v0.1
  tagline: 一套可验证的设计 Token 与组件标准，让设计与实现保持一致
  actions:
    - theme: brand
      text: 开始阅读
      link: /guide/
    - theme: alt
      text: 色彩规范
      link: /foundation/color
    - theme: alt
      text: 组件规范
      link: /components/button

features:
  - icon: 🎨
    title: Token 驱动
    details: 颜色、字体、间距、圆角、阴影全部以 CSS 变量交付，业务代码禁止硬编码数值。
  - icon: 🧩
    title: 状态完整
    details: 每个交互组件必须覆盖默认、悬停、按下、禁用、加载与错误状态，缺一即为缺陷。
  - icon: ✅
    title: 可验证
    details: 规则按「强制 / 推荐 / 可选」分级，可直接用于代码检查与设计走查清单。
  - icon: 📄
    title: 唯一源文件
    details: 本规范是唯一源文件，Trae 规则与前端 Token 均由此派生，不单独维护两份数值。
---

## 文档结构

| 章节 | 内容 | 强制等级 |
| --- | --- | --- |
| [设计原则](/guide/principles) | 一致优先、克制装饰、状态完整、可验证 | <span class="level level-must">强制</span> |
| [色彩规范](/foundation/color) | 品牌色、语义色、中性色共 15 个色值 Token | <span class="level level-must">强制</span> |
| [字体与排版](/foundation/typography) | 4 级字号、字重、行高与字体族 | <span class="level level-must">强制</span> |
| [间距与栅格](/foundation/spacing) | 4px 基础单位、允许值、页面布局尺寸 | <span class="level level-must">强制</span> |
| [圆角与阴影](/foundation/radius-shadow) | 3 档圆角、2 档阴影、层级用法 | <span class="level level-recommend">推荐</span> |
| [组件规范](/components/button) | 按钮、表单、表格、弹窗 | <span class="level level-must">强制</span> |
| [交互与可访问性](/guide/accessibility) | 点击区域、对比度、动效时长 | <span class="level level-recommend">推荐</span> |
| [交付与验收](/guide/delivery) | 开发侧 Token 交付、测试侧走查清单 | — |
| [Trae 规则文件](/resources/trae-rules) | 从第 2–8 节派生的 AI 编码规则 | — |

## 快速接入

将下列 Token 引入项目全局样式，即可与本文档保持一致：

```css
:root {
  /* 品牌色 */
  --color-primary: #3370ff;
  --color-primary-hover: #4e83fd;
  --color-primary-active: #245bdb;
  --color-primary-light: #e1eaff;

  /* 语义色 */
  --color-success: #00b42a;
  --color-warning: #ff7d00;
  --color-danger: #f53f3f;
  --color-info: #86909c;

  /* 中性色 */
  --color-text-primary: #1d2129;
  --color-text-secondary: #4e5969;
  --color-text-disabled: #c9cdd4;
  --color-border: #e5e6eb;
  --color-bg-page: #f2f3f5;
  --color-bg-container: #ffffff;
  --color-bg-hover: #f7f8fa;

  /* 圆角与阴影 */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --shadow-card: 0 1px 4px rgba(0, 0, 0, 0.05);
  --shadow-modal: 0 8px 24px rgba(0, 0, 0, 0.15);
}
```
