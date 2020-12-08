import ApiClient from "./apiClient";
import "bootstrap/dist/css/bootstrap.min.css";

const apiClient = new ApiClient({
    baseUrl: "https://ad-assignment-one.ey.r.appspot.com",
});

export default apiClient;