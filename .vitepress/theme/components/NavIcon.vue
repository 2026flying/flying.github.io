<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 16 }
})

// 统一 24 栅格、1.7 线宽、圆头圆角的线性图标，避免引入图标库
const icons = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.6 7 8.4 6 8.4-6"/>',
  bell: '<path d="M18 8a6 6 0 1 0-12 0c0 6-3 7-3 7h18s-3-1-3-7"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.2 9.4a3 3 0 0 1 5.7 1c0 2-2.9 2.3-2.9 4"/><path d="M12 17.6h.01"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.6"/><rect x="14" y="3" width="7" height="7" rx="1.6"/><rect x="3" y="14" width="7" height="7" rx="1.6"/><rect x="14" y="14" width="7" height="7" rx="1.6"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v18H6.5A2.5 2.5 0 0 1 4 18.5z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v18h4.5A2.5 2.5 0 0 0 20 18.5z"/>',
  code: '<path d="m15 6 5 6-5 6"/><path d="m9 6-5 6 5 6"/>',
  terminal: '<path d="m5 8 4 4-4 4"/><path d="M12 17h7"/>',
  settings:
    '<path d="M4 8h5"/><path d="M15 8h5"/><circle cx="12" cy="8" r="2.4"/><path d="M4 16h6"/><path d="M16 16h4"/><circle cx="13" cy="16" r="2.4"/>',
  users:
    '<circle cx="9" cy="8" r="3.6"/><path d="M2.6 20.4a6.4 6.4 0 0 1 12.8 0"/><path d="M16.4 4.7a3.6 3.6 0 0 1 0 6.6"/><path d="M18 14.3a6.4 6.4 0 0 1 3.4 5.6"/>',
  share:
    '<circle cx="18" cy="5.2" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="18.8" r="2.6"/><path d="m8.3 10.8 7.4-4.3"/><path d="m8.3 13.2 7.4 4.3"/>',
  inbox:
    '<path d="M2 12h5.4l1.6 3h6l1.6-3H22"/><path d="M5.6 5.4 2 12v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5l-3.6-6.6A2 2 0 0 0 16.6 4H7.4a2 2 0 0 0-1.8 1.4z"/>',
  edit: '<path d="M12 20h9"/><path d="M16.6 3.4a2 2 0 0 1 2.8 2.8L7.5 18.1 3 19.4l1.3-4.5z"/>',
  file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8.6 13h6.8"/><path d="M8.6 17h4.6"/>',
  send: '<path d="m21.4 2.6-6.9 18.8-4-7.9-7.9-4z"/><path d="M21.4 2.6 10.5 13.5"/>',
  trash:
    '<path d="M3.6 6h16.8"/><path d="M8.6 6V4.2A1.2 1.2 0 0 1 9.8 3h4.4a1.2 1.2 0 0 1 1.2 1.2V6"/><path d="M18.4 6 17.6 19a2 2 0 0 1-2 1.9H8.4a2 2 0 0 1-2-1.9L5.6 6"/>',
  paperclip:
    '<path d="M20.4 11.4 11.7 20a5.5 5.5 0 0 1-7.8-7.8l8.7-8.7a3.7 3.7 0 0 1 5.2 5.2l-8.7 8.7a1.8 1.8 0 0 1-2.6-2.6l8-8"/>',
  home: '<path d="M3.6 10.6 12 4l8.4 6.6"/><path d="M5.6 9.8V20h12.8V9.8"/><path d="M10 20v-5h4v5"/>',
  doc: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8.6 13h6.8"/><path d="M8.6 17h4.6"/>',
  person: '<circle cx="12" cy="8" r="3.8"/><path d="M4.6 20.5a7.4 7.4 0 0 1 14.8 0"/>',
  'panel-left': '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/>',
  'chevron-down': '<path d="m6 9.5 6 6 6-6"/>',
  'chevron-right': '<path d="m9.5 6 6 6-6 6"/>',
  close: '<path d="m6.6 6.6 10.8 10.8"/><path d="m17.4 6.6-10.8 10.8"/>',
  box: '<path d="m12 3 8 4.4v9.2L12 21l-8-4.4V7.4z"/><path d="m4 7.4 8 4.4 8-4.4"/><path d="M12 11.8V21"/>',
  'user-minus':
    '<circle cx="10" cy="8" r="3.6"/><path d="M3.4 20.4a6.6 6.6 0 0 1 11.4-4.4"/><path d="M16.6 17.4h4.6"/>',
  clipboard:
    '<rect x="5" y="4.6" width="14" height="16.4" rx="2"/><path d="M9 4.6V3.4h6v1.2"/><path d="M9 10.6h6"/><path d="M9 15h3.6"/>',
  message: '<path d="M20.6 11.6a8.2 8.2 0 0 1-8.2 8.2H4.6l1.7-3.2a8.2 8.2 0 1 1 14.3-5z"/>',
  'file-search':
    '<path d="M13.4 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4"/><path d="M13.4 3v5h5"/><circle cx="16" cy="16" r="3.2"/><path d="m18.4 18.4 2 2"/>',
  'id-card':
    '<rect x="2.6" y="5" width="18.8" height="14" rx="2"/><circle cx="8.6" cy="11" r="2.2"/><path d="M5.4 16.6a3.4 3.4 0 0 1 6.4 0"/><path d="M14.8 10.2h4"/><path d="M14.8 13.6h3"/>',
  expand: '<path d="M9 3.4H3.4V9"/><path d="M15 20.6h5.6V15"/><path d="m3.4 3.4 6.4 6.4"/><path d="m20.6 20.6-6.4-6.4"/>',
  speaker: '<path d="M4 9.6v4.8h3.2l6.4 4V5.6l-6.4 4z"/><path d="M17.2 9a4.2 4.2 0 0 1 0 6"/>',
  calendar:
    '<rect x="3.4" y="5.2" width="17.2" height="15.4" rx="2"/><path d="M3.4 10h17.2"/><path d="M8 3.2v3.6"/><path d="M16 3.2v3.6"/>',
  more: '<circle cx="5.5" cy="12" r="1.1"/><circle cx="12" cy="12" r="1.1"/><circle cx="18.5" cy="12" r="1.1"/>'
}

const body = computed(() => icons[props.name] || '')
</script>

<template>
  <svg
    class="as-ico"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <g v-html="body" />
  </svg>
</template>

<style scoped>
.as-ico {
  display: block;
  flex: 0 0 auto;
}
</style>
