---
title: 异常页 404 / 403 / 500
---

# 异常页 404 / 403 / 500

<span class="level level-recommend">🟡 第 6.11 节 · 推荐</span>

整页级的失败兜底，用于路由不存在、无权限、服务异常。版式统一：插画 + 一句人话 + 一个出路，不展示错误堆栈与技术细节。

## 6.11.1 404 页面不存在

<div class="demo">
  <div class="demo-label">exception / 404</div>
  <div class="demo-stage block" style="padding: 0;">
    <ExceptionView embedded code="404" />
  </div>
  <div class="demo-note">本地站点任意错误路径都会落到这一版式（已接入主题的 404 插槽）。</div>
</div>

## 6.11.2 403 与 500

<div class="demo">
  <div class="demo-label">exception / 403</div>
  <div class="demo-stage block" style="padding: 0;">
    <ExceptionView
      embedded
      code="403"
      title="抱歉，您没有访问权限"
      desc="请联系管理员开通该模块权限，或返回上一页。"
    />
  </div>
</div>

<div class="demo">
  <div class="demo-label">exception / 500</div>
  <div class="demo-stage block" style="padding: 0;">
    <ExceptionView
      embedded
      code="500"
      title="服务开小差了"
      desc="请稍后刷新重试，多次失败请联系技术支持。"
    />
  </div>
</div>

| 场景 | 标题 | 描述 | 主按钮 |
| --- | --- | --- | --- |
| 404 页面不存在 | Oops！您的页面走丢了！ | 页面可能已被删除或重命名，也可能是链接输入有误。 | 返回上一级 |
| 403 无权限 | 抱歉，您没有访问权限 | 请联系管理员开通该模块权限，或返回上一页。 | 返回上一级 |
| 500 服务异常 | 服务开小差了 | 请稍后刷新重试，多次失败请联系技术支持。 | 刷新重试 |

## 6.11.3 规格

| 项目 | 值 |
| --- | --- |
| 布局 | 插画在左、文案在右，间距 `56px`；`< 768px` 上下排列并居中 |
| 插图 | 宽 `300px`，浏览器窗口 + 错误码 + 火箭，代码文字随错误码变化 |
| 标题 | `26px` / `600` / `--color-text-primary`（窄屏 `22px`） |
| 描述 | `14px` / `400` / `--color-info`，与标题间距 `10px` |
| 主按钮 | 高 `36px`，主色实心，圆角 `--radius-md` |
| 次动作 | 文字链「回到首页」，与主按钮间距 `16px` |
| 页面留白 | 上下 `72px`，整块在内容区垂直居中 |

## 6.11.4 使用约束

<ul class="rules">
  <li class="must">必须给出至少一个可点击的出路：返回上一级、回到首页或刷新重试。</li>
  <li class="must">文案用人话，不出现 <code>NullPointerException</code>、接口地址、堆栈等技术信息。</li>
  <li class="must">错误码只在插画内呈现一次，不在标题里重复「404 错误」。</li>
  <li class="must">「返回上一级」优先于「回到首页」：用户多数想回到刚才的位置。</li>
  <li class="recommend">403 / 404 / 500 共用同一套版式与插画，只换错误码与文案，避免维护三套页面。</li>
  <li class="recommend">500 页面不自动重试、不自动跳转，由用户决定下一步。</li>
</ul>

## 6.11.5 接入

```vue
<!-- .vitepress/theme/Layout.vue -->
<script setup>
import DefaultTheme from 'vitepress/theme'
import ExceptionView from './components/ExceptionView.vue'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #not-found>
      <ExceptionView
        code="404"
        title="Oops！您的页面走丢了！"
        desc="页面可能已被删除或重命名，也可能是链接输入有误。"
      />
    </template>
  </Layout>
</template>
```
