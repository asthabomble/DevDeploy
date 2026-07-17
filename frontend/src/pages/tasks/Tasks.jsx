import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import DashboardLayout from "../../components/layout/DashboardLayout";
import TaskCard from "../../components/task/TaskCard";
import TaskForm from "../../components/task/TaskForm";
import DeleteTaskModal from "../../components/task/DeleteTaskModal";

import {
    getTasks,
    createTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
} from "../../services/taskService";

import { getProjects } from "../../services/projectService";

function Tasks() {

    const [tasks, setTasks] = useState([]);
    const [projects, setProjects] = useState([]);

    const [loading, setLoading] = useState(true);

    const [showModal, setShowModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const [selectedTask, setSelectedTask] = useState(null);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        fetchTasks();
        fetchProjects();
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

    const fetchProjects = async () => {

        try {

            const response = await getProjects();

            setProjects(response.projects || []);

        } catch (error) {

            console.error(error);

            toast.error("Failed to load projects");

        }

    };

    const handleCreateTask = async (data) => {

        try {

            await createTask(data);

            toast.success("Task Created!");

            setShowModal(false);

            fetchTasks();

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to create task"
            );

        }

    };

    const handleUpdateTask = async (data) => {

        try {

            await updateTask(selectedTask._id, data);

            toast.success("Task Updated!");

            setShowModal(false);
            setSelectedTask(null);
            setIsEdit(false);

            fetchTasks();

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to update task"
            );

        }

    };

    const handleDeleteTask = async () => {

        try {

            await deleteTask(selectedTask._id);

            toast.success("Task Deleted!");

            setDeleteModal(false);
            setSelectedTask(null);

            fetchTasks();

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to delete task"
            );

        }

    };

    const handleStatusChange = async (task, status) => {

        try {

            await updateTaskStatus(task._id, status);

            toast.success("Task status updated!");

            fetchTasks();

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to update status"
            );

        }

    };

    return (

        <DashboardLayout>

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-3xl font-bold">
                    Tasks
                </h1>

                <button
                    onClick={() => {
                        setSelectedTask(null);
                        setIsEdit(false);
                        setShowModal(true);
                    }}
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
                            onEdit={(task) => {
                                setSelectedTask(task);
                                setIsEdit(true);
                                setShowModal(true);
                            }}
                            onDelete={(task) => {
                                setSelectedTask(task);
                                setDeleteModal(true);
                            }}
                            onStatusChange={handleStatusChange}
                        />

                    ))}

                </div>

            )}

            {deleteModal && (

                <DeleteTaskModal
                    onConfirm={handleDeleteTask}
                    onCancel={() => {
                        setDeleteModal(false);
                        setSelectedTask(null);
                    }}
                />

            )}

            {showModal && (

                <TaskForm
                    initialData={selectedTask}
                    projects={projects}
                    isEdit={isEdit}
                    onSubmit={
                        isEdit
                            ? handleUpdateTask
                            : handleCreateTask
                    }
                    onCancel={() => {
                        setShowModal(false);
                        setSelectedTask(null);
                        setIsEdit(false);
                    }}
                />

            )}

        </DashboardLayout>

    );
}

export default Tasks;