---
title: 字体与排版
---

# 字体与排版

<span class="level level-must">🔴 第 3 节 · 强制</span>

字号只允许 4 级，字重只用 400 / 600，行高统一 `1.5`。超过 4 级字号会让层级失效。

## 3.1 字号层级

<div class="demo">
  <div class="demo-label">type-scale</div>
  <div class="demo-stage block" style="padding:0;">
    <div class="type-row">
      <span class="type-label">页面标题</span>
      <span class="type-sample" style="font-size:20px; font-weight:600; line-height:1.5;">客户管理</span>
      <span class="type-spec">20 / 600 / 1.5</span>
    </div>
    <div class="type-row">
      <span class="type-label">模块标题</span>
      <span class="type-sample" style="font-size:16px; font-weight:600; line-height:1.5;">新建客户</span>
      <span class="type-spec">16 / 600 / 1.5</span>
    </div>
    <div class="type-row">
      <span class="type-label">正文 / 表格</span>
      <span class="type-sample" style="font-size:14px; font-weight:400; line-height:1.5;">请填写客户名称与联系人信息，保存后可继续补充合同资料。</span>
      <span class="type-spec">14 / 400 / 1.5</span>
    </div>
    <div class="type-row">
      <span class="type-label">辅助说明</span>
      <span class="type-sample" style="font-size:12px; font-weight:400; line-height:1.5;">共 128 条记录，最后同步于 10 分钟前</span>
      <span class="type-spec">12 / 400 / 1.5</span>
    </div>
  </div>
</div>

| 层级 | 字号 | 字重 | 行高 | 用途 |
| --- | --- | --- | --- | --- |
| 页面标题 | `20px` | `600` | `1.5` | 极少用 |
| 模块标题 | `16px` | `600` | `1.5` | 弹窗标题、卡片标题 |
| 正文 / 表格 | `14px` | `400` | `1.5` | 常规表单、数据、按钮 |
| 辅助说明 | `12px` | `400` | `1.5` | 表头、次要信息 |

## 3.2 字体族

```css
font-family: 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif;
```

| 环境 | 命中字体 |
| --- | --- |
| macOS | PingFang SC |
| Windows | Microsoft YaHei |
| 其他 | Arial → sans-serif 兜底 |

<ul class="rules">
  <li class="must">不得引入第三方中文字体文件（体积过大），仅使用系统字体回退链。</li>
  <li class="must">数字和英文沿用同一字体族，不单独指定等宽字体；代码块、Token 名等场景除外。</li>
  <li class="recommend">字重只使用 400 与 600，不使用 500、700 等中间值，避免跨平台渲染差异。</li>
</ul>

## 3.3 使用约束

| 约束 | 说明 |
| --- | --- |
| 字号不可自定义 | 出现 13px、15px 等中间值视为偏差 |
| 页面标题少用 | 页面内已在导航呈现标题时，正文标题从 16px 起 |
| 行高固定 1.5 | 不随字号调整，避免多行文本节奏不一致 |
| 中文不加字间距 | `letter-spacing` 保持默认，仅表头等短标签可用 `0.2px` |

## 3.4 代码

```css
:root {
  --font-family: 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif;

  --font-size-page: 20px;
  --font-size-module: 16px;
  --font-size-body: 14px;
  --font-size-aux: 12px;

  --line-height-base: 1.5;
}

/* 页面标题（极少用） */
.text-page-title {
  font-size: var(--font-size-page);
  font-weight: 600;
  line-height: var(--line-height-base);
}

/* 模块标题：弹窗、卡片 */
.text-module-title {
  font-size: var(--font-size-module);
  font-weight: 600;
  line-height: var(--line-height-base);
}

/* 正文、表格、按钮 */
.text-body {
  font-size: var(--font-size-body);
  font-weight: 400;
  line-height: var(--line-height-base);
}

/* 表头、次要信息 */
.text-aux {
  font-size: var(--font-size-aux);
  font-weight: 400;
  line-height: var(--line-height-base);
}
```
