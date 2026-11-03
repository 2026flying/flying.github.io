---
title: 规范总览
---

# 规范总览

<div class="spec-meta">
  <span>版本：<b>v0.1</b></span>
  <span>更新日期：<b>2026-11-02</b></span>
  <span>适用端：<b>Web 端（PC 浏览器）</b></span>
</div>

本文件是规范的**唯一源文件**。Trae 规则从[第 2–8 节](/resources/trae-rules)派生，前端 Token 与本文件同源，**不要单独维护两份数值**。

## 版本信息

| 项目 | 内容 |
| --- | --- |
| 当前版本 | v0.1 |
| 更新日期 | 2026-11-02 |
| 适用端 | Web 端（PC 浏览器） |
| 适用角色 | UI 设计师、前端开发、测试、产品经理 |
| 源文件 | `公司产品 UI 设计规范.md` |


## 强制等级图例

规范中每条规则都带强制等级，用于判断「违反是否算缺陷」。

| 标识 | 等级 | 含义 | 处理方式 |
| --- | --- | --- | --- |
| <span class="level level-must">🔴 强制</span> | Must | 违反即缺陷 | 代码评审与走查必须拦截，不允许偏离 |
| <span class="level level-recommend">🟡 推荐</span> | Should | 可偏离 | 偏离需在评审中说明理由 |
| <span class="level level-optional">⚪ 可选</span> | May | 由项目自定 | 无约束，同一项目内部保持一致即可 |

## 适用范围

**适用端**：Web 端（PC 浏览器）。以下内容不在本规范范围内：

- 移动端 / 小程序 / 原生客户端界面；
- 市场宣传物料、插画与动效设计；
- 具体业务的信息架构与文案规范。

**适用角色**与各自的使用方式：

| 角色 | 关注章节 | 用法 |
| --- | --- | --- |
| UI 设计师 | 2 / 3 / 4 / 5 / 6 | 出图时直接引用 Token 数值，不自定义色值 |
| 前端开发 | 2 / 4 / 5 / 6 / 7 | 将 Token 落到 CSS 变量，组件样式只引用变量 |
| 测试 | 6 / 7 / 8 | 按[走查清单](/guide/delivery)逐项验收 |
| 产品经理 | 1 / 6 | 验收时判断一致性、状态完整性 |

## 规范结构

规范共 9 节，本站在章节编号上与源文件保持一致，便于对照：

| 节 | 标题 | 本站页面 | 等级 |
| --- | --- | --- | --- |
| 0 | 适用范围 | 本节 | — |
| 1 | 设计原则 | [设计原则](/guide/principles) | <span class="level level-must">强制</span> |
| 2 | 色彩规范 | [色彩规范](/foundation/color)（含 2.4 动作语义色、2.5 状态标签色） | <span class="level level-must">强制</span> |
| 3 | 字体与排版 | [字体与排版](/foundation/typography) | <span class="level level-must">强制</span> |
| 4 | 间距与栅格 | [间距与栅格](/foundation/spacing) | <span class="level level-must">强制</span> |
| 5 | 圆角、阴影与层级 | [圆角与阴影](/foundation/radius-shadow) | <span class="level level-recommend">推荐</span> |
| 6 | 组件规范 | [按钮](/components/button) · [图标按钮](/components/icon-button) · [Chip](/components/chip) · [状态标签](/components/status-tag) · [表单](/components/form) · [表格](/components/table) · [弹窗](/components/modal) · [轻提示](/components/toast)<br>[进度条](/components/progress) · [空状态](/components/empty-state) · [异常页](/components/exception) | <span class="level level-must">强制</span> |
| 7 | 交互与可访问性 | [交互与可访问性](/guide/accessibility) | <span class="level level-recommend">推荐</span> |
| 8 | 交付与验收 | [交付与验收](/guide/delivery) | — |
| 9 | Trae 规则文件 | [Trae 规则文件](/resources/trae-rules)（派生） | — |

## 维护约定

<ul class="rules">
  <li class="must">修改任何数值（色值、字号、间距、圆角、阴影）只允许改源文件，本站与 Trae 规则同步更新，禁止只改其中一处。</li>
  <li class="must">新增 Token 必须同时给出：Token 名、用途、具体值三项，缺一不可。</li>
  <li class="recommend">新增规则需标注强制等级；未标注等级视作推荐级。</li>
  <li class="recommend">版本号按语义化递增：数值调整升次版本号，规则增删升主版本号。</li>
</ul>
