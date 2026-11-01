---
title: 间距与栅格
---

# 间距与栅格

<span class="level level-must">🔴 第 4 节 · 强制</span>

所有间距必须来自 4px 的基础单位，且只能取允许值中的数字。`13px`、`18px`、`30px` 这类值一律视为偏差。

## 4.1 基础单位

| 项目 | 值 |
| --- | --- |
| 基础单位 | `4px` |
| 允许值 | 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48px |
| 常用档位 | `8px` 紧凑 · `16px` 常规 · `24px` 区块 |

## 4.2 间距刻度

<div class="demo">
  <div class="demo-label">spacing-scale</div>
  <div class="demo-stage block">
    <div class="space-list">
      <div class="space-row">
        <span class="space-name">--space-1</span>
        <span class="space-bar" style="width:16px;"></span>
        <span class="space-value">4px</span>
      </div>
      <div class="space-row">
        <span class="space-name">--space-2</span>
        <span class="space-bar" style="width:32px;"></span>
        <span class="space-value">8px</span>
      </div>
      <div class="space-row">
        <span class="space-name">--space-3</span>
        <span class="space-bar" style="width:48px;"></span>
        <span class="space-value">12px</span>
      </div>
      <div class="space-row">
        <span class="space-name">--space-4</span>
        <span class="space-bar" style="width:64px;"></span>
        <span class="space-value">16px</span>
      </div>
      <div class="space-row">
        <span class="space-name">--space-5</span>
        <span class="space-bar" style="width:80px;"></span>
        <span class="space-value">20px</span>
      </div>
      <div class="space-row">
        <span class="space-name">--space-6</span>
        <span class="space-bar" style="width:96px;"></span>
        <span class="space-value">24px</span>
      </div>
      <div class="space-row">
        <span class="space-name">--space-8</span>
        <span class="space-bar" style="width:128px;"></span>
        <span class="space-value">32px</span>
      </div>
      <div class="space-row">
        <span class="space-name">--space-10</span>
        <span class="space-bar" style="width:160px;"></span>
        <span class="space-value">40px</span>
      </div>
      <div class="space-row">
        <span class="space-name">--space-12</span>
        <span class="space-bar" style="width:192px;"></span>
        <span class="space-value">48px</span>
      </div>
    </div>
  </div>
</div>

## 4.3 布局尺寸

| 区域 | 尺寸 | 说明 |
| --- | --- | --- |
| 左侧菜单 | `200px` | 折叠后 `64px` |
| 顶部导航 | `90px` | 含品牌区与全局操作 |
| 内容区左右留白 | `24px` | 左右各 24px，不做响应式压缩 |

<div class="demo">
  <div class="demo-label">layout-200-90-24</div>
  <div class="layout-demo">
    <div class="layout-side">
      <strong>左侧菜单 200px</strong>
      折叠后 64px
    </div>
    <div class="layout-main">
      <div class="layout-top">顶部导航 90px</div>
      <div class="layout-content">
        <div class="layout-card">内容区 · 左右留白 24px</div>
      </div>
    </div>
  </div>
  <div class="demo-note">示意图按比例缩小展示，实际尺寸以上表为准。</div>
</div>

## 4.4 使用约束

<ul class="rules">
  <li class="must">禁止出现允许值以外的间距；需要微调时回到设计稿确认，而不是就近取整。</li>
  <li class="must">同一容器内的上下内边距必须相等，例如卡片统一 <code>16px</code>，不要上 12px 下 16px。</li>
  <li class="recommend">表单项垂直间距 <code>16px</code>，按钮组水平间距 <code>8px</code>。</li>
  <li class="recommend">区块之间用 <code>24px</code>，同区块内元素用 <code>8px</code>，形成两级节奏。</li>
  <li class="optional">栅格列数不在本版规范内约束，按具体页面信息密度决定。</li>
</ul>

## 4.5 代码

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;

  --layout-sidebar-width: 200px;
  --layout-sidebar-collapsed: 64px;
  --layout-header-height: 90px;
  --layout-content-gutter: 24px;
}
```
