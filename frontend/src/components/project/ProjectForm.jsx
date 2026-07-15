import { useState } from "react";

function ProjectForm({ onSubmit, onCancel }) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });

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
                    Create Project
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <div>

                        <label className="font-medium">
                            Project Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter project title"
                            className="w-full border rounded-xl p-3 mt-2"
                            required
                        />

                    </div>

                    <div>

                        <label className="font-medium">
                            Description
                        </label>

                        <textarea
                            rows="4"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter description"
                            className="w-full border rounded-xl p-3 mt-2"
                        />

                    </div>

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
                            Create Project
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default ProjectForm;