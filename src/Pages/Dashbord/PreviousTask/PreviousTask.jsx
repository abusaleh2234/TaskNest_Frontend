import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hook/useAxios";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import TaskCard from "../../../Component/TaskCard/TaskCard";

const PreviousTask = () => {

    const section = [{ id: 1, title: "To-do", bg: "bg-sky-400" }, { id: 2, title: "Ongoing", bg: "bg-fuchsia-400" }, { id: 3, title: "Completed", bg: "bg-indigo-500" }]
    const axiosPb = useAxios()
    console.log(section);
    const { data: tasks = [] } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const allTask = axiosPb.get("/tasks")
            return allTask;
        }
    })
    console.log(tasks);

    const onDragEnd = result => {
        console.log(result);
        if(!result.destination){
            return
        }
        const {source, destination} = result;
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-3 grid-flow-row gap-4 pt-4">
                {
                    section.map(taskState => (
                        <Droppable
                            key={taskState.id}
                            droppableId={taskState.title}
                        >
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className=""
                                >
                                    <div className={`${taskState.bg} p-3 rounded-lg`}>
                                        <h3 className="text-2xl font-bold text-center">{taskState.title}</h3>
                                        <div className="">
                                            {
                                                tasks.data?.map((task, index) => (
                                                    <Draggable
                                                        key={task._id}
                                                        draggableId={task.title}
                                                        index={index}
                                                    >
                                                        {(provided, snapshot) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={{
                                                                    ...provided.draggableProps.style,
                                                                    opacity: snapshot.isDragging ? "0.5" : "1"
                                                                }}
                                                                className="p-2"
                                                            >
                                                                <TaskCard task={task}></TaskCard>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))
                                            }
                                            {provided.placeholder}
                                        </div>
                                    </div>

                                </div>
                            )}
                        </Droppable>
                    ))
                }
            </div>
        </DragDropContext>
        // <div>

        //     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        //         <div className="bg-sky-400 p-3 rounded-lg">
        //             <h3 className="text-2xl font-bold text-center">To-Do</h3>
        //             <div className="">
        //                 {

        //                 }
        //             </div>
        //         </div>
        //         <div className="bg-fuchsia-400 p-3 rounded-lg">
        //             <h3 className="text-2xl font-bold text-center">To-Do</h3>
        //             <div className="">

        //             </div>
        //         </div>
        //         <div className="bg-indigo-500  p-3 rounded-lg">
        //             <h3 className="text-2xl font-bold text-center">To-Do</h3>
        //             <div className="">

        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default PreviousTask;

{/* <h1 className="text-4xl font-bold text-center"> Previous Task</h1> */ }