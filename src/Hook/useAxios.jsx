import axios from "axios";


const axiosPb = axios.create({
    baseURL: "https://task-nest-backend.vercel.app"
})
const useAxios = () => {

    return axiosPb
};

export default useAxios;