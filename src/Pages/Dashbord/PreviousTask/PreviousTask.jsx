import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hook/useAxios";
import TaskCard from "../../../Component/TaskCard/TaskCard";
import { Link } from "react-router-dom";
import useAllTask from "../../../Hook/useAllTask";

const PreviousTask = () => {

    const section = [{ id: 1, title: "To-do", bg: "bg-sky-400" }, { id: 2, title: "Ongoing", bg: "bg-fuchsia-400" }, { id: 3, title: "Completed", bg: "bg-indigo-500" }]
    const axiosPb = useAxios()
    console.log(section);
    const [tasks] = useAllTask()
    console.log(tasks);
    const { data: Todotasks = [] ,refetch} = useQuery({
        queryKey: ["todotask"],
        queryFn: async () => {
            const todoTask = axiosPb.get("/todotask")
            return todoTask;
        }
    })
    const { data: OnGoingtasks = [] , refetch: onrefetch} = useQuery({
        queryKey: ["OnGoingtask"],
        queryFn: async () => {
            const onGoingTask = axiosPb.get("/ongingtask")
            return onGoingTask;
        }
    })
    const { data: Completedtasks = [] , refetch: coprefetch} = useQuery({
        queryKey: ["completedtask"],
        queryFn: async () => {
            const completedtask = axiosPb.get("/completedtask")
            return completedtask;
        }
    })
    console.log(OnGoingtasks);

    return (
        <div>
            <h1 className="text-4xl font-bold text-center "> Previous Task</h1>
            <div className="flex justify-between items-center">
                <p className="text-lg font-medium">Total Task: {tasks?.data?.length}</p>
                <Link to={"/dashbord/creattask"} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add Task</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="bg-sky-400 p-3 rounded-lg">
                    <h3 className="text-2xl font-bold text-center pb-2">To-Do</h3>
                    <div className="space-y-3">
                        {
                            Todotasks.data?.map(task => <TaskCard key={task._id} task={task} refetch={refetch} onrefetch={onrefetch}></TaskCard>)
                        }
                    </div>
                </div>
                <div className="bg-fuchsia-400 p-3 rounded-lg">
                    <h3 className="text-2xl font-bold text-center pb-2">Ongoing</h3>
                    <div className="space-y-3">
                        {
                            OnGoingtasks.data?.map(task => <TaskCard key={task._id} task={task} refetch={onrefetch} coprefetch={coprefetch}></TaskCard>)
                        }
                    </div>
                </div>
                <div className="bg-indigo-500  p-3 rounded-lg">
                    <h3 className="text-2xl font-bold text-center pb-2">Completed</h3>
                    <div className="space-y-3">
                        {
                            Completedtasks.data?.map(task => <TaskCard key={task._id} task={task} refetch={refetch}></TaskCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviousTask;

