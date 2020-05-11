const PATH = {
    LOCAL: "http://localhost:8080/",
};

export const CONFIG = {
    ENDPOINT: {
        LOGIN_USER: "http://localhost:8080/json/session.json",
        GETBILLS: "http://localhost:8080/json/report.json"
    },
    MENU: [{
            name: "DASHBOARD",
            url: "/MasivianErp/Dashboard",
            icon: "home"
        },
        {
            name: "FACTURACION",
            url: "/MasivianErp/Report",
            icon: "code-sandbox",
        }
    ]
};