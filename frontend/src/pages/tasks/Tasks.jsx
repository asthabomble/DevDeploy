import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import DashboardLayout from "../../components/layout/DashboardLayout";
import TaskCard from "../../components/task/TaskCard";

import { getTasks } from "../../services/taskService";

function Tasks() {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {

        setLoading(true);

        try {

            const response = await getTasks();

            setTasks(response.tasks || []);

        } catch (error) {

            console.error(error);

            toast.error("Failed to load tasks");

        } finally {

            setLoading(false);

        }

    };

    return (

        <DashboardLayout>

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-3xl font-bold">
                    Tasks
                </h1>

                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"
                >
                    + New Task
                </button>

            </div>

            <input
                type="text"
                placeholder="Search tasks..."
                className="w-full border rounded-xl p-3 mb-6 outline-none focus:ring-2 focus:ring-blue-300"
            />

            {loading ? (

                <div className="bg-white rounded-xl shadow p-8 text-center">
                    Loading...
                </div>

            ) : tasks.length === 0 ? (

                <div className="bg-white rounded-xl shadow p-8 text-center text-slate-500">
                    No tasks found.
                </div>

            ) : (

                <div className="space-y-4">

                    {tasks.map((task) => (

                        <TaskCard
                            key={task._id}
                            task={task}
                        />

                    ))}

                </div>

            )}

        </DashboardLayout>

    );
}

export default Tasks;