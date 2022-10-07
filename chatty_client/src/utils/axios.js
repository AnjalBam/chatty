import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  timeout: 1000,
});

axiosInstance.interceptors.response.use(
  function (response) {
    console.log("response received.");
    return response;
  },
  function (err) {
    console.log("err received");
    if (err.response?.status === 401) {
      localStorage.removeItem('token');
    }
    return err;
  }
);

export default axiosInstance;
