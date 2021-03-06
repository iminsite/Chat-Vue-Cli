import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
    iconfont: 'md',
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
