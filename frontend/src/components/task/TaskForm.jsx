import { useEffect, useState } from "react";

function TaskForm({
    initialData,
    projects,
    onSubmit,
    onCancel,
    isEdit,
}) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        projectId: "",
    });

    useEffect(() => {

        if (initialData) {

            setFormData({
                title: initialData.title,
                description: initialData.description,
                projectId: initialData.project._id,
            });

        } else {

            setFormData({
                title: "",
                description: "",
                projectId:
                    projects.length > 0 ? projects[0]._id : "",
            });

        }

    }, [initialData, projects]);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit(formData);

    };

    return (

        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8">

                <h2 className="text-2xl font-bold text-slate-800 mb-6">
                    {isEdit ? "Edit Task" : "Create Task"}
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <div>

                        <label className="block font-medium text-slate-700 mb-2">
                            Task Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            placeholder="Enter task title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600"
                            required
                        />

                    </div>

                    <div>

                        <label className="block font-medium text-slate-700 mb-2">
                            Description
                        </label>

                        <textarea
                            rows="4"
                            name="description"
                            placeholder="Enter task description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 outline-none resize-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600"
                        />

                    </div>

                    <div>

                        <label className="block font-medium text-slate-700 mb-2">
                            Project
                        </label>

                        <select
                            name="projectId"
                            value={formData.projectId}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600"
                            required
                        >

                            <option value="">
                                Select Project
                            </option>

                            {projects.map((project) => (

                                <option
                                    key={project._id}
                                    value={project._id}
                                >
                                    {project.title}
                                </option>

                            ))}

                        </select>

                    </div>

                    <div className="flex justify-end gap-3 pt-2">

                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-5 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 transition"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            {isEdit
                                ? "Update Task"
                                : "Create Task"}
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );
}

export default TaskForm;