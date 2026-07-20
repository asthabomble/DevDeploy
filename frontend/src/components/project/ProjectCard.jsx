import { useNavigate } from "react-router-dom";

function ProjectCard({
    project,
    onEdit,
    onDelete,
}) {

    const navigate = useNavigate();

    return (

        <div
            onClick={() => navigate(`/projects/${project._id}`)}
            className="bg-white rounded-xl shadow p-6 flex justify-between items-center cursor-pointer hover:shadow-lg transition"
        >

            <div>

                <h2 className="text-xl font-semibold">
                    {project.title}
                </h2>

                <p className="text-slate-500 mt-1">
                    {project.description || "No description provided."}
                </p>

            </div>

            <div className="flex gap-3">

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onEdit(project);
                    }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                >
                    Edit
                </button>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(project);
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                    Delete
                </button>

            </div>

        </div>

    );

}

export default ProjectCard;