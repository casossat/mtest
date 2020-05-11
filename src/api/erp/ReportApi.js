import { CONFIG } from "@/app-config";
import axios from 'axios';

class ReportApi {
    getBills() {
        return axios.get(CONFIG.ENDPOINT.GETBILLS);
    }
    getClients() {
        //return axios.get(CONFIG.ENDPOINT.GET_CLIENTS);
        //...
    }
}

export const reportApi = new ReportApi();