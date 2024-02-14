import axios from "axios";

const instance = axios.create({
	baseURL: "https://rest-api-70gp.onrender.com",
});

export default instance;
