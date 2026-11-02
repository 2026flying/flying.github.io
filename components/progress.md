---
title: 进度条 Progress
---

# 进度条 Progress

<span class="level level-must">🔴 第 6.9 节 · 强制</span>

进度条表达「还有多久」，不表达「正在忙」。因此只要知道总量，就必须给出百分比；无法预估耗时（如导入大文件、等待第三方回调）才允许使用不确定态。

## 6.9.1 形态

<div class="demo">
  <div class="demo-label">progress / 0% &amp; 50%</div>
  <div class="demo-stage block">
    <div class="progress-row">
      <div class="progress"><div class="progress-bar" style="--value:0%"></div></div>
      <span class="progress-text">0%</span>
    </div>
    <div class="progress-row">
      <div class="progress"><div class="progress-bar" style="--value:50%"></div></div>
      <span class="progress-text">50%</span>
    </div>
  </div>
  <div class="demo-note">打开页面时填充条从 0 增长到目标值（720ms），百分比文字右对齐、等宽数字，数值变化时不左右跳动。</div>
</div>

## 6.9.2 规格

| 项目 | 值 |
| --- | --- |
| 轨道 | `#F5F5F5`（截图实测，等价于 `--color-bg-hover` 一档） |
| 填充 | `--color-primary` `#3370FF` |
| 高度 | `8px`，小尺寸场景 `4px` |
| 圆角 | `999px`（两端全圆角） |
| 百分比文字 | `14px` / `600`，`--color-text-primary`，等宽数字 |
| 文字间距 | `12px`，文字最小宽度 `42px` |
| 最小宽度 | `80px`；无容器约束时不超过 `320px` |

## 6.9.3 状态与动效

<div class="demo">
  <div class="demo-label">progress / active · done · indeterminate</div>
  <div class="demo-stage block">
    <div class="progress-row">
      <div class="progress"><div class="progress-bar is-active" style="--value:62%"></div></div>
      <span class="progress-text">62%</span>
    </div>
    <div class="progress-row">
      <div class="progress"><div class="progress-bar is-success" style="--value:100%"></div></div>
      <span class="progress-text">100%</span>
    </div>
    <div class="progress-row">
      <div class="progress is-indeterminate"><div class="progress-bar"></div></div>
      <span class="progress-text">处理中</span>
    </div>
  </div>
  <div class="demo-note">第一行为进行中：填充上有斜向流光，1.8s 循环；第二行为完成态：保持品牌蓝并停止动效；第三行为不确定态。</div>
</div>

| 状态 | 触发条件 | 表现 |
| --- | --- | --- |
| 默认 | 已有明确进度 | 纯色填充，宽高过渡 `420ms` |
| 进行中 `is-active` | 任务在跑且耗时 > 2s | 叠加 45% 白色流光，`1.8s` 线性循环 |
| 完成 `is-success` | 达到 100% | **保持品牌蓝不变色**，停止一切动画 |
| 不确定 `is-indeterminate` | 无法预估耗时 | `30%` 宽滑块往返，`1.4s` 循环 |

<ul class="rules">
  <li class="must">轨道必须是<b>全圆角胶囊</b>，不使用直角或 2px 小圆角。</li>
  <li class="must">百分比文字固定右侧，<b>不得</b>压在填充条内部或跟随填充条移动。</li>
  <li class="must">进度条填充始终为品牌蓝，<b>任何状态都不得变绿</b>（成功与否由旁边文字或状态标签表达）。</li>
  <li class="must">尊重系统「减少动态效果」：<code>prefers-reduced-motion: reduce</code> 下关闭流光与往返动画，仅保留数值变化。</li>
  <li class="recommend">同一页面出现多个进度条时，轨道宽度保持一致，避免长度参差。</li>
  <li class="recommend">进度变化小于 1% 时不刷新界面，避免高频重绘。</li>
</ul>

## 6.9.4 无障碍

| 项 | 要求 |
| --- | --- |
| 语义 | `role="progressbar"` + `aria-valuenow` / `aria-valuemin` / `aria-valuemax` |
| 文案 | 用 `aria-label` 说明在做什么，例如「合同附件上传进度」 |
| 不确定态 | 去掉 `aria-valuenow`，只保留 `aria-label` |
| 颜色 | 填充与轨道对比度 ≥ 3:1（`#3370FF` on `#F5F5F5` 实测 3.9:1） |

## 6.9.5 代码

```html
<div class="progress-row">
  <div class="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar" style="--value: 50%"></div>
  </div>
  <span class="progress-text">50%</span>
</div>
```

```css
.progress {
  flex: 1 1 auto;
  min-width: 80px;
  max-width: 320px;
  height: 8px;
  border-radius: 999px;
  background: #f5f5f5;
  overflow: hidden;
}

.progress-bar {
  position: relative;
  height: 100%;
  width: var(--value, 0%);
  border-radius: inherit;
  overflow: hidden;
  background: var(--color-primary);
  transition: width 420ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: progress-grow 720ms cubic-bezier(0.22, 0.61, 0.36, 1);
}

/* 进行中：斜向流光 */
.progress-bar.is-active::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
    100deg,
    rgba(255, 255, 255, 0) 25%,
    rgba(255, 255, 255, 0.45) 50%,
    rgba(255, 255, 255, 0) 75%
  );
  background-size: 220% 100%;
  animation: progress-sheen 1.8s linear infinite;
}

.progress-text {
  min-width: 42px;
  font-size: 14px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--color-text-primary);
}
```
