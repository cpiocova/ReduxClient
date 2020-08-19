import axios from "axios";

const clienteAxios = axios.create({
	baseURL: "https://reduxcrud.herokuapp.com/",
});

export default clienteAxios;
