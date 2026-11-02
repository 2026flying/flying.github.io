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
