import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import EmptyArt from './components/EmptyArt.vue'
import ExceptionView from './components/ExceptionView.vue'
import AppShell from './components/AppShell.vue'
import PageTableDemo from './components/PageTableDemo.vue'
import PageListDemo from './components/PageListDemo.vue'
import PageCardDemo from './components/PageCardDemo.vue'
import PageStaffDemo from './components/PageStaffDemo.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('EmptyArt', EmptyArt)
    app.component('ExceptionView', ExceptionView)
    app.component('AppShell', AppShell)
    app.component('PageTableDemo', PageTableDemo)
    app.component('PageListDemo', PageListDemo)
    app.component('PageCardDemo', PageCardDemo)
    app.component('PageStaffDemo', PageStaffDemo)
  }
}
