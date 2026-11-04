---
title: 表格 Table
aside: false
---

# 表格 Table

<span class="level level-must">🔴 第 6.5 节 · 强制</span>

表格承载数据浏览与行内操作，样式以「低干扰」为原则：只保留横向分割线，不加竖线与斑马纹。业务表的典型形态是**流程列表**——编号、标题链接、时间、状态标签、行内进度、文字操作。

## 6.5.1 结构（流程列表）

<div class="demo is-bleed">
  <div class="demo-label">table / flow list</div>
  <div style="padding:0;">
    <div class="table-scroll">
      <table class="data-table is-flow">
        <thead>
          <tr>
            <th class="col-index">序号</th>
            <th>流程标题</th>
            <th>所属流程</th>
            <th>发起时间</th>
            <th>审批节点</th>
            <th>紧急程度</th>
            <th>流程状态</th>
            <th>流程进度</th>
            <th class="col-action">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="col-index">1</td>
            <td class="cell-title"><a href="#">管理员的收文流程</a></td>
            <td>收文流程</td>
            <td class="cell-time">2025-12-24 09:48:51</td>
            <td>办公室主任审核</td>
            <td>普通</td>
            <td><span class="state-tag state-blue">等待审核</span></td>
            <td>
              <div class="cell-progress">
                <div class="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-label="流程进度 50%">
                  <div class="progress-bar" style="--value:50%"></div>
                </div>
                <span class="progress-text">50%</span>
              </div>
            </td>
            <td class="col-action">
              <span class="row-actions">
                <button class="act" type="button">编辑</button>
                <button class="act" type="button">删除</button>
                <button class="act act-primary" type="button">详情</button>
              </span>
            </td>
          </tr>
          <tr>
            <td class="col-index">2</td>
            <td class="cell-title"><a href="#">管理员的人事考勤</a></td>
            <td>人事考勤</td>
            <td class="cell-time">2025-12-24 09:47:49</td>
            <td>流程已结束</td>
            <td>普通</td>
            <td><span class="state-tag state-teal">审核通过</span></td>
            <td>
              <div class="cell-progress">
                <div class="progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" aria-label="流程进度 100%">
                  <div class="progress-bar" style="--value:100%"></div>
                </div>
                <span class="progress-text">100%</span>
              </div>
            </td>
            <td class="col-action">
              <span class="row-actions">
                <button class="act" type="button">编辑</button>
                <button class="act" type="button">删除</button>
                <button class="act act-primary" type="button">详情</button>
              </span>
            </td>
          </tr>
          <tr>
            <td class="col-index">3</td>
            <td class="cell-title"><a href="#">管理员的发文流程</a></td>
            <td>发文流程</td>
            <td class="cell-time">2025-12-23 17:31:51</td>
            <td>科室负责人核稿</td>
            <td>普通</td>
            <td><span class="state-tag state-blue">等待审核</span></td>
            <td>
              <div class="cell-progress">
                <div class="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-label="流程进度 50%">
                  <div class="progress-bar" style="--value:50%"></div>
                </div>
                <span class="progress-text">50%</span>
              </div>
            </td>
            <td class="col-action">
              <span class="row-actions">
                <button class="act" type="button">编辑</button>
                <button class="act" type="button">删除</button>
                <button class="act act-primary" type="button">详情</button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="demo-note">9 列业务表：标题是可点击链接，状态用标签，进度用「条 + 百分比」，操作是文字按钮（次要灰 / 主动作蓝）。列宽超出容器时横向滚动，操作列吸附右侧。</div>
</div>

## 6.5.2 列规范

| 列类型 | 示例 | 参考宽度 | 表现 | 等级 |
| --- | --- | --- | --- | --- |
| 序号 | `1` | `60px` | 等宽数字，`--color-text-secondary`，表头与数字均**居中** | <span class="level level-must">强制</span> |
| 标题链接 | 管理员的收文流程 | 自适应，≥ `240px` | `--color-primary`、字重 500，悬停变 `--color-primary-hover` 并加下划线 | <span class="level level-must">强制</span> |
| 普通文本 | 收文流程 | `120px` | `--color-text-primary` | <span class="level level-recommend">推荐</span> |
| 时间 | 2025-12-24 09:48:51 | `180px` | 等宽数字 `tabular-nums`，不换行 | <span class="level level-must">强制</span> |
| 状态 | 等待审核 | `120px` | 必须用[状态标签](/components/status-tag)，不得用纯文字 | <span class="level level-must">强制</span> |
| 进度 | 50% | `220px` | 行内进度条 + 百分比，见 6.5.3 | <span class="level level-must">强制</span> |
| 操作 | 编辑 删除 详情 | `168px` | 文字按钮，末位为主动作 | <span class="level level-must">强制</span> |

列顺序固定为：**序号 → 标题 → 属性列 → 状态 → 进度 → 操作**。插入新列时不得打乱状态与进度、操作三列的相对位置，否则用户扫读路径断裂。

## 6.5.3 行内进度

<div class="demo">
  <div class="demo-label">table / progress cell</div>
  <div class="demo-stage">
    <div class="cell-progress" style="min-width:0;">
      <div class="progress" style="flex:0 0 156px;width:156px;height:10px;" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" aria-label="流程进度 30%">
        <div class="progress-bar" style="--value:30%"></div>
      </div>
      <span class="progress-text">30%</span>
    </div>
    <div class="cell-progress" style="min-width:0;">
      <div class="progress" style="flex:0 0 156px;width:156px;height:10px;" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" aria-label="流程进度 100%">
        <div class="progress-bar" style="--value:100%"></div>
      </div>
      <span class="progress-text">100%</span>
    </div>
  </div>
  <div class="demo-note">100% 也保持品牌蓝，不变绿、不加对勾——完成与否由「流程状态」列的标签表达。</div>
</div>

| 项目 | 值 |
| --- | --- |
| 轨道 | `#F5F5F5`，`156 × 10px`，圆角 `999px` |
| 填充 | `--color-primary`，圆角继承轨道，宽度过渡 `420ms` |
| 百分比 | 右侧 `12px`，`14px` / `600`，`tabular-nums`，右对齐，最小宽 `38px` |
| 无数据 | 显示 `—`，不留空、不显示 0% |

<ul class="rules">
  <li class="must">进度列必须「条 + 百分比」同时出现，只有条没有百分比无法精确判断。</li>
  <li class="must">百分比固定在条右侧，不得压在条内、不得跟随填充移动。</li>
  <li class="must">100% 仍是品牌蓝，任何状态不得变绿（与 <a href="/components/progress">6.11 进度条</a> 一致）。</li>
  <li class="recommend">列宽不足时优先把轨道压到 <code>100px</code>，不要隐藏百分比。</li>
  <li class="recommend">表格行内不使用不确定态——列表里的每一行都必须有确定进度。</li>
</ul>

## 6.5.4 规范要点

| 项目 | 要求 | 等级 |
| --- | --- | --- |
| 表头背景 | `#FAFAFA`（近白），靠字重与 1px 底边区分 | <span class="level level-recommend">推荐</span> |
| 表头字号 | `14px` / `600`，颜色 `--color-text-primary`；**不得小于表体** | <span class="level level-must">强制</span> |
| 行高 | `50px`，单元格左右内边距 `16px` | <span class="level level-recommend">推荐</span> |
| 分割线 | 只用横向 `1px #F2F3F5`，不加竖线、不加斑马纹 | <span class="level level-must">强制</span> |
| 操作列 | 固定右侧；≤3 项用文字按钮，≥4 项收进「更多」 | <span class="level level-must">强制</span> |
| 空数据 | **必须展示空状态** | <span class="level level-must">强制</span> |
| 行悬停 | 背景 `#E6F3FE`（`--color-table-row-hover`），吸附列同步变色；区别于普通列表的灰悬停 | <span class="level level-recommend">推荐</span> |

<ul class="rules">
  <li class="must">操作列的次要动作（编辑 / 删除）用 <code>--color-info</code>，主动作（详情 / 处理）用 <code>--color-primary</code> 且放最后一位；不得全部同色。</li>
  <li class="must">状态列不得用纯文字，必须用状态标签，保证一眼可扫。</li>
  <li class="must">操作列固定在表格最右侧，水平滚动时不随之移动，并保持不透明背景。</li>
  <li class="must">破坏性操作（删除）需要二次确认。</li>
  <li class="recommend">列数 ≥ 8 时允许横向滚动，但序号与标题列应保持可见。</li>
</ul>

## 6.5.5 空状态

<div class="demo is-bleed">
  <div class="demo-label">table / empty</div>
  <div style="padding:0;">
    <table class="data-table is-flow">
      <thead>
        <tr>
          <th class="col-index">序号</th>
          <th>流程标题</th>
          <th>所属流程</th>
          <th>发起时间</th>
          <th>审批节点</th>
          <th>紧急程度</th>
          <th>流程状态</th>
          <th>流程进度</th>
          <th class="col-action">操作</th>
        </tr>
      </thead>
    </table>
    <div class="empty-state is-compact">
      <EmptyArt />
      <div class="empty-body">
        <p class="empty-title">暂无数据</p>
        <p class="empty-desc">调整筛选条件后重试，或新建第一条流程</p>
        <div class="empty-actions">
          <button class="btn btn-primary" type="button">新建流程</button>
        </div>
      </div>
    </div>
  </div>
</div>

空状态三件套：**插画（弱化）** + **一句结论** + **一个可执行动作**（新建 / 清除筛选）。三者缺一，用户会不知道该做什么。完整规格见[空状态](/components/empty-state)。

## 6.5.6 代码

```html
<div class="table-scroll">
  <table class="data-table is-flow">
    <thead>
      <tr>
        <th class="col-index">序号</th>
        <th>流程标题</th>
        <th>所属流程</th>
        <th>发起时间</th>
        <th>审批节点</th>
        <th>紧急程度</th>
        <th>流程状态</th>
        <th>流程进度</th>
        <th class="col-action">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="col-index">1</td>
        <td class="cell-title"><a href="/flow/1">管理员的收文流程</a></td>
        <td>收文流程</td>
        <td class="cell-time">2025-12-24 09:48:51</td>
        <td>办公室主任审核</td>
        <td>普通</td>
        <td><span class="state-tag state-blue">等待审核</span></td>
        <td>
          <div class="cell-progress">
            <div class="progress" role="progressbar"
                 aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                 aria-label="流程进度 50%">
              <div class="progress-bar" style="--value:50%"></div>
            </div>
            <span class="progress-text">50%</span>
          </div>
        </td>
        <td class="col-action">
          <span class="row-actions">
            <button class="act" type="button">编辑</button>
            <button class="act" type="button">删除</button>
            <button class="act act-primary" type="button">详情</button>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

```css
.data-table.is-flow th {
  height: 50px;
  padding: 0 16px;
  background: #fafafa;
  font-weight: 600;
  border-bottom: 1px solid var(--color-border);
}

.data-table.is-flow td {
  height: 50px;
  padding: 0 16px;
  border-bottom: 1px solid #f2f3f5;
  vertical-align: middle;
}

.data-table.is-flow .cell-title a {
  color: var(--color-primary);
  font-weight: 500;
  text-decoration: none;
}

.data-table.is-flow .cell-time {
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.data-table.is-flow .cell-progress {
  display: flex;
  align-items: center;
  gap: 12px;
}

.data-table.is-flow .cell-progress .progress {
  flex: 0 0 156px;
  height: 10px;
}

.data-table.is-flow .cell-progress .progress-text {
  min-width: 38px;
  font-size: 14px;
  font-weight: 600;
  text-align: right;
}

.data-table.is-flow .col-action {
  position: sticky;
  right: 0;
  background: var(--color-bg-container);
}

.row-actions {
  display: inline-flex;
  align-items: center;
  gap: 16px;
}

.row-actions .act {
  padding: 0;
  border: 0;
  background: none;
  font-size: 14px;
  color: var(--color-info);
  cursor: pointer;
}

.row-actions .act-primary {
  color: var(--color-primary);
  font-weight: 500;
}
```
