export default {
    state: {
        summaryProducts: {
            sms: null,
            email: null,
            voice: null,
            automation: null,
            filebuilder: null,
            sherlock: null
        },
        summaryChart: {
            sms: [],
            email: [],
            voice: [],
            automation: [],
            filebuilder: [],
            sherlock: []
        },
    },
    getters: {
        getSummaryProducts(state) {
            return state.summaryProducts;
        },
        getSummaryProductsSMS(state) {
            return state.summaryProducts.sms;
        },
        getSummaryProductsEmail(state) {
            return state.summaryProducts.email;
        },
        getSummaryProductsVoice(state) {
            return state.summaryProducts.voice;
        },
        getSummaryProductsAutomation(state) {
            return state.summaryProducts.automation;
        },
        getSummaryProductsFilebuilder(state) {
            return state.summaryProducts.filebuilder;
        },
        getSummaryProductsSherlock(state) {
            return state.summaryProducts.sherlock;
        },
        getSummaryChart(state) {
            return state.SummaryChart;
        },
        getSummaryChartSMS(state) {
            return state.summaryChart.sms;
        },
        getSummaryChartEmail(state) {
            return state.summaryChart.email;
        },
        getSummaryChartVoice(state) {
            return state.summaryChart.voice;
        },
        getSummaryChartAutomation(state) {
            return state.summaryChart.automation;
        },
        getSummaryChartFilebuilder(state) {
            return state.summaryChart.filebuilder;
        },
        getSummaryChartSherlock(state) {
            return state.summaryChart.sherlock;
        }
    },
    mutations: {
        setSummaryProductsSMS(state, payload) {
            state.summaryProducts.sms = payload;
        },
        setSummaryProductsEmail(state, payload) {
            state.summaryProducts.email = payload;
        },
        setSummaryProductsVoice(state, payload) {
            state.summaryProducts.voice = payload;
        },
        setSummaryProductsAutomation(state, payload) {
            state.summaryProducts.automation = payload;
        },
        setSummaryProductsFilebuilder(state, payload) {
            state.summaryProducts.filebuilder = payload;
        },
        setSummaryProductsSherlock(state, payload) {
            state.summaryProducts.sherlock = payload;
        },
        setSummaryChartSMS(state, payload) {
            state.summaryChart.sms = payload;
        },
        setSummaryChartEmail(state, payload) {
            state.summaryChart.email = payload;
        },
        setSummaryChartVoice(state, payload) {
            state.summaryChart.voice = payload;
        },
        setSummaryChartAutomation(state, payload) {
            state.summaryChart.automation = payload;
        },
        setSummaryChartFilebuilder(state, payload) {
            state.summaryChart.filebuilder = payload;
        },
        setSummaryChartSherlock(state, payload) {
            state.summaryChart.sherlock = payload;
        }
    },
    actions: {
        updateSummaryChart({ commit }, payload) {
            // ....
        }
    }
};