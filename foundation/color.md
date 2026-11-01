---
title: 色彩规范
---

# 色彩规范

<span class="level level-must">🔴 第 2 节 · 强制</span>

所有颜色必须走 Token，**禁止硬编码**。

<ul class="rules">
  <li class="must">业务代码中不得出现十六进制或 rgb() 色值，必须引用 CSS 变量，例如 <code>var(--color-primary)</code>。</li>
  <li class="must">同一语义只能用一个 Token。需要新的视觉差异时，先确认是否已有可用语义。</li>
  <li class="recommend">透明度不要直接写在色值里，浮层遮罩统一使用 <code>rgba(0,0,0,0.4)</code>。</li>
</ul>

## 2.1 品牌色

<div class="swatch-grid">
  <div class="swatch">
    <div class="swatch-chip" style="background:#3370FF; color:#fff;">#3370FF</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-primary</span>
      <span class="swatch-usage">主按钮、选中态、链接</span>
    </div>
  </div>
  <div class="swatch">
    <div class="swatch-chip" style="background:#4E83FD; color:#fff;">#4E83FD</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-primary-hover</span>
      <span class="swatch-usage">主色悬停</span>
    </div>
  </div>
  <div class="swatch">
    <div class="swatch-chip" style="background:#245BDB; color:#fff;">#245BDB</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-primary-active</span>
      <span class="swatch-usage">主色按下</span>
    </div>
  </div>
  <div class="swatch">
    <div class="swatch-chip" style="background:#E1EAFF; color:#3370FF;">#E1EAFF</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-primary-light</span>
      <span class="swatch-usage">选中态背景</span>
    </div>
  </div>
</div>

| Token | 用途 | 色值 |
| --- | --- | --- |
| `--color-primary` | 主按钮、选中态、链接 | `#3370FF` |
| `--color-primary-hover` | 主色悬停 | `#4E83FD` |
| `--color-primary-active` | 主色按下 | `#245BDB` |
| `--color-primary-light` | 选中态背景 | `#E1EAFF` |

## 2.2 语义色

<div class="swatch-grid">
  <div class="swatch">
    <div class="swatch-chip" style="background:#00B42A; color:#fff;">#00B42A</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-success</span>
      <span class="swatch-usage">成功、完成</span>
    </div>
  </div>
  <div class="swatch">
    <div class="swatch-chip" style="background:#FF7D00; color:#fff;">#FF7D00</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-warning</span>
      <span class="swatch-usage">警告</span>
    </div>
  </div>
  <div class="swatch">
    <div class="swatch-chip" style="background:#F53F3F; color:#fff;">#F53F3F</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-danger</span>
      <span class="swatch-usage">错误、删除</span>
    </div>
  </div>
  <div class="swatch">
    <div class="swatch-chip" style="background:#86909C; color:#fff;">#86909C</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-info</span>
      <span class="swatch-usage">中性提示</span>
    </div>
  </div>
</div>

| Token | 语义 | 色值 |
| --- | --- | --- |
| `--color-success` | 成功、完成 | `#00B42A` |
| `--color-warning` | 警告 | `#FF7D00` |
| `--color-danger` | 错误、删除 | `#F53F3F` |
| `--color-info` | 中性提示 | `#86909C` |

::: warning 语义色不要混用
「删除」按钮和「失败」提示都用 `--color-danger`，但不要用红色表达「重要」或「强调」——强调请用主色。语义色只表达状态，不表达优先级。
:::

## 2.3 中性色

<div class="swatch-grid">
  <div class="swatch">
    <div class="swatch-chip" style="background:#1D2129; color:#fff;">#1D2129</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-text-primary</span>
      <span class="swatch-usage">正文、表头</span>
    </div>
  </div>
  <div class="swatch">
    <div class="swatch-chip" style="background:#4E5969; color:#fff;">#4E5969</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-text-secondary</span>
      <span class="swatch-usage">辅助文字、Label</span>
    </div>
  </div>
  <div class="swatch">
    <div class="swatch-chip" style="background:#C9CDD4; color:#1D2129;">#C9CDD4</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-text-disabled</span>
      <span class="swatch-usage">禁用文字、占位符</span>
    </div>
  </div>
  <div class="swatch">
    <div class="swatch-chip" style="background:#E5E6EB; color:#4E5969;">#E5E6EB</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-border</span>
      <span class="swatch-usage">边框、分割线</span>
    </div>
  </div>
  <div class="swatch">
    <div class="swatch-chip" style="background:#F2F3F5; color:#4E5969;">#F2F3F5</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-bg-page</span>
      <span class="swatch-usage">页面底色</span>
    </div>
  </div>
  <div class="swatch">
    <div class="swatch-chip" style="background:#FFFFFF; color:#4E5969; border-bottom:1px solid #E5E6EB;">#FFFFFF</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-bg-container</span>
      <span class="swatch-usage">卡片、弹窗背景</span>
    </div>
  </div>
  <div class="swatch">
    <div class="swatch-chip" style="background:#F7F8FA; color:#4E5969;">#F7F8FA</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-bg-hover</span>
      <span class="swatch-usage">悬停背景、表头背景</span>
    </div>
  </div>
</div>

| Token | 用途 | 色值 |
| --- | --- | --- |
| `--color-text-primary` | 正文、表头 | `#1D2129` |
| `--color-text-secondary` | 辅助文字、Label | `#4E5969` |
| `--color-text-disabled` | 禁用文字、占位符 | `#C9CDD4` |
| `--color-border` | 边框、分割线 | `#E5E6EB` |
| `--color-bg-page` | 页面底色 | `#F2F3F5` |
| `--color-bg-container` | 卡片、弹窗背景 | `#FFFFFF` |
| `--color-bg-hover` | 悬停背景、表头背景 | `#F7F8FA` |

## 用法速查

| 场景 | 前景 | 背景 | 边框 |
| --- | --- | --- | --- |
| 页面容器 | `--color-text-primary` | `--color-bg-page` | — |
| 卡片 / 弹窗 | `--color-text-primary` | `--color-bg-container` | `--color-border` |
| 列表行 hover | `--color-text-primary` | `--color-bg-hover` | — |
| 选中项 | `--color-primary` | `--color-primary-light` | — |
| 禁用控件 | `--color-text-disabled` | `--color-bg-hover` | `--color-border` |
| 校验失败 | `--color-danger` | `--color-bg-container` | `--color-danger` |

## 完整 Token 代码

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
}
```
