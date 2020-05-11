import axios, { AxiosError, AxiosResponse } from "axios";
import router from "@/router";

const axiosInstance = axios.create();

axiosInstance.
interceptors.
request.
use(
    (config) => {
        if (window.localStorage.getItem("_token"))
            config.headers.Authorization = "Bearer " + window.localStorage.getItem("_token");
        return config;
    }, (err) => {
        return Promise.reject(err);
    }
);

axiosInstance.
interceptors.
response.
use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            router.push("login");
            return Promise.reject(error);
        }
    }
);

export default axiosInstance;