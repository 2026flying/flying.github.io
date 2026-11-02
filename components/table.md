---
title: 表格 Table
---

# 表格 Table

<span class="level level-must">🔴 第 6.3 节 · 强制</span>

表格承载数据浏览与行内操作，样式以「低干扰」为原则：只保留横向分割线，不加竖线与斑马纹。

## 6.3.1 结构

<div class="demo">
  <div class="demo-label">table / default</div>
  <div style="padding:0;">
    <table class="data-table">
      <thead>
        <tr>
          <th>客户名称</th>
          <th>联系人</th>
          <th>状态</th>
          <th>创建时间</th>
          <th class="col-action">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>示例科技有限公司</td>
          <td>张明</td>
          <td><span class="tag tag-success">已签约</span></td>
          <td>2026-10-28</td>
          <td class="col-action"><a href="#">编辑</a><a href="#">删除</a></td>
        </tr>
        <tr>
          <td>云图信息技术（上海）</td>
          <td>李思</td>
          <td><span class="tag tag-warning">跟进中</span></td>
          <td>2026-10-25</td>
          <td class="col-action"><a href="#">编辑</a><a href="#">删除</a></td>
        </tr>
        <tr>
          <td>北辰供应链管理</td>
          <td>王强</td>
          <td><span class="tag tag-info">已归档</span></td>
          <td>2026-10-19</td>
          <td class="col-action"><a href="#">编辑</a><a href="#">删除</a></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="demo-note">操作列固定在右侧，只使用文字按钮；状态用语义色标签表达。</div>
</div>

## 6.3.2 规范要点

| 项目 | 要求 | 等级 |
| --- | --- | --- |
| 表头背景 | `--color-bg-page` `#F2F3F5` | 推荐 |
| 表头字号 | `14px` / `600`，颜色 `--color-text-primary`；**不得小于表体** | <span class="level level-must">强制</span> |
| 分割线 | 只用横向 `1px solid --color-border`，不加竖线 | 推荐 |
| 操作列 | 固定右侧；≤2 项用文字按钮，≥3 项用 [Chip](/components/chip) | <span class="level level-must">强制</span> |
| 空数据 | **必须展示空状态** | <span class="level level-must">强制</span> |
| 行悬停 | 背景 `--color-bg-hover` | 推荐 |
| 单元格内边距 | `10px 14px` | 推荐 |

<ul class="rules">
  <li class="must">操作列不得使用实心色块按钮；操作项 ≤ 2 个用文字按钮，≥ 3 个改用 <a href="/components/chip">Chip 操作标签</a>（白底 + 浅描边 + 彩色文字）。</li>
  <li class="must">操作列固定在表格最右侧，水平滚动时不随之移动。</li>
  <li class="must">查询结果为空时必须渲染空状态，禁止留白或只显示表头。</li>
  <li class="must">破坏性操作（删除）放在操作列末尾，且需要二次确认。</li>
  <li class="recommend">超过 3 个行内操作时，保留 1–2 个高频操作，其余收进「更多」。</li>
</ul>

## 6.3.3 空状态

<div class="demo">
  <div class="demo-label">table / empty</div>
  <div style="padding:0;">
    <table class="data-table">
      <thead>
        <tr>
          <th>客户名称</th>
          <th>联系人</th>
          <th>状态</th>
          <th>创建时间</th>
          <th class="col-action">操作</th>
        </tr>
      </thead>
    </table>
    <div class="empty-state is-compact">
      <EmptyArt />
      <div class="empty-body">
        <p class="empty-title">暂无数据</p>
        <p class="empty-desc">调整筛选条件后重试，或新建第一条记录</p>
        <div class="empty-actions">
          <button class="btn btn-primary" type="button">新建客户</button>
        </div>
      </div>
    </div>
  </div>
</div>

空状态三件套：**插画（弱化）** + **一句结论** + **一个可执行动作**（新建 / 清除筛选）。三者缺一，用户会不知道该做什么。完整规格见[空状态](/components/empty-state)。

## 6.3.4 代码

```html
<table class="data-table">
  <thead>
    <tr>
      <th>客户名称</th>
      <th>状态</th>
      <th class="col-action">操作</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>示例科技有限公司</td>
      <td><span class="tag tag-success">已签约</span></td>
      <td class="col-action">
        <button class="btn btn-text">编辑</button>
        <button class="btn btn-text">删除</button>
      </td>
    </tr>
  </tbody>
</table>
```

```css
.data-table th {
  background: var(--color-bg-page);
  font-size: var(--font-size-body);
  font-weight: 600;
  letter-spacing: 0.2px;
  text-align: left;
  padding: 10px 14px;
  border-bottom: 1px solid var(--color-border);
  white-space: nowrap;
}

.data-table td {
  padding: 10px 14px;
  border-bottom: 1px solid var(--color-border);
  font-size: var(--font-size-body);
}

.data-table tbody tr:hover td {
  background: var(--color-bg-hover);
}

/* 操作列固定右侧 */
.data-table .col-action {
  position: sticky;
  right: 0;
  text-align: right;
  background: var(--color-bg-container);
  white-space: nowrap;
}
```
