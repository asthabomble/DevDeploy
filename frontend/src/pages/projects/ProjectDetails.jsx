import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import DashboardLayout from "../../components/layout/DashboardLayout";
import { getProjectById } from "../../services/projectService";

function ProjectDetails() {

    const { projectId } = useParams();

    const [project, setProject] = useState(null);
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProject();
    }, []);

    const fetchProject = async () => {

        try {

            const response = await getProjectById(projectId);

            setProject(response.project);
            setStats(response.stats);

        } catch (error) {

            console.error(error);

            toast.error("Failed to load project.");

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (
            <DashboardLayout>
                <div className="bg-white rounded-xl shadow p-8 text-center">
                    Loading...
                </div>
            </DashboardLayout>
        );

    }

    if (!project) {

        return (
            <DashboardLayout>
                <div className="bg-white rounded-xl shadow p-8 text-center">
                    Project not found.
                </div>
            </DashboardLayout>
        );

    }

    return (

        <DashboardLayout>

            <div className="space-y-6">

                {/* Project Information */}

                <div className="bg-white rounded-xl shadow p-6">

                    <h1 className="text-3xl font-bold text-slate-800">
                        {project.title}
                    </h1>

                    <p className="text-slate-500 mt-3">
                        {project.description || "No description provided."}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

                        <div>

                            <h3 className="font-semibold text-slate-700">
                                Owner
                            </h3>

                            <p className="text-slate-600 mt-1">
                                {project.owner?.name}
                            </p>

                            <p className="text-sm text-slate-500">
                                {project.owner?.email}
                            </p>

                        </div>

                        <div>

                            <h3 className="font-semibold text-slate-700">
                                Team Members
                            </h3>

                            <p className="text-slate-600 mt-1">
                                {project.members?.length} Members
                            </p>

                        </div>

                    </div>

                </div>

                {/* Task Statistics */}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                    <div className="bg-white rounded-xl shadow p-6 text-center">

                        <h3 className="text-slate-500">
                            Total Tasks
                        </h3>

                        <p className="text-3xl font-bold mt-2">
                            {stats.totalTasks}
                        </p>

                    </div>

                    <div className="bg-yellow-50 rounded-xl shadow p-6 text-center">

                        <h3 className="text-yellow-700">
                            Todo
                        </h3>

                        <p className="text-3xl font-bold mt-2">
                            {stats.todo}
                        </p>

                    </div>

                    <div className="bg-blue-50 rounded-xl shadow p-6 text-center">

                        <h3 className="text-blue-700">
                            In Progress
                        </h3>

                        <p className="text-3xl font-bold mt-2">
                            {stats.inProgress}
                        </p>

                    </div>

                    <div className="bg-green-50 rounded-xl shadow p-6 text-center">

                        <h3 className="text-green-700">
                            Done
                        </h3>

                        <p className="text-3xl font-bold mt-2">
                            {stats.done}
                        </p>

                    </div>

                </div>

                {/* Members List */}

                <div className="bg-white rounded-xl shadow p-6">

                    <h2 className="text-xl font-semibold mb-4">
                        Project Members
                    </h2>

                    <div className="space-y-3">

                        {project.members.map((member) => (

                            <div
                                key={member._id}
                                className="flex justify-between items-center border rounded-xl p-4"
                            >

                                <div>

                                    <h3 className="font-semibold">
                                        {member.name}
                                    </h3>

                                    <p className="text-sm text-slate-500">
                                        {member.email}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default ProjectDetails;