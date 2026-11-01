---
title: 表单 Form
---

# 表单 Form

<span class="level level-must">🔴 第 6.2 节 · 强制</span>

表单规范只有 4 条硬性要求，但每一条都直接决定可用性。

## 6.2.1 核心约束

<ul class="rules">
  <li class="must">标签位置：<b>顶部对齐</b>，不允许左对齐或右侧悬浮标签。</li>
  <li class="must">必填标识：红色星号 <code>*</code> 放在 Label <b>前面</b>（如 <code>* 客户名称</code>），不放标签后面。</li>
  <li class="must">校验提示：错误提示在输入框<b>下方</b>，颜色用 <code>--color-danger</code>。</li>
  <li class="must">输入框高度：<code>32px</code> 或 <code>36px</code>，同一表单内必须统一。</li>
</ul>

## 6.2.2 基础表单

<div class="demo">
  <div class="demo-label">form / default</div>
  <div class="demo-stage block">
    <div class="form-demo">
      <div class="field">
        <label class="field-label"><span class="req">*</span>客户名称</label>
        <input class="input" placeholder="请输入客户名称" value="示例科技有限公司" />
      </div>
      <div class="field">
        <label class="field-label"><span class="req">*</span>联系人手机号</label>
        <input class="input" placeholder="请输入手机号" value="138" />
        <span class="field-error">请输入 11 位有效手机号</span>
      </div>
      <div class="field">
        <label class="field-label">备注</label>
        <input class="input" placeholder="选填" />
        <span class="field-help">不超过 200 字</span>
      </div>
      <div class="field">
        <label class="field-label">所属行业</label>
        <input class="input is-disabled" placeholder="暂不可编辑" disabled />
      </div>
    </div>
  </div>
  <div class="demo-note">错误提示与辅助说明均位于输入框下方；错误态边框同时变红。</div>
</div>

## 6.2.3 状态

| 状态 | 边框 | 说明 |
| --- | --- | --- |
| default | `--color-border` | 基准 |
| hover | `--color-text-disabled` | 提示可交互 |
| focus | `--color-primary` | 必须明显区别于 hover |
| error | `--color-danger` | 下方同步显示错误文案 |
| disabled | `--color-border`，背景 `--color-bg-hover` | 文字 `--color-text-disabled` |

## 6.2.4 布局与间距

| 项目 | 值 | 说明 |
| --- | --- | --- |
| 标签与输入框间距 | `8px` | 顶部对齐后紧贴，不再留大段空白 |
| 表单项之间垂直间距 | `16px` | 同区块内一致 |
| 表单区块之间 | `24px` | 分组标题下的间隔 |
| 输入框内边距 | 左右 `10px` | 文字不贴边 |
| 报错文案与输入框 | `6px` | 紧邻，避免误判归属 |

<ul class="rules">
  <li class="must">错误文案必须说明「哪里错了」和「怎么改」，禁止只写「输入有误」。</li>
  <li class="recommend">辅助说明（帮助文案）与错误文案位置相同，两者不要同时出现——报错时用错误文案替换帮助文案。</li>
  <li class="recommend">必填项不超过总项数一半；超过时考虑改为分步表单。</li>
  <li class="optional">多列表单在 1280px 以上可用两列布局，列间距 <code>24px</code>。</li>
</ul>

## 6.2.5 代码

```html
<div class="field">
  <label class="field-label">
    <span class="req">*</span>客户名称
  </label>
  <input class="input" placeholder="请输入客户名称" />
  <span class="field-error">请输入客户名称</span>
</div>
```

```css
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field-label {
  font-size: var(--font-size-body);
  color: var(--color-text-primary);
}

/* 必填星号在 Label 之前 */
.field-label .req {
  color: var(--color-danger);
  margin-right: 4px;
}

.input {
  height: 32px;              /* 或 36px，表单内统一 */
  padding: 0 10px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-family: var(--font-family);
  font-size: var(--font-size-body);
  color: var(--color-text-primary);
  transition: border-color 200ms;
}

.input:hover  { border-color: var(--color-text-disabled); }
.input:focus  { border-color: var(--color-primary); outline: none; }
.input.is-error { border-color: var(--color-danger); }

.input:disabled {
  background: var(--color-bg-hover);
  color: var(--color-text-disabled);
  cursor: not-allowed;
}

/* 错误提示在输入框下方 */
.field-error {
  font-size: var(--font-size-aux);
  color: var(--color-danger);
}
```
