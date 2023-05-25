import axios from "axios";

const token = process.env.OPENAI_API_KEY;
const backendURL = process.env.BACKEND_URL;

console.log("token", token);
console.log("backendURL", backendURL);

export const backendApi = axios.create({
  baseURL: backendURL,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  },
});
