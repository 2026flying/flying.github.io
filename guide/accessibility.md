---
title: 交互与可访问性
---

# 交互与可访问性

<span class="level level-recommend">🟡 第 7 节 · 推荐</span>

三条基础要求：可点击区域、对比度、动效时长。它们不改变视觉风格，但直接决定可用性与无障碍合规。

## 7.1 基础要求

| 项目 | 要求 | 等级 |
| --- | --- | --- |
| 可点击区域 | 不小于 `32px`（宽高） | <span class="level level-recommend">推荐</span> |
| 文字对比度 | 满足 WCAG AA | <span class="level level-recommend">推荐</span> |
| 动效时长 | `200ms` | <span class="level level-recommend">推荐</span> |

## 7.2 可点击区域

<ul class="rules">
  <li class="recommend">所有可点击元素的命中区域不小于 <code>32px × 32px</code>；图标按钮常用 <code>32px</code> 并配合 <code>8px</code> 视觉留白。</li>
  <li class="must">视觉尺寸可以小于 32px，但必须用 padding 把命中区域撑到 32px，例如 24px 图标外包一层 <code>4px</code> 内边距。</li>
  <li class="recommend">相邻可点击元素的间距不小于 <code>8px</code>，避免误触。</li>
</ul>

<div class="demo">
  <div class="demo-label">hit-area / 32×32</div>
  <div class="demo-stage">
    <button class="btn btn-default" style="width:32px; height:32px; padding:0;">✎</button>
    <button class="btn btn-default" style="width:32px; height:32px; padding:0;">⋯</button>
    <span style="font-size:12px; color:var(--color-text-secondary);">图标按钮：32×32 命中区</span>
  </div>
  <div class="demo-note">表格行内图标操作必须保证 32px 命中区，否则高度密集的下拉菜单极易误触。</div>
</div>

## 7.3 对比度

按 WCAG 2.1 相对亮度公式计算的实测比值（白底 `#FFFFFF`）：

| 前景色 | 用作 | 对比度 | AA 正文（4.5:1） |
| --- | --- | --- | --- |
| `--color-text-primary` `#1D2129` | 正文、表头 | 16.1 : 1 | ✅ 通过 |
| `--color-text-secondary` `#4E5969` | 辅助文字 | 7.1 : 1 | ✅ 通过 |
| `--color-primary-active` `#245BDB` | 正文链接、强调文字 | 5.8 : 1 | ✅ 通过 |
| `--color-primary` `#3370FF` | 链接、按钮底 | 4.3 : 1 | ⚠️ 临界 |
| `--color-info` `#86909C` | 图标、中性提示 | 3.2 : 1 | ⚠️ 仅图标 / 大字号 |
| `--color-text-disabled` `#C9CDD4` | 禁用文字、占位符 | 1.6 : 1 | — 禁用态豁免 |

<ul class="rules">
  <li class="must">正文与表单文字只能用 <code>--color-text-primary</code> 或 <code>--color-text-secondary</code>，不要用 <code>--color-info</code> 排正文。</li>
  <li class="recommend">仅靠主色区分链接时，正文链接建议加下划线；或改用 <code>--color-primary-active</code> 提升到 5.8:1。</li>
  <li class="recommend">主按钮白字为 4.3:1，处于 AA 临界，建议按钮文字使用 600 字重，或由规范负责人复核主色是否需要加深。</li>
  <li class="must">不得用颜色单独传达状态，需配合文字或图标（例如「失败」标签必须带文字）。</li>
</ul>

::: warning 待确认项
上表中两处 ⚠️ 由计算得出，源规范未做对比度评估。建议在 v0.2 明确：链接文字是否允许用 <code>--color-primary</code>、主按钮文字是否强制 600 字重。
:::

## 7.4 动效

<ul class="rules">
  <li class="recommend">所有状态过渡统一 <code>200ms</code>，使用 <code>ease</code> 或 <code>ease-in-out</code>。</li>
  <li class="must">只过渡颜色、透明度、阴影、位移，不过渡 <code>width</code> / <code>height</code> 等触发布局的属性。</li>
  <li class="recommend">不使用缩放（scale）做点击反馈，避免文字发虚与布局抖动。</li>
  <li class="must">弹窗、抽屉的进出动画不得超过 <code>300ms</code>，且需支持 <code>prefers-reduced-motion</code>。</li>
</ul>

```css
.btn,
.input,
.tag {
  transition:
    background-color 200ms ease,
    border-color 200ms ease,
    color 200ms ease;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 7.5 键盘与焦点

| 要求 | 说明 | 等级 |
| --- | --- | --- |
| 焦点可见 | `:focus-visible` 必须有可见轮廓，不能被 `outline: none` 抹掉 | <span class="level level-must">强制</span> |
| 操作可达 | 所有鼠标可完成的操作，键盘均可完成 | <span class="level level-must">强制</span> |
| 弹窗焦点 | 打开时焦点进入弹窗，关闭后回到触发元素 | <span class="level level-recommend">推荐</span> |

```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```
