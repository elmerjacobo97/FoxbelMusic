import axios from "axios";

export const deezerApi = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
});
