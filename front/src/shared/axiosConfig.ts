import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: process.env.API_MELI_URL,
  headers: {
    "x-author-name": process.env.AUTHOR_NAME,
    "x-author-lastname": process.env.AUTHOR_LASTNAME,
  },
});

export default axiosInstance;
