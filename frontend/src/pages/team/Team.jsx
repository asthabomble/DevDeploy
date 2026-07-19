import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import DashboardLayout from "../../components/layout/DashboardLayout";
import AddMemberForm from "../../components/team/AddMemberForm";
import MemberCard from "../../components/team/MemberCard";

import { getProjects } from "../../services/projectService";
import {
    getMembers,
    addMember,
    removeMember,
} from "../../services/teamService";

function Team() {

    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState("");
    const [members, setMembers] = useState([]);
    const [loadingMembers, setLoadingMembers] = useState(false);

    useEffect(() => {
        fetchProjects();
    }, []);

    useEffect(() => {

        if (selectedProject) {
            fetchMembers(selectedProject);
        }

    }, [selectedProject]);

    const fetchProjects = async () => {

        try {

            const response = await getProjects();

            setProjects(response.projects || []);

            if (response.projects?.length > 0) {
                setSelectedProject(response.projects[0]._id);
            }

        } catch (error) {

            console.error(error);

            toast.error("Failed to load projects");

        }

    };

    const fetchMembers = async (projectId) => {

        setLoadingMembers(true);

        try {

            const response = await getMembers(projectId);

            setMembers(response.members || []);

        } catch (error) {

            console.error(error);

            toast.error("Failed to load members");

        } finally {

            setLoadingMembers(false);

        }

    };

    const handleAddMember = async (email) => {

        try {

            await addMember(selectedProject, email);

            toast.success("Member added successfully!");

            fetchMembers(selectedProject);

        } catch (error) {

            console.error(error);

            toast.error(
                error.response?.data?.message ||
                "Failed to add member"
            );

        }

    };

    const handleRemoveMember = async (member) => {

        try {

            await removeMember(
                selectedProject,
                member._id
            );

            toast.success("Member removed!");

            fetchMembers(selectedProject);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to remove member"
            );

        }

    };

    return (

        <DashboardLayout>

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-3xl font-bold">
                    Team Collaboration
                </h1>

            </div>

            {/* Project Selector */}

            <div className="bg-white rounded-xl shadow p-6">

                <label className="block font-medium mb-2">
                    Select Project
                </label>

                <select
                    value={selectedProject}
                    onChange={(e) => setSelectedProject(e.target.value)}
                    className="w-full border rounded-xl p-3"
                >

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

            {/* Add Member */}

            <div className="bg-white rounded-xl shadow p-6 mt-6">

                <AddMemberForm
                    onSubmit={handleAddMember}
                />

            </div>

            {/* Members */}

            <div className="bg-white rounded-xl shadow p-6 mt-6">

                <h2 className="text-xl font-semibold mb-5">
                    Team Members
                </h2>

                {loadingMembers ? (

                    <p>Loading...</p>

                ) : members.length === 0 ? (

                    <p className="text-slate-500">
                        No members found.
                    </p>

                ) : (

                    <div className="space-y-4">

                        {members.map((member) => (

                            <MemberCard
                                key={member._id}
                                member={member}
                                onRemove={handleRemoveMember}
                            />

                        ))}

                    </div>

                )}

            </div>

        </DashboardLayout>

    );

}

export default Team;