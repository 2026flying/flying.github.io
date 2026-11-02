---
title: 图标按钮与工具条
---

# 图标按钮与工具条

<span class="level level-recommend">🟡 第 6.8 节 · 推荐</span>

用于展开收起、导入导出、打印等无文字场景。所有图标按钮命中区不小于 32px。

## 6.8.1 形态

<div class="demo">
  <div class="demo-label">icon-button / default &amp; primary</div>
  <div class="demo-stage">
    <button class="icon-btn" title="收起">︿</button>
    <button class="icon-btn" title="展开">﹀</button>
    <button class="icon-btn icon-btn-primary" title="导入">↓</button>
    <button class="icon-btn icon-btn-primary" title="打印">⎙</button>
    <button class="icon-btn icon-btn-primary" title="导入（悬停态）" style="background:var(--color-primary-light); border-color:var(--color-primary);">↓</button>
    <span class="chip">普通</span>
  </div>
  <div class="demo-note">前两个为默认灰边图标按钮；中间为主色描边图标按钮；第 5 个为悬停态。</div>
</div>

| 形态 | 样式 | 用途 |
| --- | --- | --- |
| 默认图标按钮 | 白底 + `1px --color-border` 边框，图标 `--color-text-secondary` | 展开 / 收起、更多 |
| 主色图标按钮 | 白底 + 主色图标 + 主色描边 | 导入、导出、打印 |
| 悬停态 | 背景 `--color-primary-light`，边框转主色，图标转主色 | 全部 |
| 普通按钮 | 白底 + 浅蓝描边 + 主色文字 | 工具条次级动作 |

<ul class="rules">
  <li class="must">图标按钮尺寸 <code>32×32</code>，图标 <code>16×16</code>，命中区不得小于 32px。</li>
  <li class="must">展开 / 收起必须是<b>成对</b>的上箭头 + 下箭头，禁用时整体转灰，不隐藏其中一个。</li>
  <li class="must">每个图标按钮必须有 <code>title</code> 或 <code>aria-label</code>，否则键盘与读屏用户无法识别。</li>
  <li class="recommend">同一工具条内的图标按钮保持同一尺寸，不要混入 24px 的小尺寸。</li>
  <li class="recommend">图标按钮之间间距 <code>8px</code>，图标按钮组与实心按钮组之间 <code>16px</code>。</li>
</ul>

## 6.8.2 单选与复选框

<div class="demo">
  <div class="demo-label">radio &amp; checkbox</div>
  <div class="demo-stage">
    <div class="option-row">
      <span class="radio-dot"></span>
      <span class="radio-empty"></span>
      <span class="check-box">✓</span>
      <span class="check-empty"></span>
    </div>
  </div>
  <div class="demo-note">选中色统一使用主色，尺寸 18px，圆角：单选 50%、复选 2px。</div>
</div>

## 6.8.3 代码

```css
.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-bg-container);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: background-color 200ms, border-color 200ms, color 200ms;
}

.icon-btn:hover {
  background: var(--color-primary-light);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

/* 主色描边变体：导入 / 导出 / 打印 */
.icon-btn-primary {
  color: var(--color-primary);
  border-color: #c7d8ff;
}
```

进度条已独立成章，见[进度条 Progress](/components/progress)。
