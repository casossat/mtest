export default {
    state: {
        searchEngine: {
            selectedClient: null,
            datesRange: {
                dateIni: null,
                dateEnd: null
            },
            btnSearchDisabled: false,
            btnParcialDisabled: false
        },
        generatedBills: [],
        table: {
            dataTableSearchTxt: null,
            options: {
                dateIni: null,
                dateEnd: null,
                sortOrder: null,
                pageSize: null,
                state: null,
                pageNumber: null,
                columns: [
                    {
                        name: "Acciones",
                        visible: true,
                        options: {}
                    },
                    {
                        name: "Estado",
                        visible: true
                    },
                    {
                        name: "Cliente",
                        visible: true
                    },
                    {
                        name: "Cuenta",
                        visible: true
                    },
                    {
                        name: "NoFactura",
                        visible: true
                    },
                    {
                        name: "Fecha",
                        visible: true
                    },
                    {
                        name: "Producto",
                        visible: true
                    },
                    {
                        name: "Consumo",
                        visible: true
                    },
                ],
            }
        },
    },
    getters: {
        getClients(state) {
            return state.clients;
        },
        getProducts(state) {
            return state.products;
        },
        getSearchSelectedClient(state) {
            return state.searchEngine.selectedClient;
        },
        getSearchDatesRange(state) {
            return state.searchEngine.datesRange;
        },
        getSearchBtnSearchDisabled(state) {
            return state.searchEngine.btnSearchDisabled;
        },
        getSearchBtnParcialDisabled(state) {
            return state.searchEngine.btnParcialDisabled;
        },
        getSearchSelectedClient(state) {
            return state.searchEngine.selectedClient;
        },
        getTable(state) {
            return state.table
        },
        getTablePagesize(state) {
            return state.table.options.pageSize;
        },
        getTablePageNumber(state) {
            return state.table.options.pageNumber;
        },
        getTableColumns(state) {
            return state.table.options.columns;
        }
    },
    mutations: {
        setSearchSelectedClient(state, payload) {
            state.searchEngine.selectedClient = payload;
        },
        setSearchDatesRange(state, payload) {
            state.searchEngine.datesRange = payload;
        },
        setSearchBtnSearchDisabled(state, payload) {
            state.searchEngine.btnSearchDisabled = payload;
        },
        setSearchBtnParcialDisabled(state, payload) {
            state.searchEngine.btnParcialDisabled = payload;
        },
        setSearchSelectedClient(state, payload) {
            state.searchEngine.selectedClient = payload;
        },
        setGeneratedBills(state, payload) {
            state.generatedBills.push(payload)
        }
    },
    actions: {
        uploadTableDate({ commit }, payload) {
            //...
        },
        generateSearch({ commit, dispatch }, payload) {
            //...
        }
    }
};