import { FaTrash, FaEdit } from "react-icons/fa";
function TaskCard({
    task,
    onEdit,
    onDelete,
}) {

    const statusColor = {
        "Todo": "bg-yellow-100 text-yellow-700",
        "In Progress": "bg-blue-100 text-blue-700",
        "Done": "bg-green-100 text-green-700",
    };

    return (

        <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center hover:shadow-lg transition">

            <div className="flex-1">

                <h2 className="text-xl font-semibold text-slate-800">
                    {task.title}
                </h2>

                <p className="text-slate-500 mt-2">
                    {task.description || "No description provided."}
                </p>

                <div className="mt-3 flex flex-wrap gap-2 text-sm">

                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                        📁 {task.project?.title}
                    </span>

                    <span
                        className={`px-3 py-1 rounded-full font-medium ${statusColor[task.status]}`}
                    >
                        {task.status}
                    </span>

                </div>

            </div>

            <div className="flex gap-3 ml-6">

                <button
    type="button"
    onClick={() => onEdit(task)}
    className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
>
    <FaEdit size={14} />
    Edit
</button>

<button
    type="button"
    onClick={() => onDelete(task)}
    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
>
    <FaTrash size={14} />
    Delete
</button>

            </div>

        </div>

    );
}

export default TaskCard;