import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://badbank-application.herokuapp.com/api/",
})