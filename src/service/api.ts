import axios from "axios";

export const commonAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
