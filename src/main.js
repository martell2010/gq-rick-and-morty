import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/plugins/element-ui.js'
import { createProvider } from '@/plugins/vue-apollo'

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
