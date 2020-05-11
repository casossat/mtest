import Vue from 'vue'
import axios from "axios"
import App from './App.vue'
import store from './store'
import router from './router'
import VueAxios from "vue-axios"
import VuePageTransition from "vue-page-transition"

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

Vue.use(VueAxios, axios)
Vue.use(VuePageTransition)

Vue.component('v-select', vSelect)
Vue.component('date-range-picker', DateRangePicker)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')