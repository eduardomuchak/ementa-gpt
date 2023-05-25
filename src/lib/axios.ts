import axios from "axios";

const token = process.env.OPENAI_API_KEY;

export const backendApi = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  },
});
