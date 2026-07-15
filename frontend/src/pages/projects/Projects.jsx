import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import DashboardLayout from "../../components/layout/DashboardLayout";
import ProjectForm from "../../components/project/ProjectForm";

import {
    getProjects,
    createProject,
} from "../../services/projectService";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await getProjects();

            setProjects(response.projects || []);

        } catch (error) {

            console.error(error);

            toast.error("Failed to load projects");

        } finally {

            setLoading(false);

        }
    };

    const handleCreateProject = async (data) => {

        try {

            await createProject(data);

            toast.success("Project Created!");

            setShowModal(false);

            fetchProjects();

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to create project"
            );

        }

    };

    return (

        <DashboardLayout>

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-3xl font-bold">
                    Projects
                </h1>

                <button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"
                >
                    + New Project
                </button>

            </div>

            <input
                type="text"
                placeholder="Search projects..."
                className="w-full border rounded-xl p-3 mb-6 outline-none focus:ring-2 focus:ring-blue-300"
            />

            {loading ? (

                <div className="bg-white rounded-xl shadow p-8 text-center">
                    Loading...
                </div>

            ) : projects.length === 0 ? (

                <div className="bg-white rounded-xl shadow p-8 text-center text-slate-500">
                    No projects found.
                </div>

            ) : (

                <div className="space-y-4">

                    {projects.map((project) => (

                        <div
                            key={project._id}
                            className="bg-white rounded-xl shadow p-6 flex justify-between items-center"
                        >

                            <div>

                                <h2 className="text-xl font-semibold">
                                    {project.title}
                                </h2>

                                <p className="text-slate-500 mt-1">
                                    {project.description}
                                </p>

                            </div>

                            <div className="flex gap-3">

                                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
                                    Edit
                                </button>

                                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                                    Delete
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            )}

            {showModal && (
                <ProjectForm
                    onSubmit={handleCreateProject}
                    onCancel={() => setShowModal(false)}
                />
            )}

        </DashboardLayout>

    );
}

export default Projects;