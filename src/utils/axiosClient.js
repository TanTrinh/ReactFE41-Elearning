import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://elearning0706.cybersoft.edu.vn/api/',
});

export const setToken = (token) => {
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

axiosClient.interceptors.request.use((config) => {
    const userInfo = localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo"));

    config.headers.Authorization = `Bearer ${userInfo.accessToken}`;

    return config;
})

export default axiosClient;