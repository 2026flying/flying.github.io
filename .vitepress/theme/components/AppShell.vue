<script setup>
import { computed, reactive, ref } from 'vue'
import { withBase } from 'vitepress'
import NavIcon from './NavIcon.vue'

const props = defineProps({
  /** side：侧边导航；top：顶部导航；mixed：混合导航（顶部一级 + 侧边二级） */
  variant: { type: String, default: 'mixed' },
  /** 是否显示页签栏 */
  tabs: { type: Boolean, default: false },
  /** 初始是否收起侧边导航 */
  collapsed: { type: Boolean, default: false },
  /** 演示容器高度 */
  height: { type: [Number, String], default: 460 },
  /** 覆盖内容区标题；默认跟随页签 / 菜单 */
  title: { type: String, default: '' }
})

const isCollapsed = ref(props.collapsed)

const topMenus = [
  { key: 'oa', icon: 'grid', label: '协同办公' },
  { key: 'kb', icon: 'book', label: '知识库' },
  { key: 'notice', icon: 'bell', label: '通知公告' },
  { key: 'dev', icon: 'code', label: '在线开发' },
  { key: 'gen', icon: 'terminal', label: '代码生成' },
  { key: 'sys', icon: 'settings', label: '系统管理' },
  { key: 'org', icon: 'users', label: '组织权限' },
  { key: 'flow', icon: 'share', label: '流程引擎' }
]
const activeTop = ref('kb')

const sideGroups = [
  {
    key: 'kb',
    icon: 'book',
    label: '知识库',
    items: [
      { key: 'doc', icon: 'file', label: '全部文档' },
      { key: 'share', icon: 'share', label: '共享给我' }
    ]
  },
  {
    key: 'mail',
    icon: 'mail',
    label: '电子邮件',
    items: [
      { key: 'inbox', icon: 'inbox', label: '收件箱' },
      { key: 'write', icon: 'edit', label: '写邮件' },
      { key: 'draft', icon: 'file', label: '草稿箱' },
      { key: 'sent', icon: 'send', label: '已发送' },
      { key: 'trash', icon: 'trash', label: '已删除' },
      { key: 'attach', icon: 'paperclip', label: '附件管理' }
    ]
  }
]
const openGroups = reactive({ kb: false, mail: true })
const activeItem = ref('sent')

const toggleGroup = (key) => {
  openGroups[key] = !openGroups[key]
}

const openTabs = ref([
  { key: 'form', icon: 'doc', label: '功能表单' },
  { key: 'mine', icon: 'person', label: '我发起的' }
])
const activeTab = ref('form')

const closeTab = (key) => {
  const index = openTabs.value.findIndex((t) => t.key === key)
  if (index < 0) return
  openTabs.value.splice(index, 1)
  if (activeTab.value === key) {
    const next = openTabs.value[index] || openTabs.value[index - 1]
    activeTab.value = next ? next.key : 'home'
  }
}

const currentTab = computed(() => openTabs.value.find((t) => t.key === activeTab.value))
const topLabel = computed(() => topMenus.find((m) => m.key === activeTop.value)?.label || '')
const itemLabel = computed(() => {
  for (const group of sideGroups) {
    const hit = group.items.find((i) => i.key === activeItem.value)
    if (hit) return hit.label
  }
  return ''
})
const crumb = computed(() => {
  const path = props.title
    ? [topLabel.value, props.title]
    : [topLabel.value, itemLabel.value, currentTab.value?.label]
  return path.filter(Boolean).join(' / ')
})
const panelTitle = computed(
  () => props.title || currentTab.value?.label || itemLabel.value || '工作台'
)
const shellStyle = computed(() => {
  // height="auto" 时不锁高：页面模板由内容撑开，避免分页 / 表格被截断
  if (props.height === 'auto') return {}
  return { height: typeof props.height === 'number' ? `${props.height}px` : props.height }
})
</script>

<template>
  <div
    class="app-shell"
    :class="[`is-${variant}`, { 'is-collapsed': isCollapsed, 'has-tabs': tabs }]"
    :style="shellStyle"
  >
    <header class="as-header" :style="{ '--as-header-bg': `url(${withBase('/headerbg.png')})` }">
      <div class="as-brand">
        <img class="as-logo" :src="withBase('/syslogo.svg')" alt="亿同科技 · 智慧医疗管理专家" />
      </div>
      <div class="as-tools">
        <button class="as-tool" type="button" title="搜索"><NavIcon name="search" :size="18" /></button>
        <button class="as-tool" type="button" title="消息"><NavIcon name="mail" :size="18" /></button>
        <button class="as-tool" type="button" title="通知">
          <NavIcon name="bell" :size="18" />
          <span class="as-badge">12</span>
        </button>
        <button class="as-tool" type="button" title="帮助"><NavIcon name="help" :size="18" /></button>
        <span class="as-user">
          <span class="as-avatar" aria-hidden="true">管</span>
          <span class="as-user-name">管理员</span>
          <NavIcon name="chevron-down" :size="14" />
        </span>
      </div>
    </header>

    <nav v-if="variant !== 'side'" class="as-topnav" aria-label="一级导航">
      <button
        v-for="menu in topMenus"
        :key="menu.key"
        class="as-menu"
        :class="{ 'is-active': activeTop === menu.key }"
        type="button"
        @click="activeTop = menu.key"
      >
        <NavIcon :name="menu.icon" :size="16" />
        <span>{{ menu.label }}</span>
      </button>
      <button class="as-menu as-menu-more" type="button" title="更多菜单">
        <NavIcon name="chevron-right" :size="16" />
      </button>
    </nav>

    <div class="as-body">
      <aside v-if="variant !== 'top'" class="as-side">
        <div class="as-side-scroll">
          <template v-for="group in sideGroups" :key="group.key">
            <button
              class="as-group-head"
              :class="{ 'is-open': openGroups[group.key] }"
              type="button"
              :aria-expanded="openGroups[group.key]"
              @click="toggleGroup(group.key)"
            >
              <NavIcon :name="group.icon" :size="16" />
              <span class="as-label">{{ group.label }}</span>
              <NavIcon class="as-chev" name="chevron-down" :size="14" />
            </button>
            <div v-if="openGroups[group.key] || isCollapsed" class="as-group-body">
              <div
                v-for="item in group.items"
                :key="item.key"
                class="as-item"
                :class="{ 'is-active': activeItem === item.key }"
                :title="item.label"
                role="link"
                tabindex="0"
                @click="activeItem = item.key"
                @keydown.enter="activeItem = item.key"
              >
                <NavIcon :name="item.icon" :size="16" />
                <span class="as-label">{{ item.label }}</span>
              </div>
            </div>
          </template>
        </div>
        <div class="as-side-foot">
          <button
            class="as-collapse"
            type="button"
            :title="isCollapsed ? '展开侧栏' : '收起侧栏'"
            @click="isCollapsed = !isCollapsed"
          >
            <NavIcon name="panel-left" :size="16" />
            <span class="as-label">{{ isCollapsed ? '展开' : '收起侧栏' }}</span>
          </button>
        </div>
      </aside>

      <div class="as-main">
        <div v-if="tabs" class="as-tabs" role="tablist" aria-label="页签">
          <button class="as-tab-home" type="button" title="首页" @click="activeTab = 'home'">
            <NavIcon name="home" :size="16" />
          </button>
          <div
            v-for="tab in openTabs"
            :key="tab.key"
            class="as-tab"
            :class="{ 'is-active': activeTab === tab.key }"
            role="tab"
            tabindex="0"
            :aria-selected="activeTab === tab.key"
            @click="activeTab = tab.key"
            @keydown.enter="activeTab = tab.key"
          >
            <NavIcon :name="tab.icon" :size="14" />
            <span>{{ tab.label }}</span>
            <span class="as-tab-x" title="关闭" @click.stop="closeTab(tab.key)">
              <NavIcon name="close" :size="11" />
            </span>
          </div>
        </div>

        <div class="as-content" :class="{ 'is-page': !!$slots.default }">
          <div class="as-crumb">{{ crumb }}</div>
          <slot>
            <div class="as-panel">
              <div class="as-panel-head">
                <span class="as-panel-title">{{ panelTitle }}</span>
                <span class="as-panel-hint">页面内容区 · 由业务页面自行填充</span>
              </div>
              <div class="as-skel" style="width: 34%" />
              <div class="as-skel" style="width: 58%" />
              <div class="as-skel" style="width: 45%" />
              <div class="as-skel is-block" />
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
