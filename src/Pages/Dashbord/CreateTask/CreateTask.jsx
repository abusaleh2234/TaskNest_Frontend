import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxios from "../../../Hook/useAxios";
import toast from "react-hot-toast";

const CreateTask = () => {
    const {user} = useContext(AuthContext)
    const axiosPb = useAxios()
    const { register, handleSubmit,reset } = useForm()

    const onSubmit = (data) => {
        console.log(data)

        const taskInfo = {
            title: data.title,
            priority: data.priority,
            deadline: data.deadline,
            description: data.description,
            email: user?.email,
            status: "to-do"
        }

        axiosPb.post("/addtask",taskInfo)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                toast.success('Successfully toasted!')
                reset()
            }
        })


    }
    return (
        <div className="">
            <div className="bg-sky-100 md:w-10/12 mx-auto py-8 rounded-xl">
                <h1 className="text-center text-4xl font-bold pb-5">Creat New Task</h1>
                <div className="md:w-8/12 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Title</label>
                            <input type="text" {...register("title")} className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Task title" required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority</label>
                                <select {...register("priority")} className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
                                    <option value="high">High</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="low">Low</option>
                                </select>
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deadline</label>
                                <input type="date" {...register("deadline")} className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea rows="4" {...register("description")} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write task description"></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="w-2/4 btn text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2">Creat</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateTask;