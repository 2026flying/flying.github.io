---
title: 全局组件
aside: false
---

# 全局组件

<span class="level level-recommend">🟡 第 6.1 节 · 推荐</span>

全局组件负责「把页面装进系统」：一层是**骨架**（顶栏 → 一级导航 → 侧边二级 → 页签），一层是**页面模板**（表格页 / 一般列表 / 卡片列表）。业务页面只写内容区，不得自己再画一套头部与侧边——否则同一个系统里会出现两种页边距、两种标题位置。

- **顶栏**：品牌标识、全局工具（搜索 / 消息 / 通知 / 帮助 / 账号），高度固定 `56px`，所有形态都有。
- **一级导航**：`侧边` 形态下与二级合并；`顶部` / `混合` 形态下是一条 44px 的蓝色横向菜单条。
- **侧边导航**：承载二级与三级入口，可收起为 64px 图标轨道。
- **页签**：多页并行工作的系统才需要；顶部导航与混合导航都可以叠加。
- **页面模板**：骨架 + 内容区内容，共三种列表形态，直接套用不改骨架。模板演示与规格见[列表页](/components/list-page)。

| 组件 | 用途 | 章节 |
| --- | --- | --- |
| `AppShell` 骨架 | 四种形态 + 可选页签，承载所有页面 | 6.1.1 – 6.1.6 |
| [表格页](/components/list-page) | 筛选 + 表格 + 分页，管理类列表主力 | 6.2.1 |
| [一般列表](/components/list-page) | 标题 + 状态 + 时间的轻量列表，公告、消息、待阅 | 6.2.2 |
| [卡片列表](/components/list-page) | 数据卡 + 计数行，工作台、待办总览 | 6.2.3 |

## 6.1.1 形态选择

| 形态 | 结构 | 适用 | 一级菜单数 | 章节 |
| --- | --- | --- | --- | --- |
| 侧边导航 | 顶栏 + 侧边（一级 + 二级） | 后台管理、配置中心，层级深、菜单多 | ≤ 12 | 6.1.2 |
| 顶部导航 | 顶栏 + 一级横条 | 门户、工作台，功能扁平、页面少 | ≤ 8 | 6.1.3 |
| 混合导航 | 顶栏 + 一级横条 + 侧边二级 | 业务中台、OA 主系统，模块多且每模块下有子功能 | 一级 ≤ 8，二级 ≤ 12 | 6.1.4 |
| 顶部 + 页签 | 顶部导航 + 页签栏 | 需要同时开着多个单据 / 列表来回切换 | 同顶部导航 | 6.1.5 |
| 混合 + 页签 | 混合导航 + 页签栏 | OA、审批、工单类主力系统（推荐默认） | 同混合导航 | 6.1.5 |

<ul class="rules">
  <li class="must">骨架形态在项目启动时确定，全站统一；不得 A 模块侧边、B 模块顶部。</li>
  <li class="must">一级导航条目 ≤ 8 个，超出的收进条尾的「更多」箭头，不做换行、不做二级下拉混排。</li>
  <li class="recommend">菜单层级最多三级（一级 → 二级 → 页签 / 面包屑），第四级改用页内 tab 或分段控件。</li>
  <li class="recommend">需要并行处理多张单据（审批、工单、编辑页）时必须提供页签，否则用户返回列表会丢失上下文。</li>
</ul>

## 6.1.2 侧边导航（展开 / 收起）

<div class="demo is-bleed">
  <div class="demo-label">layout / side nav · 点击左下「收起侧栏」切换 232px ↔ 64px</div>
  <div class="nav-demo-scroll">
    <AppShell variant="side" :height="480" />
  </div>
  <div class="demo-note">展开 `232px`，收起 `64px`。收起后只保留图标轨道，图标悬停显示名称（`title`）；分组标题隐藏，叶子项平铺。</div>
</div>

| 项目 | 展开 | 收起 |
| --- | --- | --- |
| 宽度 | `232px` | `64px` |
| 分组标题 | `36px` 高，`13px` / `500`，右侧折角箭头 | 隐藏 |
| 菜单项 | `38px` 高，图标 `16px` + 文字 `14px`，圆角 `6px` | 图标居中，圆角 `6px` |
| 悬停态 | 底色 `--color-bg-hover-blue`（`#E6F3FE`），文字转主色 | 同左，图标块铺浅蓝 |
| 选中态 | 整行 `--color-primary` 铺底，白字，通栏到两侧 | 图标块 `--color-primary` 铺底 |
| 收起按钮 | 固定在侧栏底部，`1px` 上分割线 | 只留按钮图标，居中 |

<ul class="rules">
  <li class="must">收起状态必须持久化（`localStorage`），刷新后保持用户上次的选择。</li>
  <li class="must">收起后不得只剩空白或半个文字，必须保留图标 + `title` 提示；不可用的图标同样要有名称。</li>
  <li class="must">选中项整行高亮，不做左侧竖条 + 浅底的组合（两种选中语言不要混用）。</li>
  <li class="recommend">侧栏宽度过渡 `200ms ease`，与内容区同时收放，避免内容先跳一下再变宽。</li>
  <li class="recommend">分组支持折叠，但当前选中项所在分组必须默认展开。</li>
</ul>

## 6.1.3 顶部导航

<div class="demo is-bleed">
  <div class="demo-label">layout / top nav</div>
  <div class="nav-demo-scroll">
    <AppShell variant="top" :height="470" />
  </div>
  <div class="demo-note">一级菜单直接铺在顶栏下方的蓝色横条上，无侧边栏，内容区占满宽度。</div>
</div>

| 项目 | 值 |
| --- | --- |
| 条高 | `44px`，背景 `--color-primary` |
| 菜单项 | 高 `32px`，内边距 `0 12px`，图标 `16px` + 文字 `14px`，圆角 `4px` |
| 常态 | 文字 `rgba(255,255,255,.88)`，无底色 |
| 悬停 | 底色 `rgba(255,255,255,.14)`，文字纯白（蓝底上只用半透明白，不用浅蓝） |
| 选中 | 底色 `rgba(255,255,255,.2)`，文字纯白，字重 `500` |
| 溢出 | 条尾固定 `›` 箭头打开更多菜单 |

<ul class="rules">
  <li class="must">一级菜单选中态只用「半透明白底 + 白字」，不得改用深蓝或黄色强调色。</li>
  <li class="must">横条内不放业务按钮、不放数据统计，只放一级导航与「更多」。</li>
  <li class="recommend">菜单文字 ≤ 6 字，超长省略为「…」并在 `title` 中给全称。</li>
</ul>

## 6.1.4 混合导航

<div class="demo is-bleed">
  <div class="demo-label">layout / mixed · 顶部一级 + 侧边二级</div>
  <div class="nav-demo-scroll">
    <AppShell variant="mixed" :height="500" />
  </div>
  <div class="demo-note">顶部条切换大模块，侧边栏展示当前模块的子功能；切换一级菜单时侧边栏内容整组替换，选中项回到该模块首页。</div>
</div>

<ul class="rules">
  <li class="must">切一级菜单必须同步换掉侧边二级，不得保留上一个模块的菜单项。</li>
  <li class="must">侧边栏顶部显示当前一级模块名，让用户知道自己在哪一层。</li>
  <li class="recommend">一级模块之间不共享页签；切换模块时页签区保留，但当前页签切到目标模块的首页。</li>
</ul>

## 6.1.5 页签

<div class="demo is-bleed">
  <div class="demo-label">layout / top nav + tabs</div>
  <div class="nav-demo-scroll">
    <AppShell variant="top" :tabs="true" :height="510" />
  </div>
  <div class="demo-note">顶部导航 + 页签：页签栏紧贴在一级导航条下方，与内容区同宽。</div>
</div>

<div class="demo is-bleed">
  <div class="demo-label">layout / mixed + tabs · 点击 × 关闭页签</div>
  <div class="nav-demo-scroll">
    <AppShell variant="mixed" :tabs="true" :height="540" />
  </div>
  <div class="demo-note">混合导航 + 页签：页签栏只在内容区上方，不覆盖侧边栏；首页按钮固定在页签最左侧。</div>
</div>

| 项目 | 值 |
| --- | --- |
| 栏高 | `40px`，背景 `--color-bg-container`，下边框 `1px --color-border` |
| 首页按钮 | `28 × 28px`，底色 `--color-bg-page`，圆角 `6px`，固定最左、不可关闭 |
| 页签 | 高 `29px`，内边距 `0 7px 0 10px`，图标 `14px` + 文字 `13px` + 关闭 `11px`，间距 `6px` |
| 常态 | 透明底，文字 `--color-text-secondary`，关闭按钮 `--color-text-disabled` |
| 悬停 | 底色 `--color-bg-hover-blue`（`#E6F3FE`），文字转 `--color-text-primary` |
| 选中 | 底色 `--color-bg-page`，文字 `--color-text-primary`，字重 `500` |
| 上限 | 同时最多 8 个，超出横向滚动，不做换行、不做折叠 |

<ul class="rules">
  <li class="must">首页按钮固定在最左且不可关闭；用户永远有一条回到起点的路。</li>
  <li class="must">关闭当前页签后，激活**右侧**相邻页签；右侧没有则激活左侧；全部关完回到首页。</li>
  <li class="must">页签标题与页面标题一致，不得一个叫「功能表单」一个叫「表单管理」。</li>
  <li class="must">有未保存修改的页签，关闭前必须二次确认；不得静默丢弃。</li>
  <li class="recommend">页签栏横向滚动时隐藏滚动条，用边缘渐隐提示还有更多。</li>
  <li class="recommend">页签 ≤ 8 个、单条文字 ≤ 8 字；超出用「…」截断并在 `title` 中给全称。</li>
</ul>

## 6.1.6 尺寸汇总

| 层 | 高度 / 宽度 | 底色 |
| --- | --- | --- |
| 顶栏 | `56px` | `--color-bg-container`，下边框 `1px --color-border` |
| 顶部一级导航 | `44px` | `--color-primary` |
| 页签栏 | `40px` | `--color-bg-container`，下边框 `1px --color-border` |
| 侧边导航 | 展开 `232px` / 收起 `64px` | `--color-bg-container`，右边框 `1px --color-border` |
| 内容区 | 自适应，内边距 `14px 16px` | `--color-bg-page` |
| 内容卡片 | 自适应 | `--color-bg-container`，圆角 `8px`，`--shadow-card` |

## 6.1.7 参数与代码

```vue
<!-- 骨架：已全局注册，md / 页面里直接写标签即可 -->
<AppShell variant="mixed" :tabs="true" :height="540" />

<!-- 侧边导航，初始即收起 -->
<AppShell variant="side" :collapsed="true" />

<!-- 页面模板：内容写进默认插槽，骨架与页签保持不变 -->
<AppShell variant="side" :tabs="true" height="auto" title="通知公告">
  <PageTableDemo />
</AppShell>
```

| 参数 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| `variant` | `'side' \| 'top' \| 'mixed'` | `'mixed'` | 骨架形态 |
| `tabs` | `Boolean` | `false` | 是否渲染页签栏 |
| `collapsed` | `Boolean` | `false` | 侧边导航初始是否收起 |
| `height` | `Number \| String` | `460` | 演示容器高度；页面模板传 `auto`，由内容撑开、不出现内滚 |
| `title` | `String` | `''` | 覆盖面包屑末级与内容区标题 |
| 默认插槽 | — | 骨架占位 | 传入内容后替换演示骨架，页面模板写在这里 |

```css
:root {
  --as-header-h: 56px;
  --as-top-h: 44px;
  --as-tabs-h: 40px;
  --as-side-w: 232px;
  --as-side-w-min: 64px;
}

/* 侧栏收放 */
.as-side {
  flex: 0 0 var(--as-side-w);
  transition:
    width 200ms ease,
    flex-basis 200ms ease;
}

.app-shell.is-collapsed .as-side {
  flex-basis: var(--as-side-w-min);
  width: var(--as-side-w-min);
}

/* 选中项整行高亮 */
.as-item.is-active {
  background: var(--color-primary);
  color: #fff;
  font-weight: 500;
}

/* 顶部一级导航选中 */
.as-menu.is-active {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

/* 页签选中 */
.as-tab.is-active {
  background: var(--color-bg-page);
  color: var(--color-text-primary);
  font-weight: 500;
}
```

收起状态记得落盘：

```js
watchEffect(() => {
  localStorage.setItem('app-shell:collapsed', String(isCollapsed.value))
})
```
