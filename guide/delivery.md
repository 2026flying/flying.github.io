---
title: 交付与验收
---

# 交付与验收

<span class="level level-optional">⚪ 第 8 节</span>

开发侧交付代码，测试侧按清单验收，两端都只以本规范的数值为准。

## 8.1 开发侧

<ul class="rules">
  <li class="must">所有样式引用 Token（CSS 变量），禁止硬编码颜色、字号、间距、圆角、阴影。</li>
  <li class="must">Token 只在全局定义一次，组件内不重新赋值覆盖语义色。</li>
  <li class="must">组件交付时包含全部状态样式（见<a href="/components/button">按钮</a>的状态表）。</li>
  <li class="recommend">Token 文件单独维护（如 <code>tokens.css</code>），按「色彩 / 字体 / 间距 / 圆角阴影」分组并加注释。</li>
  <li class="recommend">新增 Token 前先确认已有 Token 无法覆盖，避免同义 Token 膨胀。</li>
</ul>

### 自查命令

提交前用正则扫一遍硬编码，命中即需修正：

```bash
# 硬编码颜色
grep -rnE "#[0-9a-fA-F]{3,8}\b|rgba?\(" src --include="*.vue" --include="*.css" \
  | grep -v "tokens.css"

# 非法字号
grep -rnE "font-size:\s*(13|15|17|18)px" src

# 非法间距
grep -rnE "(margin|padding)[^:]*:\s*(5|6|7|9|10|11|13|14|15|18|25|30)px" src
```

## 8.2 测试侧走查清单

逐项打勾，任一 <span class="level level-must">强制</span> 项不通过，验收即为不通过。

### 色彩

<ul class="checklist">
  <li>页面中不存在规范外的色值（可用取色器抽查 5 个元素）</li>
  <li>主按钮、链接、选中态均为 <code>--color-primary</code> 系列</li>
  <li>错误、成功、警告三类提示分别使用对应语义色</li>
  <li>禁用态文字为 <code>--color-text-disabled</code>，且可辨识为「不可用」</li>
</ul>

### 排版

<ul class="checklist">
  <li>页面内字号只出现 20 / 16 / 14 / 12 四档</li>
  <li>字重只出现 400 与 600</li>
  <li>多行文本行高一致，无挤压或过疏</li>
</ul>

### 间距与布局

<ul class="checklist">
  <li>所有间距为 4 的倍数，且落在允许值内</li>
  <li>左侧菜单 200px（折叠 64px）、顶部导航 90px</li>
  <li>内容区左右留白 24px，各页面一致</li>
  <li>同一容器上下内边距相等</li>
</ul>

### 圆角与阴影

<ul class="checklist">
  <li>圆角只有 2 / 4 / 8px 三档</li>
  <li>阴影只用于浮层，平面内容无阴影</li>
  <li>弹窗用 <code>--shadow-modal</code>，卡片用 <code>--shadow-card</code></li>
</ul>

### 动作色与标签

<ul class="checklist">
  <li>12 个动作按钮的颜色与 6.2 色板一致（查询蓝、重置橙、暂存琥珀、自定义青、撤回绿、删除红、取消灰）</li>
  <li>工具条按钮顺序：查询 → 重置 → 自定义 在最左，关闭 / 删除 在最后</li>
  <li>同类动作在不同页面同色，未自造新色</li>
  <li>表格操作项 ≥3 个时使用 Chip，未使用实心色块</li>
  <li>同一状态标签在全站同色，且带文字</li>
  <li>状态标签为浅底 + 描边，无实心填充</li>
</ul>

### 组件状态

<ul class="checklist">
  <li>按钮 5 个状态全部实现（default / hover / active / disabled / loading）</li>
  <li>同一区域只有一个主按钮</li>
  <li>表单标签顶部对齐，必填星号在 Label 前</li>
  <li>错误提示在输入框下方且为红色</li>
  <li>表格操作列为右侧文字按钮</li>
  <li>空数据有完整空状态：插画 + 结论 + 可执行动作</li>
  <li>表头字号（14px/600）不小于表体，表头底色为 <code>--color-bg-page</code></li>
  <li>弹窗按钮「取消在左、确认在右」</li>
  <li>弹窗遮罩为 <code>rgba(0,0,0,0.4)</code></li>
  <li>提示条上下左右居中，成功绿底、失败红底，图标为实心圆 + 白色图形</li>
  <li>图标按钮 32×32，有 <code>title</code> 或 <code>aria-label</code>，展开/收起成对出现</li>
  <li>进度条为胶囊轨道，百分比在右侧且等宽；填充始终保持品牌蓝，不变色</li>
  <li>404 / 403 / 500 使用统一异常版式，并提供返回出口</li>
</ul>

### 交互与可访问性

<ul class="checklist">
  <li>可点击区域不小于 32px</li>
  <li>正文对比度 ≥ 4.5:1，大字号 / 图标 ≥ 3:1</li>
  <li>动效时长 200ms，无布局属性过渡</li>
  <li>键盘可完成全部操作，焦点可见</li>
  <li>状态不单靠颜色传达</li>
</ul>

## 8.3 常见缺陷对照

| 缺陷 | 违反条款 | 修正方式 |
| --- | --- | --- |
| 按钮只做 hover，无 active | 6.1 状态 | 补 `--color-primary-active` |
| loading 期间仍可点击 | 6.1 状态 | 加 `disabled` 并拦截提交 |
| 表单标签左对齐 | 6.2 表单 | 改为顶部对齐，间距 8px |
| 必填星号在 Label 之后 | 6.2 表单 | 移到 Label 前 |
| 表格操作用彩色图标按钮 | 6.3 表格 | 改为文字按钮或 Chip |
| 重置按钮用了灰色 | 6.5 动作色板 | 改 `--color-action-warning` |
| 暂存与提交同为蓝色 | 6.5 动作色板 | 暂存改 `--color-action-hold` |
| 同一状态两种颜色 | 6.6 状态标签 | 按色板表统一 |
| 提示条贴在页面顶部 | 6.7 轻提示 | 改为上下左右居中 |
| 提示图标是线框图标 | 6.7 轻提示 | 改为实心圆 + 白色图形 |
| 查询无结果时留白 | 6.10 空状态 | 补空状态三件套 |
| 表头 12px 或与表体同号同重 | 6.3 表格 | 表头改 14px / 600 + 灰底 |
| 进度条直角、百分比写在条内或完成时变绿 | 6.9 进度条 | 改全圆角，百分比移到右侧，填充保持品牌蓝 |
| 404 只显示一行英文 | 6.11 异常页 | 换统一插画 + 人话 + 返回按钮 |
| 弹窗确认在左、取消在右 | 6.4 弹窗 | 调换顺序 |
| 背景色写 `#f5f5f5` | 2 色彩 | 改用 `--color-bg-page` |
| 间距 10px / 15px | 4 间距 | 就近取允许值 |
| 弹窗遮罩 `rgba(0,0,0,0.6)` | 6.4 弹窗 | 统一 `0.4` |

## 8.4 版本与变更

| 场景 | 处理 |
| --- | --- |
| 修改数值 | 同步更新源文件、本站、Trae 规则三处，升次版本号 |
| 新增规则或 Token | 标注强制等级与用途，升主版本号 |
| 废弃规则 | 保留条目并标注「已废弃 · 替代项」，不直接删除 |
