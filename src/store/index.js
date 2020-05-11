import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import report from './erp/report'
import dashboard from './erp/dashboard'
import session from './session/session'

const vuexPersist = new VuexPersist({
    key: "masivian_erp",
    storage: window.localStorage
});

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        report,
        dashboard,
        session
    },
})