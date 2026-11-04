<script setup>
import NavIcon from './NavIcon.vue'

const cards = [
  { key: 'a', icon: 'box', label: '总务物资申请', count: 675, tone: 'blue' },
  { key: 'b', icon: 'user-minus', label: '离职申请', count: 675, tone: 'green' },
  { key: 'c', icon: 'clipboard', label: '手卫生调查表', count: 675, tone: 'orange' },
  { key: 'd', icon: 'message', label: '短信发送申请', count: 675, tone: 'violet' },
  { key: 'e', icon: 'file-search', label: '检查预约资料申请', count: 675, tone: 'red' },
  { key: 'f', icon: 'id-card', label: '因公外出销假申请', count: 675, tone: 'sky' }
]

const rows = [
  { label: '医疗机构耗材备案采购备案', count: 22 },
  { label: '高值耗材使用登记', count: 18 },
  { label: '设备维修申请', count: 31 },
  { label: '无菌物品发放登记', count: 12 },
  { label: '医疗废物转运交接', count: 9 },
  { label: '耗材验收登记', count: 26 },
  { label: '科室领用申请', count: 14 },
  { label: '库房月度盘点', count: 7 },
  { label: '供应商资质审核', count: 20 }
]
</script>

<template>
  <div class="pg-case">
    <section class="pg-card">
      <div class="pg-card-head">
        <span class="pg-title"><NavIcon name="grid" :size="15" />待办事项</span>
        <span class="pg-sub">09:20 更新</span>
        <span class="pg-tools">
          <button class="pg-tool" type="button" title="收起"><NavIcon name="chevron-down" :size="13" /></button>
          <button class="pg-tool" type="button" title="全屏"><NavIcon name="expand" :size="13" /></button>
          <button class="pg-tool" type="button" title="关闭"><NavIcon name="close" :size="13" /></button>
        </span>
      </div>

      <!-- 数据卡：有色底 + 白字，数字为主信息 -->
      <div class="pg-grid-3">
        <a v-for="card in cards" :key="card.key" class="pg-todo" :class="`is-${card.tone}`" href="#">
          <span class="pg-todo-ico"><NavIcon :name="card.icon" :size="20" /></span>
          <span class="pg-todo-txt">
            <b>{{ card.label }}</b>
            <strong>{{ card.count }}</strong>
          </span>
        </a>
      </div>

      <!-- 计数行：左侧名称、右侧数量，三栏排布 -->
      <div class="pg-grid-3 is-rows">
        <a v-for="row in rows" :key="row.label" class="pg-count-row" href="#">
          <span class="pg-count-label">{{ row.label }}</span>
          <span class="pg-count-num">{{ row.count }}</span>
        </a>
      </div>
    </section>
  </div>
</template>
