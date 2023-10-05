import axios, {AxiosRequestConfig} from "axios";
import TokenService from "./auth/token-service";

export const api = axios.create({
    baseURL: "http://localhost:8000/",
    // baseURL: "http://sekuloski.mk:27015",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export const fileApi = axios.create({
    baseURL: "http://localhost:8000/",
    // baseURL: "http://sekuloski.mk:27015",
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