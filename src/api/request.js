import axios from "axios";

const request = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {},
});

request.interceptors.request.use(
    config => {
        console.log(config);
        // config.url = import.meta.env.VITE_API_URL + config.url;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
request.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

export default request;
