---
title: 轻提示 Toast
---

# 轻提示 Toast

<span class="level level-must">🔴 第 6.9 节 · 强制</span>

操作结果的即时反馈，2 秒后自动关闭。只有成功与失败两种，不使用警告色提示条。

## 6.9.1 形态

<div class="demo">
  <div class="demo-label">toast / success</div>
  <div class="demo-stage block">
    <div class="toast toast-success">
      <span class="toast-icon">✓</span>
      <span>操作成功提示</span>
    </div>
  </div>
</div>

<div class="demo">
  <div class="demo-label">toast / error</div>
  <div class="demo-stage block">
    <div class="toast toast-error">
      <span class="toast-icon">✕</span>
      <span>操作失败提示</span>
    </div>
  </div>
</div>

## 6.9.2 规格

| 项目 | 成功 | 失败 |
| --- | --- | --- |
| 背景 | `#E6F9F4` | `#FFE7E3` |
| 图标底色 | `#1FD8AD` | `#FF3E1F` |
| 文字 | `#0FB98E` | `#FF3E1F` |
| 图标 | 实心圆 + 白色对勾 | 实心圆 + 白色叉号 |
| 圆角 | `--radius-lg` | `--radius-lg` |
| 高度 | `64px` | `64px` |
| 最大宽度 | `400px` | `400px` |
| 停留时长 | `2000ms` | `3000ms` |

<ul class="rules">
  <li class="must">提示条<b>上下左右居中</b>（水平居中 + 垂直居中），不贴顶、不贴底。</li>
  <li class="must">页面遮罩用透明黑 <code>rgba(0,0,0,0.4)</code>；纯反馈场景可不加遮罩，但需保证可读性。</li>
  <li class="must">图标必须是<b>实心圆底 + 白色图形</b>，不使用线框图标。</li>
  <li class="must">文案用「动词 + 结果」（保存成功、删除失败），禁止只写「成功」「错误」。</li>
  <li class="recommend">图标与文字间距 `8px`，水平居中排列；文字 14px、字重 500。</li>
  <li class="recommend">同一时刻只显示一条，新的提示替换旧的，不堆叠。</li>
</ul>

## 6.9.3 与弹窗的分工

| 场景 | 组件 |
| --- | --- |
| 操作已完成，无需用户决策 | Toast（自动消失） |
| 操作需要用户确认或输入 | 弹窗 Modal |
| 需要用户阅读并处理的信息 | 页面内的 Alert 区块 |

## 6.9.4 代码

```html
<div class="toast toast-success">
  <span class="toast-icon">✓</span>
  <span>保存成功</span>
</div>
```

```css
.toast {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 64px;
  max-width: 400px;
  border-radius: var(--radius-lg);
  font-size: var(--font-size-body);
  font-weight: 500;
}

.toast-success { background: #e6f9f4; color: #0fb98e; }
.toast-error   { background: #ffe7e3; color: #ff3e1f; }

.toast-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #1fd8ad;
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
}

.toast-error .toast-icon { background: #ff3e1f; }
```
