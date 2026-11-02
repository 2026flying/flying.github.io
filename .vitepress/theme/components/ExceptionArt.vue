<script setup>
defineProps({
  code: { type: String, default: '404' }
})
</script>

<template>
  <svg
    class="exception-art"
    viewBox="0 0 300 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <!-- 云朵色块 -->
    <ellipse cx="152" cy="122" rx="122" ry="84" fill="#E9F2FF" />
    <circle cx="66" cy="62" r="34" fill="#EDF5FF" />
    <circle cx="252" cy="170" r="26" fill="#EDF5FF" />

    <!-- 浏览器窗口 -->
    <rect x="76" y="82" width="172" height="116" rx="10" fill="#FBFDFF" stroke="#3370FF" stroke-width="4" />
    <path d="M76 108h172" stroke="#D6E6FF" stroke-width="2" />
    <circle cx="92" cy="95" r="3.5" fill="#3370FF" />
    <circle cx="104" cy="95" r="3.5" fill="#B9D4FF" />
    <rect x="126" y="198" width="72" height="7" rx="3.5" fill="#B9D4FF" />

    <text
      x="163"
      y="174"
      text-anchor="middle"
      fill="#3370FF"
      font-size="54"
      font-weight="700"
      letter-spacing="2"
      font-family="'PingFang SC','Microsoft YaHei',Arial,sans-serif"
    >{{ code }}</text>

    <!-- 速度线 -->
    <path d="M36 96c14-14 30-20 48-22" stroke="#C6DEFF" stroke-width="3" stroke-linecap="round" />
    <path d="M42 116c10-8 20-12 32-14" stroke="#C6DEFF" stroke-width="3" stroke-linecap="round" />

    <!-- 火箭 -->
    <g transform="translate(24 8) rotate(-40 60 60)">
      <g class="rocket-float">
        <path d="M52 74c0 12 3 21 8 29 5-8 8-17 8-29z" fill="#FFC53D" />
        <path d="M56 76c0 8 2 14 4 18 2-4 4-10 4-18z" fill="#FF7A00" />
        <path
          d="M44 54L28 82l16-4z"
          fill="#F0483E"
          stroke="#3370FF"
          stroke-width="3"
          stroke-linejoin="round"
        />
        <path
          d="M76 54l16 28-16-4z"
          fill="#F0483E"
          stroke="#3370FF"
          stroke-width="3"
          stroke-linejoin="round"
        />
        <path
          d="M60 6c12 18 16 42 16 66H44c0-24 4-48 16-66z"
          fill="#FFFFFF"
          stroke="#3370FF"
          stroke-width="3.5"
          stroke-linejoin="round"
        />
        <path d="M60 6c6 9 10 19 12 28H48c2-9 6-19 12-28z" fill="#F0483E" />
        <circle cx="60" cy="52" r="11" fill="#EAF3FF" stroke="#3370FF" stroke-width="3.5" />
        <circle cx="56" cy="48" r="3" fill="#FFFFFF" />
        <rect x="50" y="70" width="20" height="7" rx="2.5" fill="#3370FF" />
      </g>
    </g>

    <!-- 星点 -->
    <path class="spark" d="M62 34l2.4 6.6L71 43l-6.6 2.4L62 52l-2.4-6.6L53 43l6.6-2.4z" fill="#5B8DEF" />
    <path class="spark" style="animation-delay: 1.1s" d="M246 58l1.8 5 5 1.8-5 1.8-1.8 5-1.8-5-5-1.8 5-1.8z" fill="#7FA5F0" />
    <path class="spark" style="animation-delay: 1.9s" d="M236 132l1.4 4 4 1.4-4 1.4-1.4 4-1.4-4-4-1.4 4-1.4z" fill="#7FA5F0" />
  </svg>
</template>
