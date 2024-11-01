import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:5050"
})

http.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error('Token muddati tugagan yoki noto‘g‘ri.');
        }
        return Promise.reject(error);
    }
);



export { http };