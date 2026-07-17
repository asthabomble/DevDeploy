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
        }
    }, [initialData]);

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
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8">

                <h2 className="text-2xl font-bold mb-6">
                    {isEdit ? "Edit Task" : "Create Task"}
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <input
                        type="text"
                        name="title"
                        placeholder="Task Title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3"
                        required
                    />

                    <textarea
                        rows="4"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3"
                    />

                    <select
                        name="projectId"
                        value={formData.projectId}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3"
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

                    <div className="flex justify-end gap-3">

                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-5 py-3 rounded-xl border"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                        >
                            {isEdit ? "Update Task" : "Create Task"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default TaskForm;