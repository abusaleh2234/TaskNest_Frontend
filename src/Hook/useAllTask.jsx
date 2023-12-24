import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllTask = () => {
    const axiosPb = useAxios()
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const allTask = axiosPb.get("/tasks")
            return allTask;
        }
    })
    return [tasks,refetch]
};

export default useAllTask;