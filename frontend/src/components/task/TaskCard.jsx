function TaskCard({ task }) {

    const statusColor = {
        "Todo": "bg-yellow-100 text-yellow-700",
        "In Progress": "bg-blue-100 text-blue-700",
        "Done": "bg-green-100 text-green-700",
    };

    return (
        <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center">

            <div>

                <h2 className="text-xl font-semibold">
                    {task.title}
                </h2>

                <p className="text-slate-500 mt-1">
                    {task.description}
                </p>

                <p className="text-sm text-slate-400 mt-3">
                    Project: {task.project?.title}
                </p>

            </div>

            <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${statusColor[task.status]}`}
            >
                {task.status}
            </span>

        </div>
    );
}

export default TaskCard;