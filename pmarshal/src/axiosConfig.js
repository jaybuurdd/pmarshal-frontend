import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://pmarshal-backend.vercel.app/api'
});

export default axiosInstance;