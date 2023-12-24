import axios from "axios";


const axiosPb = axios.create({
    baseURL: "http://localhost:5000/"
})
const useAxios = () => {

    return axiosPb
};

export default useAxios;