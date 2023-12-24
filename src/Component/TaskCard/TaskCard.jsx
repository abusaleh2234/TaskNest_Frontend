import Swal from "sweetalert2";
import useAxios from "../../Hook/useAxios";
import Taskdelete from "../TaskDelete/Taskdelete";


const TaskCard = ({ task, refetch , onrefetch, coprefetch}) => {

    const axiosPb = useAxios()

    const hendelDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPb.delete(`/deletetask/${task._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                            coprefetch()
                            onrefetch()
                        }
                    })

            }
        });
    }
    const hendelAddOngoingUpdate = () => {
        axiosPb.put(`/addongoing/${task._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Add Ongoing Success!",
                        icon: "success"
                      });
                    refetch()
                    onrefetch()
                    
                }
            })
    }
    const hendelCompletgUpdate = () => {
        axiosPb.put(`/addcomplete/${task._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Add Ongoing Success!",
                        icon: "success"
                      });
                    refetch()
                    coprefetch()
                }
            })
    }
    return (
        <div className="bg-slate-200 p-2 space-y-1 rounded-lg">
            <div className="flex justify-between gap-2">
                <h4 className="text-lg font-medium">{task.title}</h4>
                <Taskdelete hendelDelete={hendelDelete}></Taskdelete>
            </div>
            <div className="flex justify-between ">
                <p>{task.priority}</p>
                <p>{task.deadline}</p>
            </div>
            <div className="">
                {
                    task.status === "to-do" && 
                <button onClick={hendelAddOngoingUpdate} className="btn btn-outline btn-info btn-sm">Add ongoing</button>
                }
                {
                  task.status === "Ongoing" &&   <button onClick={hendelCompletgUpdate} className="btn btn-outline btn-info btn-sm">Add Completed</button>
                }
            </div>
        </div>
    );
};

export default TaskCard;