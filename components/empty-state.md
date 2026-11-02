---
title: 空状态 Empty State
---

# 空状态 Empty State

<span class="level level-must">🔴 第 6.10 节 · 强制</span>

列表、表格、搜索结果没有内容时的兜底页面。空状态必须回答三个问题：发生了什么、为什么、下一步做什么。

## 6.10.1 形态

<div class="demo">
  <div class="demo-label">empty-state / no-data</div>
  <div class="demo-stage block" style="padding: 0;">
    <div class="empty-state">
      <EmptyArt />
      <div class="empty-body">
        <p class="empty-title">暂无数据</p>
        <p class="empty-desc">返回刚才的页面试试吧～</p>
        <div class="empty-actions">
          <a class="btn btn-primary" href="#">返回上一级</a>
        </div>
      </div>
    </div>
  </div>
  <div class="demo-note">插画 208px 宽，文案左对齐；整块在容器内水平、垂直居中，上下留白不少于 48px。</div>
</div>

## 6.10.2 三种空场景

| 场景 | 标题 | 描述 | 动作 |
| --- | --- | --- | --- |
| 无数据（首次进入） | 暂无数据 | 返回刚才的页面试试吧～ | 返回上一级 / 新建 |
| 搜索无结果 | 没有找到相关结果 | 换个关键词或清空筛选条件再试试 | 清空筛选 |
| 权限受限 | 暂无查看权限 | 联系管理员为你开通该模块权限 | 申请权限 |

<div class="demo">
  <div class="demo-label">empty-state / no-result</div>
  <div class="demo-stage block" style="padding: 0;">
    <div class="empty-state">
      <EmptyArt />
      <div class="empty-body">
        <p class="empty-title">没有找到相关结果</p>
        <p class="empty-desc">换个关键词或清空筛选条件再试试</p>
        <div class="empty-actions">
          <button class="btn btn-default" type="button">清空筛选</button>
          <button class="btn btn-primary" type="button">新建客户</button>
        </div>
      </div>
    </div>
  </div>
</div>

## 6.10.3 规格

| 项目 | 值 |
| --- | --- |
| 容器 | 白底，`padding: 48px 24px`，最小高度 `260px` |
| 布局 | 插画在左、文案在右，间距 `40px`；`< 768px` 改为上下排列并居中 |
| 插画 | 宽 `208px`，品牌蓝线性插画（`#3370FF` + `#E9F2FF` 底层色块） |
| 标题 | `20px` / `600` / `--color-text-primary` |
| 描述 | `14px` / `400` / `--color-info`，与标题间距 `8px` |
| 动作 | 主按钮高度 `32px`，与描述间距 `24px`；最多 1 主 + 1 次 |
| 动效 | 插画星星呼吸 `2.8s`、纸张浮动 `7s`，禁用动效时全部静止 |

## 6.10.4 使用约束

<ul class="rules">
  <li class="must">不允许纯留白：任何列表 / 表格为空时都必须出现空状态。</li>
  <li class="must">标题必须写清结论（暂无数据、没有找到相关结果），不能只写「提示」「信息」。</li>
  <li class="must">必须提供至少一个可执行的出路（返回、新建、清空筛选），不允许只放一张插画。</li>
  <li class="must">加载失败<b>不是</b>空状态：失败用错误态 + 重试按钮，文案说明失败原因。</li>
  <li class="must">禁止使用系统默认灰色占位图或 emoji 代替插画。</li>
  <li class="recommend">表格内部的空状态不显示表头以外的分割线，整块高度与 5 行数据接近，避免页面塌陷。</li>
  <li class="recommend">同一产品内只保留一套空状态插画风格，不按模块各画一套。</li>
</ul>

## 6.10.5 代码

```html
<div class="empty-state">
  <EmptyArt />
  <div class="empty-body">
    <p class="empty-title">暂无数据</p>
    <p class="empty-desc">返回刚才的页面试试吧～</p>
    <div class="empty-actions">
      <a class="btn btn-primary" href="/list">返回上一级</a>
    </div>
  </div>
</div>
```
