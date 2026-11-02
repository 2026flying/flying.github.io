<template>
  <svg
    class="empty-art"
    viewBox="0 0 240 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <!-- 背景色块 -->
    <circle cx="104" cy="118" r="68" fill="#E9F2FF" />
    <circle cx="176" cy="150" r="26" fill="#F1F7FF" />
    <circle cx="30" cy="126" r="6" stroke="#C6DEFF" stroke-width="2" />
    <circle cx="18" cy="158" r="2" fill="#C6DEFF" />

    <!-- 左侧纸张 -->
    <g transform="rotate(-14 42 78)">
      <rect x="22" y="52" width="40" height="52" rx="4" fill="#F7FBFF" stroke="#D9E8FF" stroke-width="2" />
      <path d="M30 66h24M30 76h24M30 86h16" stroke="#D9E8FF" stroke-width="2" stroke-linecap="round" />
    </g>

    <!-- 右上纸张 -->
    <g transform="rotate(12 190 60)">
      <g class="paper">
        <rect x="170" y="38" width="40" height="46" rx="4" fill="#F7FBFF" stroke="#D9E8FF" stroke-width="2" />
        <path d="M178 54h24M178 64h24M178 74h14" stroke="#D9E8FF" stroke-width="2" stroke-linecap="round" />
      </g>
    </g>

    <!-- 右下纸张 -->
    <g transform="rotate(-6 197 118)">
      <rect x="180" y="96" width="34" height="44" rx="4" fill="#F7FBFF" stroke="#D9E8FF" stroke-width="2" />
      <path d="M188 110h18M188 120h18M188 130h12" stroke="#D9E8FF" stroke-width="2" stroke-linecap="round" />
    </g>

    <!-- 记录板 -->
    <rect x="64" y="52" width="94" height="124" rx="8" fill="#FBFDFF" stroke="#3370FF" stroke-width="5" />
    <rect x="98" y="43" width="26" height="14" rx="5" fill="#3370FF" />
    <rect x="105" y="47" width="12" height="5" rx="2.5" fill="#FBFDFF" />

    <rect x="80" y="86" width="62" height="6" rx="3" fill="#E4F0FF" />
    <rect x="80" y="100" width="52" height="6" rx="3" fill="#E4F0FF" />
    <rect x="80" y="114" width="44" height="6" rx="3" fill="#E4F0FF" />
    <rect x="80" y="128" width="58" height="6" rx="3" fill="#EDF5FF" />

    <!-- 放大镜 -->
    <circle cx="134" cy="130" r="24" fill="rgba(255,255,255,0.55)" stroke="#3370FF" stroke-width="6" />
    <path d="M146 118a16 16 0 0 1 4 12" stroke="#BBD6FF" stroke-width="3" stroke-linecap="round" />
    <path d="M151 147l17 17" stroke="#3370FF" stroke-width="9" stroke-linecap="round" />

    <!-- 装饰星点 -->
    <path class="spark" d="M44 32l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="#5B8DEF" />
    <path class="spark" style="animation-delay: 0.9s" d="M176 88l1.6 4.4 4.4 1.6-4.4 1.6-1.6 4.4-1.6-4.4-4.4-1.6 4.4-1.6z" fill="#7FA5F0" />
    <path class="spark" style="animation-delay: 1.7s" d="M46 158l1.4 3.6 3.6 1.4-3.6 1.4-1.4 3.6-1.4-3.6-3.6-1.4 3.6-1.4z" fill="#5B8DEF" />
  </svg>
</template>
