

const TaskCard = ({task}) => {
    return (
        <div className="bg-slate-200 p-2">
            <h4>{task.title}</h4>
            <div className="flex justify-between">
                <p>{task.priority}</p>
                <p>{task.deadline}</p>
            </div>
        </div>
    );
};

export default TaskCard;