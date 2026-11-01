---
title: Trae 规则文件
---

# Trae 规则文件

<span class="level level-optional">⚪ 第 9 节 · 派生</span>

本节内容由第 2–8 节派生，供 AI 编码工具（Trae Rule）使用。**不要在此单独维护数值**——数值变更时先改源文件，再同步本节。

## 9.1 使用方法

1. 新建项目内文件 `.trae/rules/ui-spec.md`；
2. 将下方代码块内容整体粘贴进去；
3. 规则生效后，AI 生成的代码样式应只引用 Token。

## 9.2 规则内容

```markdown
# UI 设计规范规则（派生自《公司产品 UI 设计规范 v0.1》）

## 适用范围
Web 端（PC 浏览器）产品界面。仅约束前端样式与交互，不涉及业务逻辑。

## 色彩
- 禁止硬编码颜色。所有颜色必须引用 CSS 变量，如 var(--color-primary)。
- 品牌色：--color-primary #3370FF、--color-primary-hover #4E83FD、
  --color-primary-active #245BDB、--color-primary-light #E1EAFF。
- 语义色：--color-success #00B42A、--color-warning #FF7D00、
  --color-danger #F53F3F、--color-info #86909C。
- 中性色：--color-text-primary #1D2129、--color-text-secondary #4E5969、
  --color-text-disabled #C9CDD4、--color-border #E5E6EB、
  --color-bg-page #F2F3F5、--color-bg-container #FFFFFF、--color-bg-hover #F7F8FA。
- 语义色只表达状态，不用于强调；强调用主色。

## 字体
- 字体族固定："PingFang SC", "Microsoft YaHei", Arial, sans-serif。
- 字号只允许 4 档：20px（页面标题）、16px（模块标题）、14px（正文/表格/按钮）、12px（辅助说明）。
- 字重只用 400 与 600；行高统一 1.5。

## 间距
- 基础单位 4px；只允许 4/8/12/16/20/24/32/40/48px。
- 左侧菜单 200px（折叠 64px），顶部导航 90px，内容区左右各 24px。
- 同一容器上下内边距必须相等。

## 圆角与阴影
- 圆角：--radius-sm 2px（标签/复选框）、--radius-md 4px（按钮/输入框）、
  --radius-lg 8px（卡片/弹窗）。
- 阴影：--shadow-card 0 1px 4px rgba(0,0,0,0.05)、
  --shadow-modal 0 8px 24px rgba(0,0,0,0.15)。
- 平面内容不加阴影；禁止自造阴影值。

## 组件
### 按钮
- 类型：主按钮（蓝底）、次按钮（白底灰边）、危险按钮（红底）。
- 状态必须全覆盖：default / hover / active / disabled / loading。
- 同一区域最多一个主按钮；禁止满屏彩色。
- loading 期间必须 disabled，禁止重复提交。

### 表单
- 标签顶部对齐。
- 必填星号 * 放在 Label 前面，颜色 var(--color-danger)。
- 校验错误提示在输入框下方，颜色 var(--color-danger)。
- 输入框高度 32px 或 36px，同表单内统一。

### 表格
- 表头背景 var(--color-bg-hover)。
- 操作列固定右侧，只使用文字按钮。
- 无数据时必须渲染空状态（图标 + 结论 + 可执行动作）。

### 弹窗
- 遮罩 rgba(0,0,0,0.4)。
- 按钮顺序：取消在左，确认在右。
- 使用 --shadow-modal 与 --radius-lg。

## 交互与可访问性
- 可点击区域不小于 32px。
- 文字对比度满足 WCAG AA。
- 动效时长 200ms，只过渡颜色/透明度/阴影/位移。
- 禁止用 outline: none 抹掉焦点样式。

## 实现要求
- 先输出 tokens.css（含全部 CSS 变量），组件样式只引用变量。
- 每个交互组件同时给出 5 个状态的样式。
- 不使用规范外的字号、间距、色值；需要新值时先说明理由。
```

## 9.3 维护说明

| 变更类型 | 需要同步的位置 |
| --- | --- |
| 修改色值 / 字号 / 间距 | 源文件 → 本站对应页面 → 本节规则内容 |
| 新增组件规则 | 源文件第 6 节 → 本站组件页 → 本节规则内容 |
| 调整强制等级 | 源文件 → 本站页面徽标 → 本节规则措辞 |

::: tip 为什么规则要派生而不是独立维护
两份独立维护的数值必然发散。规则文件只保留「结论」，数值一律回源，可以避免 AI 按旧值生成代码。
:::
