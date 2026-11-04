<script setup>
import NavIcon from './NavIcon.vue'

// columns=2 双栏（公告 + 信箱并列，用于卡片列表）；columns=1 单栏满宽（用于一般列表）
defineProps({
  columns: { type: Number, default: 2 }
})

const notices = [
  { title: '公告信息', isNew: true, date: '2025-11-18' },
  { title: '门诊部6月份医疗废物清单', isNew: true, date: '2025-07-03' },
  { title: '住院部6月份医疗废物清单', isNew: true, date: '2025-07-03' },
  { title: '无废医院知识培训', isNew: false, date: '2025-07-01' },
  { title: '节能降耗巡查整改', isNew: false, date: '2025-06-24' },
  { title: '无废医院知识培训', isNew: false, date: '2025-07-01' },
  { title: '节能降耗巡查整改', isNew: false, date: '2025-06-24' }
]

const mails = [
  { title: '公告信息', read: true, date: '2025-11-18' },
  { title: '门诊部6月份医疗废物清单', read: true, date: '2025-07-03' },
  { title: '住院部6月份医疗废物清单', read: true, date: '2025-07-03' },
  { title: '无废医院知识培训', read: false, date: '2025-07-01' },
  { title: '节能降耗巡查整改', read: false, date: '2025-06-24' },
  { title: '无废医院知识培训', read: false, date: '2025-07-01' },
  { title: '节能降耗巡查整改', read: false, date: '2025-06-24' }
]
</script>

<template>
  <div class="pg-case">
    <div class="pg-split" :class="{ 'is-single': columns === 1 }">
      <!-- 通知公告：标题 + NEW 角标 + 日期 -->
      <section class="pg-card">
        <div class="pg-card-head">
          <span class="pg-title"><NavIcon name="speaker" :size="16" />通知公告</span>
          <span class="pg-tools">
            <button class="pg-tool" type="button" title="收起"><NavIcon name="chevron-down" :size="13" /></button>
            <button class="pg-tool" type="button" title="全屏"><NavIcon name="expand" :size="13" /></button>
            <button class="pg-tool" type="button" title="关闭"><NavIcon name="close" :size="13" /></button>
          </span>
        </div>
        <ul class="pg-list">
          <li v-for="(item, i) in notices" :key="i" class="pg-list-row">
            <span class="pg-list-main">
              <a class="pg-list-title" href="#">{{ item.title }}</a>
              <i v-if="item.isNew" class="pg-new">NEW</i>
            </span>
            <time class="pg-list-time">{{ item.date }}</time>
          </li>
        </ul>
      </section>

      <!-- 站内信箱：标题 + 阅读状态标签 + 日期（仅双栏形态） -->
      <section v-if="columns !== 1" class="pg-card">
        <div class="pg-card-head">
          <span class="pg-title"><NavIcon name="inbox" :size="16" />站内信箱</span>
          <span class="pg-tools">
            <button class="pg-tool" type="button" title="收起"><NavIcon name="chevron-down" :size="13" /></button>
            <button class="pg-tool" type="button" title="全屏"><NavIcon name="expand" :size="13" /></button>
            <button class="pg-tool" type="button" title="关闭"><NavIcon name="close" :size="13" /></button>
          </span>
        </div>
        <ul class="pg-list">
          <li v-for="(item, i) in mails" :key="i" class="pg-list-row">
            <span class="pg-list-main">
              <a class="pg-list-title" href="#">{{ item.title }}</a>
              <span class="state-tag" :class="item.read ? 'state-gray' : 'state-blue'">
                {{ item.read ? '已阅' : '未读' }}
              </span>
            </span>
            <time class="pg-list-time">{{ item.date }}</time>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
