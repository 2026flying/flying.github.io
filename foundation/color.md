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
      <span class="swatch-usage">灰悬停：按钮、Chip、图标按钮</span>
    </div>
  </div>
  <div class="swatch">
    <div class="swatch-chip" style="background:#E6F3FE; color:#3370FF;">#E6F3FE</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-bg-hover-blue</span>
      <span class="swatch-usage">浅蓝悬停：表格行、侧边菜单、页签、列表行</span>
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
| `--color-bg-hover` | 灰悬停：按钮、Chip、图标按钮 | `#F7F8FA` |
| `--color-bg-hover-blue` | 浅蓝悬停：表格行、侧边菜单、分组标题、页签、一般列表行（v0.6 新增） | `#E6F3FE` |
| `--color-table-row-hover` | `--color-bg-hover-blue` 的语义别名，仅表格使用 | `#E6F3FE` |

## 2.4 动作语义色

用于工具条实心按钮与表格操作标签。这是**固定映射**，不由页面自由选择配色。

<div class="swatch-grid">
  <div class="swatch">
    <div class="swatch-chip" style="background:#3370FF; color:#fff;">#3370FF</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-primary</span>
      <span class="swatch-usage">查询 / 通过 / 催办 / 打印 / 启用</span>
    </div>
  </div>
  <div class="swatch">
    <div class="swatch-chip" style="background:#F67437; color:#fff;">#F67437</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-action-warning</span>
      <span class="swatch-usage">重置 / 退回</span>
    </div>
  </div>
  <div class="swatch">
    <div class="swatch-chip" style="background:#FAAD25; color:#fff;">#FAAD25</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-action-hold</span>
      <span class="swatch-usage">暂存</span>
    </div>
  </div>
  <div class="swatch">
    <div class="swatch-chip" style="background:#15C7D6; color:#fff;">#15C7D6</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-action-custom</span>
      <span class="swatch-usage">自定义按钮（全站唯一）</span>
    </div>
  </div>
  <div class="swatch">
    <div class="swatch-chip" style="background:#00B42A; color:#fff;">#00B42A</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-success</span>
      <span class="swatch-usage">撤回 / 流程跟踪</span>
    </div>
  </div>
  <div class="swatch">
    <div class="swatch-chip" style="background:#F53F3F; color:#fff;">#F53F3F</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-danger</span>
      <span class="swatch-usage">关闭 / 删除 / 作废 / 禁用</span>
    </div>
  </div>
  <div class="swatch">
    <div class="swatch-chip" style="background:#898989; color:#fff;">#898989</div>
    <div class="swatch-body">
      <span class="swatch-token">--color-action-neutral</span>
      <span class="swatch-usage">取消（唯一灰底按钮）</span>
    </div>
  </div>
</div>

| Token | 用途 | 色值 |
| --- | --- | --- |
| `--color-primary` | 查询、通过、催办、打印、启用 | `#3370FF` |
| `--color-action-warning` | 重置、退回 | `#F67437` |
| `--color-action-hold` | 暂存 | `#FAAD25` |
| `--color-action-custom` | 自定义按钮 | `#15C7D6` |
| `--color-success` | 撤回、流程跟踪 | `#00B42A` |
| `--color-danger` | 关闭、删除、作废、禁用 | `#F53F3F` |
| `--color-action-neutral` | 取消 | `#898989` |

::: warning 动作色不许自由发挥
动作色只允许上表 7 种。新增按钮必须归入已有语义，不得新造颜色。截图实测的 `#3772FF` / `#EC3233` / `#14A204` 与 Token 差 4–13 个色阶，属实现偏差，一律回落到 Token 值。
:::

## 2.5 状态标签色

状态标签不使用实心填充，统一「浅底 + 同色描边 + 同色文字」。

| 色相 | 文字 | 背景 | 典型状态 |
| --- | --- | --- | --- |
| 青绿 | `#20BC98` | `#EDFCF8` | 草稿、已读、已审批 |
| 天蓝 | `#2E9BF0` | `#F6FAFF` | 审批中、未读、浏览 |
| 橙 | `#F67437` | `#FCEEE8` | 已办结、进行中 |
| 蓝 | `#3370FF` | `#EBF1FE` | 启用、委托中 |
| 红 | `#E04303` | `#FBECE5` | 禁用、是 |
| 灰 | `#ABABAB` | `#F1F1F1` | 已作废、已失效、否 |

## 用法速查

| 场景 | 前景 | 背景 | 边框 |
| --- | --- | --- | --- |
| 页面容器 | `--color-text-primary` | `--color-bg-page` | — |
| 卡片 / 弹窗 | `--color-text-primary` | `--color-bg-container` | `--color-border` |
| 列表行 / 侧边菜单 / 页签 hover | `--color-text-primary` | `--color-bg-hover-blue` | — |
| 表格行 hover | `--color-text-primary` | `--color-table-row-hover` | — |
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

  /* 动作语义色 */
  --color-action-warning: #f67437;
  --color-action-hold: #faad25;
  --color-action-custom: #15c7d6;
  --color-action-neutral: #898989;
  --color-action-teal: #20bc98;
  --color-action-sky: #2e9bf0;

  /* 中性色 */
  --color-text-primary: #1d2129;
  --color-text-secondary: #4e5969;
  --color-text-disabled: #c9cdd4;
  --color-border: #e5e6eb;
  --color-bg-page: #f2f3f5;
  --color-bg-container: #ffffff;
  --color-bg-hover: #f7f8fa;
  --color-bg-hover-blue: #e6f3fe;
  --color-table-row-hover: var(--color-bg-hover-blue);
}
```
