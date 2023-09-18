import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8000/",
    // baseURL: "http://sekuloski.mk:27015",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default instance;