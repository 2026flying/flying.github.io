---
title: 按钮 Button
---

# 按钮 Button

<span class="level level-must">🔴 第 6.1 节 · 强制</span>

按钮用于触发即时操作。类型只有 3 种，状态必须 5 个全覆盖。

## 6.1.1 类型

<div class="demo">
  <div class="demo-label">button / type</div>
  <div class="demo-stage">
    <button class="btn btn-primary">主按钮</button>
    <button class="btn btn-default">次按钮</button>
    <button class="btn btn-danger">危险按钮</button>
    <button class="btn btn-text">文字按钮</button>
  </div>
  <div class="demo-note">文字按钮用于表格操作列与低权重操作。</div>
</div>

| 类型 | 外观 | 使用场景 |
| --- | --- | --- |
| 主按钮 | 蓝底白字 | 页面或弹窗的唯一主动作：保存、提交、确认 |
| 次按钮 | 白底灰边 | 取消、关闭、次要操作 |
| 危险按钮 | 红底白字 | 删除、批量移除等不可逆操作 |

## 6.1.2 动作色板

业务工具条的按钮**文案与颜色都是固定的**，同类动作跨页面必须同色。

<div class="demo">
  <div class="demo-label">toolbar / action-palette</div>
  <div class="demo-stage">
    <div class="toolbar">
      <button class="btn btn-primary">查询</button>
      <button class="btn btn-warning">重置</button>
      <button class="btn btn-custom">自定义按钮</button>
      <button class="btn btn-neutral">取消</button>
      <button class="btn btn-hold">暂存</button>
      <button class="btn btn-warning">退回</button>
      <button class="btn btn-primary">通过</button>
      <button class="btn btn-success">撤回</button>
      <button class="btn btn-primary">催办</button>
      <button class="btn btn-primary">打印</button>
      <button class="btn btn-danger">关闭</button>
      <button class="btn btn-danger">删除</button>
    </div>
  </div>
  <div class="demo-note">排列顺序：查询 → 重置 → 自定义 在最左，关闭 / 删除 在最后。</div>
</div>

| 按钮 | 语义 | Token | 形态 |
| --- | --- | --- | --- |
| 查询 | 检索 | `--color-primary` | 实心 |
| 重置 | 清空条件 | `--color-action-warning` | 实心 |
| 自定义按钮 | 扩展入口 | `--color-action-custom` | 实心 |
| 取消 | 放弃编辑 | `--color-action-neutral` | 实心 |
| 暂存 | 保存未提交 | `--color-action-hold` | 实心 |
| 退回 | 退回上一节点 | `--color-action-warning` | 实心 |
| 通过 | 审批通过 | `--color-primary` | 实心 |
| 撤回 | 撤回已发流程 | `--color-success` | 实心 |
| 催办 | 催办 | `--color-primary` | 实心 |
| 打印 | 打印 | `--color-primary` | 实心 |
| 关闭 | 关闭流程 | `--color-danger` | 实心 |
| 删除 | 删除 | `--color-danger` | 实心 |

<ul class="rules">
  <li class="must">动作色只允许上表 7 种，禁止为新按钮新造颜色。</li>
  <li class="must">排列顺序固定：<code>查询 → 重置 → 自定义</code> 在最左，<code>关闭 / 删除</code> 在最后。</li>
  <li class="must">红色破坏性按钮在同一工具条内不超过 2 个。</li>
  <li class="recommend">实心按钮只出现在页面工具条与弹窗底部，不得进入表格单元格。</li>
</ul>

::: warning 与「最多一个主按钮」的冲突
上文约束「同一区域最多一个主按钮」针对的是**内容区**（弹窗底部、卡片、表单）。工具条属于检索与流程操作区，允许「查询 + 1 个主动作」同为蓝色；其余动作需降级为白底灰边的次按钮或改用 [Chip](/components/chip) 形态。
:::

## 6.1.3 状态

状态必须全覆盖 `default`、`hover`、`active`、`disabled`、`loading`。下表为强制要求，缺任意一项即为缺陷。

<div class="demo">
  <div class="demo-label">button / state</div>
  <div class="demo-stage">
    <button class="btn btn-primary">默认</button>
    <button class="btn btn-primary" style="background:var(--color-primary-hover);">悬停</button>
    <button class="btn btn-primary" style="background:var(--color-primary-active);">按下</button>
    <button class="btn btn-primary is-disabled" disabled>禁用</button>
    <button class="btn is-loading" disabled><span class="spinner"></span>加载中</button>
  </div>
  <div class="demo-note">实际悬停与按下效果可直接将鼠标移到左侧按钮上查看。</div>
</div>

| 状态 | 视觉变化 | 技术要点 |
| --- | --- | --- |
| default | 基准样式 | — |
| hover | 背景变亮一档（`--color-primary-hover`） | 只改颜色，不改尺寸 |
| active | 背景变暗一档（`--color-primary-active`） | 不加缩放动画，避免布局抖动 |
| disabled | 背景 `--color-bg-hover`，文字 `--color-text-disabled` | 同时设置 `cursor: not-allowed` 与 `disabled` |
| loading | 主色背景 + 半透明 + 旋转指示 | 期间禁用点击，防止重复提交 |

<ul class="rules">
  <li class="must">5 个状态必须全部实现，且 hover / active 的色值必须来自 Token 的 <code>-hover</code> / <code>-active</code>。</li>
  <li class="must">loading 状态必须阻止二次点击，不能只换成转圈图标。</li>
  <li class="must">禁用态不能只降低透明度，需同时改背景与文字色，保证可读。</li>
</ul>

## 6.1.4 使用约束

<ul class="rules">
  <li class="must">同一区域最多只能有一个主按钮。</li>
  <li class="must">禁止满屏彩色：一屏之内主色按钮不超过 1 个，危险按钮仅在真实破坏性操作出现。</li>
  <li class="must">按钮文字用动词或动宾短语（保存、新建客户、导出数据），不要用「确定」以外的模糊词。</li>
  <li class="recommend">按钮高度与输入框对齐，常规 <code>32px</code>、宽松场景 <code>36px</code>。</li>
  <li class="recommend">同一行的按钮高度必须一致，主次按钮不要出现高低差。</li>
</ul>

<div class="demo">
  <div class="demo-label">按钮组 · 取消在左，确认在右</div>
  <div class="demo-stage" style="justify-content:flex-end;">
    <button class="btn btn-default">取消</button>
    <button class="btn btn-primary">保存</button>
  </div>
</div>

## 6.1.5 代码

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 0 16px;
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  font-family: var(--font-family);
  font-size: var(--font-size-body);
  line-height: 1;
  cursor: pointer;
  transition: background-color 200ms, border-color 200ms, color 200ms;
}

/* 主按钮 */
.btn-primary {
  background: var(--color-primary);
  color: #fff;
}
.btn-primary:hover  { background: var(--color-primary-hover); }
.btn-primary:active { background: var(--color-primary-active); }

/* 次按钮 */
.btn-default {
  background: var(--color-bg-container);
  color: var(--color-text-primary);
  border-color: var(--color-border);
}
.btn-default:hover { background: var(--color-bg-hover); border-color: var(--color-text-disabled); }

/* 危险按钮 */
.btn-danger {
  background: var(--color-danger);
  color: #fff;
}

/* 禁用 */
.btn:disabled {
  background: var(--color-bg-hover);
  border-color: var(--color-border);
  color: var(--color-text-disabled);
  cursor: not-allowed;
}
```

::: warning 走查易漏点
常见缺陷：只做了 hover，没做 active；loading 期间仍可点击；禁用态用了 `opacity: 0.5` 导致文字对比度低于 AA。逐项对照 6.1.2 的状态表验收。
:::
