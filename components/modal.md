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
  <li class="recommend">只承载一个决策，不要在一个弹窗里做多件事。</li>
  <li class="recommend">标题使用 16px / 600；正文使用 14px，颜色 <code>--color-text-secondary</code>。</li>
</ul>

## 6.6.2 标准弹窗

<div class="demo">
  <div class="demo-label">modal / default</div>
  <div class="modal-demo">
    <div class="modal-mask-preview"></div>
    <div class="modal-box">
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
| 头部内边距 | `16px 20px 8px` | 标题不贴边 |
| 正文内边距 | `0 20px 20px` | 与头部左对齐 |
| 底部内边距 | `12px 20px` | 与正文之间 `1px` 分割线 |
| 按钮间距 | `8px` | 取消与确认之间 |

## 6.6.5 代码

```html
<div class="modal-mask">
  <div class="modal-box" role="dialog" aria-modal="true">
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
  width: 400px;
  max-width: 90vw;
  background: var(--color-bg-container);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-modal);
  overflow: hidden;
}

.modal-head {
  padding: 16px 20px 8px;
  font-size: var(--font-size-module);
  font-weight: 600;
}

.modal-body {
  padding: 0 20px 20px;
  font-size: var(--font-size-body);
  color: var(--color-text-secondary);
}

/* 取消在左，确认在右 */
.modal-foot {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 20px;
  border-top: 1px solid var(--color-border);
}
```

::: warning 走查易漏点
按钮顺序颠倒是最常见的违规；其次是遮罩用了 `0.5`、`0.6` 之类的自造值。两者都按缺陷处理。
:::
