import { CONFIG } from "@/app-config";
import axios from 'axios';

class DashboardApi {
    getBills() {
        //return axios.get(CONFIG.ENDPOINT.GET_BILLS);
        //...
    }
    getClients() {
        //return axios.get(CONFIG.ENDPOINT.GET_CLIENTS);
        //...
    }
}

export const dashboardApi = new DashboardApi();