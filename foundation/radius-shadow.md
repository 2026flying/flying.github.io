---
title: 圆角与阴影
---

# 圆角与阴影

<span class="level level-recommend">🟡 第 5 节 · 推荐</span>

圆角只有 3 档，阴影只有 2 档。档位越少，界面越统一；偏离档位需要说明理由。

## 5.1 Token 表

| Token | 值 | 用途 |
| --- | --- | --- |
| `--radius-sm` | `2px` | 标签、复选框 |
| `--radius-md` | `4px` | 按钮、输入框 |
| `--radius-lg` | `8px` | 卡片、弹窗 |
| `--shadow-card` | `0 1px 4px rgba(0,0,0,0.05)` | 卡片 |
| `--shadow-modal` | `0 8px 24px rgba(0,0,0,0.15)` | 弹窗 |

## 5.2 圆角

<div class="tile-grid">
  <div class="tile" style="border-radius:2px;">
    <span class="tile-token">--radius-sm</span>
    <span>2px</span>
  </div>
  <div class="tile" style="border-radius:4px;">
    <span class="tile-token">--radius-md</span>
    <span>4px</span>
  </div>
  <div class="tile" style="border-radius:8px;">
    <span class="tile-token">--radius-lg</span>
    <span>8px</span>
  </div>
</div>

| 元素 | 圆角档位 |
| --- | --- |
| 标签 Tag、复选框、小色块 | `--radius-sm` |
| 按钮、输入框、下拉框 | `--radius-md` |
| 卡片、弹窗、面板、图片容器 | `--radius-lg` |
| 头像、圆形图标按钮 | `50%` |

## 5.3 阴影

<div class="tile-grid">
  <div class="tile" style="border-radius:8px; border-color:transparent; box-shadow:0 1px 4px rgba(0,0,0,0.05);">
    <span class="tile-token">--shadow-card</span>
    <span>卡片</span>
  </div>
  <div class="tile" style="border-radius:8px; border-color:transparent; box-shadow:0 8px 24px rgba(0,0,0,0.15);">
    <span class="tile-token">--shadow-modal</span>
    <span>弹窗</span>
  </div>
  <div class="tile" style="border-radius:8px; border-color:transparent; box-shadow:none;">
    <span class="tile-token">无阴影</span>
    <span>平面内容</span>
  </div>
</div>

<ul class="rules">
  <li class="recommend">阴影只用于表达「浮起」：卡片、弹窗、下拉菜单、气泡提示。</li>
  <li class="must">平面内容（表格行、表单区块、页面容器）不加阴影，用边框或背景区分层级。</li>
  <li class="must">不得自造阴影值。需要更弱的层级时优先用 <code>--color-border</code> 边框，而不是把阴影调淡。</li>
</ul>

## 5.4 层级关系

三者的层级从低到高固定为：页面 → 卡片 → 弹窗，视觉上通过「背景 + 阴影 + 遮罩」共同表达。

| 层级 | 背景 | 阴影 | 遮罩 |
| --- | --- | --- | --- |
| 页面 | `--color-bg-page` | 无 | 无 |
| 卡片 / 面板 | `--color-bg-container` | `--shadow-card` | 无 |
| 弹窗 | `--color-bg-container` | `--shadow-modal` | `rgba(0,0,0,0.4)` |

::: tip 判断方法
如果一个元素既在页面上、又需要被「拎起来」，先看它是否阻断用户操作：阻断操作（弹窗、确认框）用 `--shadow-modal` + 遮罩；不阻断（卡片、悬浮面板）用 `--shadow-card`，且不加遮罩。
:::

## 5.5 代码

```css
:root {
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;

  --shadow-card: 0 1px 4px rgba(0, 0, 0, 0.05);
  --shadow-modal: 0 8px 24px rgba(0, 0, 0, 0.15);

  --modal-mask: rgba(0, 0, 0, 0.4);
}

.card {
  background: var(--color-bg-container);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
}

.modal {
  background: var(--color-bg-container);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-modal);
}
```
