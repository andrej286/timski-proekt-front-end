import axios, {AxiosRequestConfig} from "axios";
import TokenService from "./auth/token-service";

export const api = axios.create({
    baseURL: "https://tp.sekuloski.mk:8443/",
    // baseURL: "http://localhost:8000/",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export const fileApi = axios.create({
    baseURL: "https://tp.sekuloski.mk:8443/",
    // baseURL: "http://localhost:8000/",
    headers: {
        "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
});

export function refreshToken(originalRequest: AxiosRequestConfig) {
    if (originalRequest.url !== "/customer/login/" && originalRequest.data) {
        api.post('/customer/login/refresh/', {
            refresh: TokenService.getLocalRefreshToken(),
        })
        .then((response) => {
           const newAccessToken = response.data.access;
            TokenService.updateLocalAccessToken(newAccessToken);
        });
    }
}