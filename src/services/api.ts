import axios from "axios";

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