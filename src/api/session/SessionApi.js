import { CONFIG } from "@/app-config";
import axios from 'axios';

class SessionApi {
    loginUser(data) {
        //return axios.post(CONFIG.ENDPOINT.LOGIN_USER, data);
        return axios.get(CONFIG.ENDPOINT.LOGIN_USER);
    }
    restore_password(data) {
        //...
    }
    reset_password(data) {
        //...
    }
}

export const sessionApi = new SessionApi();