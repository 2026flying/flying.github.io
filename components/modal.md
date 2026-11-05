---
title: 弹窗 Modal
---

# 弹窗 Modal

<span class="level level-must">🔴 第 6.6 节 · 强制</span>

弹窗用于阻断式确认与短表单，承接不适合跳转页面的操作。遮罩与按钮顺序是硬性要求。

## 6.6.1 规范要点

<ul class="rules">
  <li class="must">遮罩颜色固定 <code>rgba(0,0,0,0.4)</code>，对应 Token <code>--modal-mask</code>。</li>
  <li class="must">按钮顺序：<b>取消在左，确认在右</b>，不得颠倒。</li>
  <li class="must">确认按钮使用主按钮，取消使用次按钮；破坏性操作的确认按钮用危险按钮。</li>
  <li class="must">弹窗层级使用 <code>--shadow-modal</code>，圆角 <code>--radius-lg</code>。</li>
  <li class="must">右上角有且只有一个 <code>×</code> 关闭图标（无边框无底色，× 在圆圈内垂直水平居中；悬停浮出一圈 <code>1px #D0D3D9</code> 线性圆圈），点击等效「取消」。</li>
  <li class="must">标题下方画一条 <code>1px</code> 分割线；<b>底部按钮区上方不得再画分割线</b>。</li>
  <li class="recommend">只承载一个决策，不要在一个弹窗里做多件事。</li>
  <li class="recommend">标题使用 16px / 600；正文使用 14px，颜色 <code>--color-text-secondary</code>。</li>
</ul>

## 6.6.2 标准弹窗

<div class="demo">
  <div class="demo-label">modal / default</div>
  <div class="modal-demo">
    <div class="modal-mask-preview"></div>
    <div class="modal-box">
      <button class="modal-close" aria-label="关闭" type="button">×</button>
      <div class="modal-head">新建客户</div>
      <div class="modal-body">保存后将同步至客户列表，可在列表中继续补充合同与联系人信息。</div>
      <div class="modal-foot">
        <button class="btn btn-default">取消</button>
        <button class="btn btn-primary">确认</button>
      </div>
    </div>
  </div>
</div>

## 6.6.3 危险操作弹窗

破坏性操作的确认按钮改为危险按钮，且文案必须说明后果。

<div class="demo">
  <div class="demo-label">modal / danger</div>
  <div class="modal-demo">
    <div class="modal-mask-preview"></div>
    <div class="modal-box">
      <button class="modal-close" aria-label="关闭" type="button">×</button>
      <div class="modal-head">删除客户</div>
      <div class="modal-body">删除后该客户的合同、联系人记录将一并移除，且无法恢复。</div>
      <div class="modal-foot">
        <button class="btn btn-default">取消</button>
        <button class="btn btn-danger">删除</button>
      </div>
    </div>
  </div>
</div>

## 6.6.4 尺寸与间距

| 项目 | 值 | 说明 |
| --- | --- | --- |
| 遮罩 | `rgba(0,0,0,0.4)` | 全屏覆盖，不叠加多层 |
| 圆角 | `--radius-lg`（8px） | 与卡片一致 |
| 阴影 | `--shadow-modal` | — |
| 宽度 | 常规 `400px` / 宽表单 `560px` | 不超过视口 90% |
| 关闭图标 | 右上角 `24 × 24px` 的 `×`，颜色 `--color-text-secondary` | × 在圆圈内**垂直水平居中**（用两笔伪元素画，不依赖字体基线）；悬停浮出一圈 `1px #D0D3D9` 淡色线性圆圈；点击等效「取消」 |
| 头部内边距 | `16px 20px 12px`（右侧留出关闭按钮） | 标题不贴边 |
| 头部分割线 | `1px #E4E4E4` | 只在标题下方；按钮区上方不画线 |
| 正文内边距 | `16px 20px 20px` | 与头部左对齐 |
| 底部内边距 | `12px 20px` | 不加分隔线 |
| 按钮间距 | `8px` | 取消与确认之间 |

## 6.6.5 代码

```html
<div class="modal-mask">
  <div class="modal-box" role="dialog" aria-modal="true">
    <button class="modal-close" aria-label="关闭" type="button">×</button>
    <div class="modal-head">新建客户</div>
    <div class="modal-body">保存后将同步至客户列表。</div>
    <div class="modal-foot">
      <button class="btn btn-default">取消</button>
      <button class="btn btn-primary">确认</button>
    </div>
  </div>
</div>
```

```css
.modal-mask {
  position: fixed;
  inset: 0;
  background: var(--modal-mask);   /* rgba(0, 0, 0, 0.4) */
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-box {
  position: relative;
  width: 400px;
  max-width: 90vw;
  background: var(--color-bg-container);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-modal);
  overflow: hidden;
}

.modal-head {
  padding: 16px 48px 12px 20px;    /* 右侧留出关闭按钮 */
  font-size: var(--font-size-module);
  font-weight: 600;
  border-bottom: 1px solid #e4e4e4; /* 标题下的分割线 */
}

/* 右上角关闭：一个 ×（两笔伪元素画，保证绝对居中）；悬停浮出一圈淡色线性圆圈 */
.modal-close {
  position: absolute;
  top: 16px;
  right: 15px;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 50%;
  background: transparent;
  color: transparent; /* × 由伪元素绘制，不依赖字体基线 */
  font-size: 0;
  line-height: 1;
  cursor: pointer;
}

.modal-close::before,
.modal-close::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 11px;
  height: 1.5px;
  border-radius: 1px;
  background: var(--color-text-secondary);
}

.modal-close::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.modal-close::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.modal-close:hover {
  border-color: #d0d3d9;
}

.modal-close:hover::before,
.modal-close:hover::after {
  background: var(--color-text-primary);
}

.modal-body {
  padding: 16px 20px 20px;
  font-size: var(--font-size-body);
  color: var(--color-text-secondary);
}

/* 取消在左，确认在右；按钮区上方不画分割线 */
.modal-foot {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 20px;
}
```

::: warning 走查易漏点
按钮顺序颠倒是最常见的违规；其次是遮罩用了 `0.5`、`0.6` 之类的自造值。两者都按缺陷处理。
:::
