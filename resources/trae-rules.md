---
title: Trae 规则文件
---

# Trae 规则文件

<span class="level level-optional">⚪ 第 9 节 · 派生</span>

本节内容由第 2–8 节派生，供 AI 编码工具（Trae Rule）使用。**不要在此单独维护数值**——数值变更时先改源文件，再同步本节。

## 9.1 使用方法

1. 新建项目内文件 `.trae/rules/ui-spec.md`（或直接使用现有的 `ui-spec.md`）；
2. 将下方代码块内容整体替换进去；
3. 规则生效后，AI 生成的代码样式应只引用 Token。

## 9.2 规则内容

```markdown
# UI 生成强制约束（PC 端 OA 系统专用）

## 1. 样式声明方式
- 颜色、背景、边框、间距、圆角必须引用 CSS 变量，禁止硬编码十六进制色值。
- margin / padding / gap 必须是 4 的倍数，禁止 10px、15px。

## 2. 全局变量
品牌色：--color-primary #3370FF、-hover #4E83FD、-active #245BDB、-light #E1EAFF
语义色：--color-success #00B42A、--color-warning #FF7D00、--color-danger #F53F3F、--color-info #86909C
动作色：--color-action-warning #F67437、--color-action-hold #FAAD25、
        --color-action-custom #15C7D6、--color-action-neutral #898989
中性色：--color-text-primary #1D2129、-secondary #4E5969、-disabled #C9CDD4、
        --color-border #E5E6EB、--color-bg-page #F2F3F5、--color-bg-container #FFF、
        --color-bg-hover #F7F8FA、--color-bg-hover-blue #E6F3FE
间距：--spacing-xs 4 / -sm 8 / -md 16 / -lg 24 / -xl 32
圆角：--radius-sm 2 / -md 4 / -lg 8
阴影：--shadow-card 0 1px 4px rgba(0,0,0,.05)、--shadow-dropdown 0 4px 10px rgba(0,0,0,.1)、
      --shadow-modal 0 8px 24px rgba(0,0,0,.15)
字体：--font-size-body 14、--font-size-section-title 16、--font-size-caption 12

## 3. 按钮
- 覆盖 default / hover / active / disabled / loading 五种状态。
- 同一内容区域只允许 1 个主按钮、至多 1 个危险按钮；禁止满屏彩色实心按钮。
- 表格行内禁止实心色块按钮。
- loading 时阻止重复点击。

### 3.1 动作按钮固定配色（不得自造颜色）
查询 / 通过 / 催办 / 打印 / 启用 → var(--color-primary) 实心
重置 / 退回 → var(--color-action-warning) 实心
暂存 → var(--color-action-hold) 实心
自定义按钮 → var(--color-action-custom) 实心
撤回 / 流程跟踪 → var(--color-success) 实心
关闭 / 删除 / 作废 / 禁用 → var(--color-danger) 实心
取消 → var(--color-action-neutral) 实心
排列：查询 → 重置 → 自定义 在最左，关闭 / 删除 在最后；蓝色不超过 2 个，红色不超过 2 个。

### 3.2 操作标签 Chip（表格操作列 ≥4 项）
白底 + 1px 同色相浅描边 + 彩色文字，圆角 4px，高 24px，字号 12px，内边距 0 8px。
置顶 / 减签 / 增加转调人员 = 橙 #F67437；编辑 / 加签 / 启用 = 蓝 #3370FF；
浏览 = 天蓝 #2E9BF0；删除 / 作废 / 禁用 = 红 #F53F3F；
详情 / 审批 = 青绿 #20BC98；流程跟踪 = 绿 #00B42A；更多 ⋯ = 灰 #898989。
禁用态：白底 + --color-border 边框 + --color-text-disabled 文字。

### 3.3 图标按钮与工具条
默认：32×32，白底，1px --color-border，图标 16×16，色 --color-text-secondary。
主色变体（导入 / 导出 / 打印）：主色图标 + 主色描边 #C7D8FF。
悬停：背景 var(--color-primary-light)，边框转主色。
展开 / 收起必须成对出现，禁用时转灰；必须有 title 或 aria-label。
进度条：轨道 #F5F5F5，填充 --color-primary，高 8px，全圆角 999px，右侧百分比 14px/600 等宽数字；详见第 10 节。

## 4. 表单
- Label 顶部对齐，禁止左右布局。
- 必填星号 * 在 Label 之前，颜色 var(--color-danger)。
- 错误提示在输入框下方，var(--color-danger)，带错误图标；不得用 placeholder 代替 Label。
- 输入框高度统一 32px 或 36px。

## 5. 表格与空状态
- 表头背景 #FAFAFA，字号 14px / 600，表头不得小于表体，禁止 12px 表头；行高 50px，左右内边距 16px，仅横向分割线 #F2F3F5。
- 无数据时必须展示插画 + 说明文字 + 引导操作，禁止纯留白。
- 行内操作 ≤3 项用文字按钮：次要动作（编辑/删除）var(--color-info)，主动作（详情/处理）var(--color-primary) 且在最后；≥4 项收进「更多」或改用 Chip。
- 操作列 position: sticky; right: 0，背景不透明。

### 5.1 流程列表（9 列）
- 列顺序固定：序号 → 流程标题 → 所属流程 → 发起时间 → 审批节点 → 紧急程度 → 流程状态 → 流程进度 → 操作。
- 标题为主色链接、字重 500、最小 240px；时间 180px tabular-nums；状态 120px 用状态标签；进度 220px；操作 168px。
- 行内进度：轨道 #F5F5F5、156×10px、圆角 999px；填充 var(--color-primary)；百分比在右、间距 12px、14px/600、tabular-nums、最小宽 38px；无数据显示 —。
- 禁止：百分比压在条内、100% 变绿、行内不确定态、状态列纯文字。
- 列数 ≥8 允许横向滚动，操作列吸附右侧。

## 6. 状态标签
浅底 + 同色描边 + 同色文字，圆角 4px，高 20px，字号 12px，禁止实心填充，必须带文字。
流程状态：草稿 #20BC98、审批中 #2E9BF0、已办结 #F67437、已作废 #ABABAB
阅读状态：已读 #20BC98、未读 #2E9BF0
禁用/启用：禁用 #E04303、启用 #3370FF
是否：是 #E04303、否 #ABABAB
委托状态：委托中 #3370FF、已失效 #ABABAB
同一状态全站同色，不得换色。

## 7. 卡片与弹窗
- 卡片：--color-bg-container + --radius-lg + --shadow-card。
- 弹窗：遮罩 rgba(0,0,0,0.4)，白底，--radius-lg，--shadow-modal。
- 底部按钮：取消在左（次按钮），确认在右（主按钮）。

## 8. 轻提示 Toast
成功：背景 #E6F9F4，图标实心圆 #1FD8AD + 白色对勾，文字 #0FB98E。
失败：背景 #FFE7E3，图标实心圆 #FF3E1F + 白色叉号，文字 #FF3E1F。
提示条上下左右居中，最大宽 400px，圆角 --radius-lg，图标与文字间距 8px。
纯反馈可用无遮罩版本；文案用「动词 + 结果」，禁止只写「成功」「错误」。

## 9. 首页工作台（色彩特权区）
- 仅首页快捷入口、待办卡片、专题栏目允许丰富色彩；业务页面仍严禁彩色。
- 顶部大图标入口：可用高饱和实心或渐变，图标必须白色，底部文字 var(--color-text-primary)，颜色交错。
- 次级卡片：必须用极浅柔和背景，图标可跟主题色，文字必须 var(--color-text-primary)。
- 卡片圆角统一 --radius-lg，悬浮 translateY(-2px) + --shadow-card。
- 布局：顶部入口横向排列，次级模块大卡片套小网格。
```

## 9.3 维护说明

| 变更类型 | 需要同步的位置 |
| --- | --- |
| 修改色值 / 字号 / 间距 | 源文件 → 本站对应页面 → 本节规则内容 → `ui-spec.md` |
| 新增组件规则 | 源文件第 6 节 → 本站组件页 → 本节规则内容 |
| 调整强制等级 | 源文件 → 本站页面徽标 → 本节规则措辞 |

::: tip 为什么规则要派生而不是独立维护
两份独立维护的数值必然发散。规则文件只保留「结论」，数值一律回源，可以避免 AI 按旧值生成代码。
:::


## 10. 进度条
- 轨道 #F5F5F5，填充 var(--color-primary)，高 8px，圆角 999px。
- 百分比文字固定右侧：14px / 600，var(--color-text-primary)，等宽数字，间距 12px。
- 宽度过渡 420ms cubic-bezier(0.4, 0, 0.2, 1)；进行中叠加 45% 白色流光，1.8s 线性循环。
- 填充始终为 var(--color-primary)，任何状态（含 100%）不得变绿；完成时仅停止动画。
- 无法预估耗时用不确定态：30% 宽滑块 1.4s 往返。
- 必须带 role="progressbar" 与 aria-valuenow；prefers-reduced-motion 下关闭全部动画。

## 11. 空状态
- 结构：插画（品牌蓝线性，宽 208px）+ 标题 20px/600 + 描述 14px/--color-info + 最多两个动作。
- 插画在左、文案在右，间距 40px；宽度 < 768px 改为上下排列并居中。
- 标题写结论（暂无数据 / 没有找到相关结果），描述写原因与引导，动作给出口（返回上一级 / 新建 / 清空筛选）。
- 加载失败不算空状态，用错误态 + 重试。
- 禁止灰色占位图、emoji、纯留白。

## 12. 异常页（404 / 403 / 500）
- 统一版式：插画（宽 300px，含错误码）+ 标题 26px/600 + 描述 14px/--color-info + 主按钮 36px。
- 文案用人话，不出现堆栈、接口地址等技术信息。
- 「返回上一级」为主按钮，次动作为「回到首页」文字链。
- 403 / 404 / 500 共用一套组件，只换错误码与文案；500 不自动重试、不自动跳转。
