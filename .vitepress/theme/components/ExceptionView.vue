<script setup>
import { withBase } from 'vitepress'
import ExceptionArt from './ExceptionArt.vue'

const props = defineProps({
  code: { type: String, default: '404' },
  title: { type: String, default: 'Oops！您的页面走丢了！' },
  desc: { type: String, default: '返回刚才的页面试试吧～' },
  embedded: { type: Boolean, default: false }
})

function goBack() {
  if (import.meta.env.SSR) return
  if (window.history.length > 1) window.history.back()
  else window.location.href = withBase('/')
}
</script>

<template>
  <div class="exception-view" :class="{ 'is-embedded': embedded }">
    <ExceptionArt :code="code" class="exception-art" />
    <div class="exception-body">
      <h1 v-if="!embedded" class="exception-title">{{ title }}</h1>
      <p v-else class="exception-title">{{ title }}</p>
      <p class="exception-desc">{{ desc }}</p>
      <div class="exception-actions">
        <button class="exception-btn" type="button" @click="goBack">返回上一级</button>
        <a class="exception-link" :href="withBase('/')">回到首页</a>
      </div>
    </div>
  </div>
</template>
