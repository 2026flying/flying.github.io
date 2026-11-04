---
title: 列表页
aside: false
---

# 列表页

<span class="level level-recommend">🟡 第 6.2.1 – 6.2.3 节 · 推荐</span>

列表页是[全局组件](/components/navigation)骨架之上的**页面模板**层：三个实例都套在完整的系统骨架里（顶栏 + 一级导航 + 侧边菜单 [+ 页签]，即混合导航形态），业务页面只写内容区，不得自己再画一套头部与侧边——否则同一个系统里会出现两种页边距、两种标题位置。

| 模板 | 结构 | 适用 | 章节 |
| --- | --- | --- | --- |
| 表格页 | 筛选卡 → 表格卡 → 分页 | 通知、工单、档案等管理类列表 | 6.2.1 |
| 一般列表 | 单栏「标题 + 状态 + 时间」轻量行（含列多的档案宽表） | 公告、消息、待阅、日志、人员档案 | 6.2.2 |
| 卡片列表 | 数据卡 + 计数行 / 双栏列表卡 | 工作台、待办总览、应用入口、公告 + 信箱并列 | 6.2.3 |

## 6.2.1 表格页

最常用的管理页：**筛选区（白卡）→ 表格（白卡）→ 分页（卡片底部）**。三层都在同一列内，宽度一致，不做左右分栏。

<div class="demo is-bleed">
  <div class="demo-label">page / table · 顶栏 + 一级导航 + 侧边菜单 + 页签 + 筛选 + 表格 + 分页</div>
  <div class="nav-demo-scroll">
    <AppShell variant="mixed" :tabs="true" height="auto" title="通知公告">
      <PageTableDemo />
    </AppShell>
  </div>
  <div class="demo-note">筛选条件与操作排在同一行：字段间距 `10px`、「搜索 / 重置」贴行尾；表格左右各留 16px、与卡头标题同左边线，直接复用 6.5 表格规范；分页只在卡片底部，左侧页码、右侧「当前区间 / 总数」。</div>
</div>

| 区域 | 规格 |
| --- | --- |
| 筛选卡 | 内边距 `14px 16px`；条件**单行排布**（标题 / 发布人 / 科室 / 发布时间）、字段间距 `10px`；输入框宽 `100px`（标题列自适应吃满剩余）、日期 `94px`、高 `32px`、圆角 `4px`、字号 `13px` |
| 操作按钮 | 「搜索」主按钮 + 「重置」次按钮贴行尾，与输入框同高 `32px`、不换行 |
| 表格 | 表头 `#FAFAFA`、行高 `38px`、分割线 `1px #F2F3F5`；表头 `14px` / `600`，**表体统一 `13px`**（含标题链接与操作按钮）；序号列居中；见 [6.5 表格](/components/table) |
| 表格边距 | 表格（含表头底色与悬停行）左右各留 `16px`，左边界与卡头标题「通知公告」同一条竖线，右边界与分页的「当前区间 / 总数」对齐 |
| 标题列 | `13px`、`--color-text-secondary`；悬停转 `--color-primary`，与 6.2.2 一般列表的标题同一套语言 |
| 表格卡头 | 左标题 `15px` / `600` + 右侧「共 N 条」，与表格同边距 `16px`；上下内边距 `12px / 8px`，与表头不留空档 |
| 分页 | 按钮 `28 × 28px`、圆角 `4px`，当前页品牌蓝铺底；条数区间 `12px` 等宽数字 |
| 卡片间距 | `12px`，整页上下留白 `14px` |

<ul class="rules">
  <li class="must">筛选区、表格、分页同宽同边距；不得筛选卡比表格窄一截。</li>
  <li class="must">筛选条件与「搜索 / 重置」排在同一行（≤ 4 个字段），不得拆成两行；放不下时收「更多筛选」，不换行堆行高。</li>
  <li class="must">表格左右各留 `16px`（表头底色、悬停行一起收进来），左边界与卡头标题同一条竖线；不得把表格通栏铺到卡片边缘。</li>
  <li class="must">行高统一 `38px`，表头与表体同高；不得单独加高表头或按列改行高。</li>
  <li class="must">表头不得自定义另一套底色或字号，一律走 6.5；列数 ≥ 8 时横向滚动，操作列吸右。</li>
  <li class="must">筛选后无结果必须展示空状态 + 「清除筛选」，不得只留一个空表头。</li>
  <li class="must">查询条件变化后回到第 1 页，并保留已填条件；不得悄悄清空。</li>
  <li class="recommend">筛选字段 ≤ 4 个；超出收进「更多筛选」展开面板，不做超长一行。</li>
  <li class="recommend">分页固定卡片底部，不随表格滚动；每页条数允许 10 / 20 / 50。</li>
</ul>

## 6.2.2 一般列表

标题 + 状态 + 时间的轻量行，用于公告、消息、待阅、日志。没有表头，靠行分割线与右对齐时间形成扫读节奏；**单栏满宽**排布，两张卡并排的双栏形态见 [6.2.3 · 双栏列表](#双栏列表)。

<div class="demo is-bleed">
  <div class="demo-label">page / list · 顶栏 + 一级导航 + 侧边菜单 + 单栏列表</div>
  <div class="nav-demo-scroll">
    <AppShell variant="mixed" height="auto" title="通知公告">
      <PageListDemo :columns="1" />
    </AppShell>
  </div>
  <div class="demo-note">`NEW` 红字角标标未读，标题左对齐、时间右对齐；行高 `38px`、分割线即行边界，悬停整行铺 `#E6F3FE`，列表首列与卡头图标同一起排线。</div>
</div>

| 项目 | 值 |
| --- | --- |
| 行高 | `38px`，底部分割线 `1px #F2F3F5`，最后一行无线 |
| 标题 | `13px`，`--color-text-secondary`；悬停变 `--color-primary`，整行可点 |
| 角标 | `NEW` 为 `10px` / `700` 红字，紧跟标题左侧，不做背景块 |
| 状态标签 | `已阅` 灰、`未读` 蓝，高 `20px`、字号 `11px`，紧跟标题右侧 |
| 时间 | `12px` 等宽数字，右对齐，格式 `YYYY-MM-DD` 或 `MM-DD HH:mm` |
| 悬停 | 整行铺 `--color-bg-hover-blue`（`#E6F3FE`），标题转 `--color-primary` |
| 布局 | 内容区满宽、单栏；卡片内边距 `14px 16px`，行不缩进 |

<ul class="rules">
  <li class="must">同一行只用一种未读标识：要么 `NEW` 角标、要么状态标签，不得两个一起出现。</li>
  <li class="must">时间必须右对齐并等宽数字，长短不一的日期不得把标题挤成锯齿。</li>
  <li class="must">列表超过 8 行时卡片内滚动并固定卡头，不把整页撑长。</li>
  <li class="must">行与行之间不留额外间距（分割线即行边界），悬停底色铺满整行 `38px`，上下行之间不得出现白缝。</li>
  <li class="must">列表首列与卡片标题前的图标左对齐（同一 `16px` 内边距起排），文字不额外缩进。</li>
  <li class="recommend">整行可点，不只给标题文字加链接；行悬停底色 `--color-bg-hover-blue`（`#E6F3FE`），同表格行。</li>
</ul>

### 列多的宽表

列数多到一行放不下时的列表形态：整表横向滚动、操作列吸右，行内操作改用 22px 描边小按钮，避免一列文字按钮串成一片。

<div class="demo is-bleed">
  <div class="demo-label">page / table · 顶栏 + 一级导航 + 侧边菜单 + 人员档案宽表</div>
  <div class="nav-demo-scroll">
    <AppShell variant="mixed" height="auto" title="人员档案">
      <PageStaffDemo />
    </AppShell>
  </div>
  <div class="demo-note">11 列超出容器时横向滚动，操作列固定右侧；4 项操作（编辑 / 删除 / 详情 / 干部审批表）用语义色描边，填充恒为白底；行高 `38px`、表体 `13px`、序号居中，与 6.2.1 表格页同一套密度。</div>
</div>

| 项目 | 值 |
| --- | --- |
| 行高 / 字号 | `38px`；表头 `14px` / `600`，表体 `13px`；表头 `#FAFAFA`，分割线 `1px #F2F3F5` |
| 边框 | 无外框、无竖线网格：四边与列间一律不描边，只有横向分割线；操作列靠左侧淡投影与内容分隔 |
| 表格边距 | 卡片内上下 `12px`、左右 `16px`，与卡头标题同左边线 |
| 横向滚动 | 列宽固定、整表横向滚动（`min-width 1376px`），操作列 `268px` 吸右且保持不透明白底 |
| 行内操作 | 4 项时用描边小按钮：高 `22px`、字号 `12px`、圆角 `4px`、间距 `8px`；编辑蓝 / 删除红 / 详情绿 / 干部审批表橙，只描边、不改填充 |
| 悬停 | 整行铺 `--color-bg-hover-blue`（`#E6F3FE`），吸右的操作列同步变色 |

<ul class="rules">
  <li class="must">列数 ≥ 8 时必须横向滚动，不得压缩列宽把邮箱、电话挤成两行；操作列恒在右侧并吸边。</li>
  <li class="must">表格不画外框与竖线网格，只保留横向分割线；吸右操作列用投影与内容分隔，不画竖线。</li>
  <li class="must">行内操作 ≤ 3 项用 6.5 的文字按钮；到 4 项改用描边小按钮，第 4 项（干部审批表这类长文案动作）放最后。</li>
  <li class="must">描边按钮的颜色只表达语义（蓝编辑 / 红删除 / 绿详情 / 橙流转），不得填色块，也不得出现两种颜色表达同一动作。</li>
  <li class="recommend">日期与手机号用等宽数字，列宽固定，滚动时数字不跳动。</li>
</ul>

## 6.2.3 卡片列表

用**数据卡**做入口与计数：有色底 + 白字 + 大数字，一屏最多 6 张；下方「计数行」用浅蓝数字角标补充细分项。公告 + 信箱这类**两栏并排的列表卡**也归在本节，见下方[双栏列表](#双栏列表)。

<div class="demo is-bleed">
  <div class="demo-label">page / cards · 顶栏 + 一级导航 + 侧边菜单 + 数据卡 + 计数行</div>
  <div class="nav-demo-scroll">
    <AppShell variant="mixed" height="auto" title="待办事项">
      <PageCardDemo />
    </AppShell>
  </div>
  <div class="demo-note">数据卡三等分、高 `62px`；图标 `40 × 40px` 半透明白底。计数行三栏对齐：名称左、数字右，数字角标浅蓝底品牌蓝字。</div>
</div>

| 项目 | 值 |
| --- | --- |
| 数据卡 | 高 `62px`，圆角 `8px`，内边距 `0 14px`；三等分，间距 `10px` |
| 卡内图标 | `40 × 40px`，圆角 `8px`，底色 `rgba(255,255,255,.24)`，图标 `20px` |
| 卡内文字 | 名称 `12.5px` / `400`（单行省略）+ 数字 `19px` / `600` 等宽，均纯白 |
| 卡片配色 | 蓝 / 绿 / 橙 / 紫 / 红 / 天蓝共 6 档渐变，按业务固定 |
| 计数行 | 高 `34px`，边框 `#EBEEF3`，名称 `12.5px`，数字角标 `20px` 高、圆角 `4px` |
| 交互 | 整卡可点，悬停亮度 +5%、上浮 `1px` + 阴影，不加下划线 |

<ul class="rules">
  <li class="must">卡片底色只表达「业务分类」，同一业务的颜色全站固定，不得随数量或状态变化。</li>
  <li class="must">有色卡内文字恒为白色，不得出现深色字或彩色字；对比度不足时加深底色而不是改字色。</li>
  <li class="must">数字是主信息：`19px` / `600` / 等宽数字；名称为辅，超出省略不换行。</li>
  <li class="recommend">一屏数据卡 ≤ 6 张，三等分；窄屏降为一行一张，不做瀑布流。</li>
  <li class="recommend">计数行 ≤ 12 条，超出给「查看全部」入口而不是继续加行。</li>
</ul>

### 双栏列表

两张卡并排承载两类动态（公告 + 信箱），每栏一张卡、卡头带图标与卡片工具；行规格完全沿用 [6.2.2 一般列表](#_6-2-2-一般列表)，只是把单栏拆成两栏。

<div class="demo is-bleed">
  <div class="demo-label">page / cards · 顶栏 + 一级导航 + 侧边菜单 + 双栏列表卡</div>
  <div class="nav-demo-scroll">
    <AppShell variant="mixed" height="auto" title="工作台">
      <PageListDemo />
    </AppShell>
  </div>
  <div class="demo-note">左栏用 `NEW` 红字角标标未读，右栏用状态标签标已阅 / 未读；两栏等宽、间距 `12px`，行基线与行数严格对齐。</div>
</div>

| 项目 | 值 |
| --- | --- |
| 分栏 | 两栏等宽 `repeat(2, minmax(0, 1fr))`、间距 `12px`；≤ 768px 降为单栏上下堆叠 |
| 卡片 | 内边距 `14px 16px`、圆角 `8px`、阴影 `--shadow-card`；卡头左图标 + 标题 `15px` / `600`，右侧收起 / 全屏 / 关闭三个 `20px` 工具按钮 |
| 行规格 | 沿用 6.2.2：行高 `38px`、标题 `13px` / `--color-text-secondary`、时间 `12px` 等宽数字、悬停 `#E6F3FE` |
| 行数 | 两栏同一条数（含末行补齐），行基线严格对齐 |

<ul class="rules">
  <li class="must">两栏条数对齐（同样条数），行基线严格一致；不得一栏 7 行一栏 4 行。</li>
  <li class="must">每栏一张卡、卡头带图标，卡内行规格与 6.2.2 单栏完全一致，不得给两栏各调一套密度。</li>
  <li class="recommend">需要第三、四类动态时另起一行两栏，不在单张卡里塞分段页签。</li>
</ul>

## 用法

三个模板都通过 `<AppShell>` 的**默认插槽**注入内容；骨架（侧边菜单 / 顶栏 / 页签）由 `AppShell` 负责，页面模板组件只渲染内容区：

```vue
<!-- 表格页：混合导航骨架 + 页签 + 内容 -->
<AppShell variant="mixed" :tabs="true" height="auto" title="通知公告">
  <PageTableDemo />
</AppShell>

<!-- 一般列表：混合导航骨架，单栏列表 -->
<AppShell variant="mixed" height="auto" title="通知公告">
  <PageListDemo :columns="1" />
</AppShell>

<!-- 卡片列表 · 数据卡：混合导航骨架，无页签 -->
<AppShell variant="mixed" height="auto" title="待办事项">
  <PageCardDemo />
</AppShell>

<!-- 卡片列表 · 双栏列表卡（公告 + 信箱并列）：columns 默认 2 -->
<AppShell variant="mixed" height="auto" title="工作台">
  <PageListDemo />
</AppShell>

<!-- 人员档案宽表：混合导航骨架，列多时横向滚动 -->
<AppShell variant="mixed" height="auto" title="人员档案">
  <PageStaffDemo />
</AppShell>
```

`AppShell` 的完整参数（`variant` / `tabs` / `collapsed` / `height` / `title`）见[全局组件 · 参数与代码](/components/navigation#617-参数与代码)。
