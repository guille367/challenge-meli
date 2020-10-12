import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_API_MELI_URL,
  headers: {
    "x-author-name": process.env.REACT_APP_AUTHOR_NAME,
    "x-author-lastname": process.env.REACT_APP_AUTHOR_LASTNAME,
  },
});

export default axiosInstance;
