---
title: 状态标签
---

# 状态标签 State Tag

<span class="level level-must">🔴 第 6.8 节 · 强制</span>

用于列表状态列与详情页。**不使用实心填充**，统一「浅底 + 同色描边 + 同色文字」，让状态退到信息层级里。

## 6.8.1 流程状态

<div class="demo">
  <div class="demo-label">state / 流程状态</div>
  <div class="demo-stage">
    <span class="state-tag state-teal">草稿</span>
    <span class="state-tag state-sky">审批中</span>
    <span class="state-tag state-orange">已办结</span>
    <span class="state-tag state-gray">已作废</span>
  </div>
</div>

## 6.8.2 其余状态组

<div class="demo">
  <div class="demo-label">state / 阅读、启用、是否、委托</div>
  <div class="demo-stage">
    <span class="state-tag state-teal">已读</span>
    <span class="state-tag state-sky">未读</span>
    <span class="state-tag state-red">禁用</span>
    <span class="state-tag state-blue">启用</span>
    <span class="state-tag state-red">是</span>
    <span class="state-tag state-gray">否</span>
    <span class="state-tag state-blue">委托中</span>
    <span class="state-tag state-gray">已失效</span>
  </div>
</div>

| 状态组 | 标签 | 色相 |
| --- | --- | --- |
| 流程状态 | 草稿 | 青绿 `#20BC98` |
| 流程状态 | 审批中 | 天蓝 `#2E9BF0` |
| 流程状态 | 已办结 | 橙 `#F67437` |
| 流程状态 | 已作废 | 灰 `#ABABAB` |
| 阅读状态 | 已读 / 未读 | 青绿 / 天蓝 |
| 禁用/启用 | 禁用 / 启用 | 红 `#E04303` / 蓝 `#3370FF` |
| 是否 | 是 / 否 | 红 / 灰 |
| 委托状态 | 委托中 / 已失效 | 蓝 / 灰 |

## 6.8.3 规则

<ul class="rules">
  <li class="must">同一状态在全站必须同色，禁止「审批中」在列表是蓝色、在详情页是橙色。</li>
  <li class="must">标签内必须有文字，不得只用颜色或图标表示状态。</li>
  <li class="must">不使用实心填充；背景取 8% 色相、边框取 20%、文字 100%。</li>
  <li class="recommend">高度统一 <code>20px</code>，左右内边距 <code>8px</code>，字号 <code>12px</code>，圆角 <code>--radius-md</code>。</li>
  <li class="recommend">一行内不同状态组的标签不要混排，按业务列分组展示。</li>
</ul>

## 6.8.4 代码

```css
.state-tag {
  display: inline-flex;
  align-items: center;
  height: 20px;
  padding: 0 8px;
  border-radius: var(--radius-md);
  border: 1px solid;
  font-size: 12px;
  line-height: 1;
  white-space: nowrap;
}

.state-teal   { color: #20bc98; background: #edfcf8; border-color: #d2f2e9; }
.state-sky    { color: #2e9bf0; background: #f6faff; border-color: #d8ecfd; }
.state-orange { color: #f67437; background: #fceee8; border-color: #f9dbcd; }
.state-blue   { color: #3370ff; background: #ebf1fe; border-color: #d5e2fd; }
.state-red    { color: #e04303; background: #fbece5; border-color: #f7d7c8; }
.state-gray   { color: #ababab; background: #f1f1f1; border-color: #e8e8e8; }
```
