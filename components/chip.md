---
title: 操作标签 Chip
---

# 操作标签 Chip

<span class="level level-must">🔴 第 6.7 节 · 强制</span>

表格行内操作项达到 3 个以上时，改用「白底 + 浅描边 + 彩色文字」的标签形态。它比实心色块轻，又比纯文字更容易点中。

## 6.7.1 形态

<div class="demo">
  <div class="demo-label">chip / 操作列</div>
  <div class="demo-stage block">
    <div>
      <span class="chip chip-orange">置顶</span>
      <span class="chip">编辑</span>
      <span class="chip chip-red">删除</span>
      <span class="chip chip-teal">详情</span>
      <span class="chip chip-orange">干部审批表</span>
      <span class="chip chip-sky">浏览</span>
      <span class="chip chip-orange">审批意见</span>
      <span class="chip chip-green">流程跟踪</span>
      <span class="chip chip-teal">审批</span>
    </div>
    <div style="margin-top:8px;">
      <span class="chip">加签</span>
      <span class="chip chip-orange">减签</span>
      <span class="chip chip-red">作废</span>
      <span class="chip chip-red">禁用</span>
      <span class="chip">启用</span>
      <span class="chip chip-orange">增加转调人员</span>
      <span class="chip chip-gray">⋯</span>
    </div>
    <div style="margin-top:8px;">
      <span class="chip is-disabled">置顶</span>
      <span class="chip is-disabled">编辑</span>
      <span class="chip is-disabled">删除</span>
      <span class="chip is-disabled">详情</span>
      <span class="chip is-disabled">干部审批表</span>
      <span class="chip is-disabled">浏览</span>
      <span class="chip is-disabled">审批意见</span>
      <span class="chip is-disabled">流程跟踪</span>
    </div>
  </div>
  <div class="demo-note">最后一行是禁用态：去掉色相，统一灰边灰字。</div>
</div>

## 6.7.2 颜色映射

| 动作 | 色相 | Token |
| --- | --- | --- |
| 置顶、减签、审批意见、增加转调人员 | 橙 | `#F67437` |
| 编辑、加签、启用、浏览（天蓝） | 蓝 / 天蓝 | `#3370FF` / `#2E9BF0` |
| 删除、作废、禁用 | 红 | `#F53F3F` |
| 详情、审批 | 青绿 | `#20BC98` |
| 流程跟踪 | 绿 | `#00B42A` |
| 更多 `⋯` | 灰 | `#898989` |

<ul class="rules">
  <li class="must">Chip 只用于表格单元格与操作列，不用于页面工具条（工具条用实心按钮）。</li>
  <li class="must">同一动作在全站必须同色，禁止同一按钮在不同页面换色。</li>
  <li class="must">禁用态不保留色相：白底 + `--color-border` 边框 + `--color-text-disabled` 文字。</li>
  <li class="recommend">单行超过 5 个时，保留 2–3 个高频动作，其余收进 `⋯`。</li>
  <li class="recommend">Chip 之间间距 `6px`，换行行高 `28px`，避免密集到无法点击。</li>
</ul>

## 6.7.3 与文字按钮的取舍

| 形态 | 何时用 |
| --- | --- |
| 文字按钮 | 操作项 ≤ 2 个，且以「编辑 / 删除」这类标准动作为主 |
| Chip | 操作项 ≥ 3 个，或需要按语义区分类别（审批类 / 维护类 / 危险类） |

两种形态不得在同一列混用。

## 6.7.4 代码

```css
.chip {
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 8px;
  margin: 0 6px 6px 0;
  border-radius: var(--radius-md);
  border: 1px solid #e4ecfe;
  background: #f6faff;
  color: var(--color-primary);
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
}

.chip-orange { color: #f67437; background: #fff7f2; border-color: #fae6dd; }
.chip-red    { color: #f53f3f; background: #fff5f5; border-color: #fdebeb; }
.chip-teal   { color: #20bc98; background: #edfcf8; border-color: #e0f6f1; }
.chip-green  { color: #00b42a; background: #f5fcf4; border-color: #dff2dd; }
.chip-sky    { color: #2e9bf0; background: #f6faff; border-color: #e3f1fd; }

.chip.is-disabled {
  color: var(--color-text-disabled);
  background: var(--color-bg-container);
  border-color: var(--color-border);
  cursor: not-allowed;
}
```
