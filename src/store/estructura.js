store = {
    modules: {
        session: {
            user: {
                username: null,
                firstName: null,
                lastName: null,
                email: null,
                roles: []   //opcional
            },
            rememberuser: false,
            tokenSession: null
        },
        dashboard: {
            summaryProducts: {
                sms: null,
                email: null,
                voice: null,
                automation: null,
                filebuilder: null,
                sherlock: null
            },
            summaryChart: {
                flowName: null,
                options: {},
                apiFields: [],
                data: {
                    sms: [],
                    email: [],
                    voice: [],
                    automation: [],
                    filebuilder: [],
                    sherlock: [],
                    datesRange: {
                        dateIni: null,
                        dateEnd: null
                    }
                }
            }
        },
        report: {
            searchEngine: {
                selectedClient: null,
                datesRange: {
                    dateIni: null,
                    dateEnd: null
                },
                btnSearchDisabled: false,
                btnParcialDisabled: false
            },
            generatedBills: [
                {
                    client: {},
                    datesRange: {
                        dateIni: null,
                        dateEnd: null,
                    },
                    counts: [
                        {
                            name: '',
                            totalConsumption: 0,
                            products: [
                                {
                                    name: '',
                                    consumption: 0,
                                    //...
                                }
                            ]
                        }
                    ]
                }
                //...
            ],
            table: {
                dataTableSearchTxt: null,
                options: {
                    dateIni: null,
                    dateEnd: null,
                    sortOrder: null,
                    pageSize: null,
                    state: null,
                    pageNumber,
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
        clients: {
            contacts: {},
            paymentConfiguration: {
                id: '',
                paymentMethod: '',
                currency: '',
                paymentTerm: 0
            }
        },
        invoices: {

        },
        collector: {

        },
        consolidator: {

        }
    }
}