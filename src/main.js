// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import router from './router'
import store from './store'

import YoutubeIframe from 'youtube-iframe'

Vue.use(Vuetify)
Vue.use(YoutubeIframe)

Vue.config.productionTip = false

export const bus = new Vue()

/* eslint-disable no-new */
new Vue({ router, store, render: (h) => h(App) }).$mount('#app')
