import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://pmarsh-api.onrender.com/api'
});

export default axiosInstance;