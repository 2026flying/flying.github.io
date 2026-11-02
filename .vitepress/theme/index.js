import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import EmptyArt from './components/EmptyArt.vue'
import ExceptionView from './components/ExceptionView.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('EmptyArt', EmptyArt)
    app.component('ExceptionView', ExceptionView)
  }
}
