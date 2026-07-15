import {
    FaHome,
    FaFolderOpen,
    FaTasks,
    FaUser,
    FaSignOutAlt,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Sidebar() {
    const navigate = useNavigate();
    const { logout, user } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const navLinkClass = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
            isActive
                ? "bg-blue-600 text-white"
                : "text-slate-600 hover:bg-slate-100"
        }`;

    return (
        <aside className="w-64 min-h-screen bg-white border-r shadow-sm flex flex-col justify-between">

            <div>

                <div className="p-6 border-b">

                    <h1 className="text-2xl font-bold text-blue-600">
                        DevDeploy
                    </h1>

                    <p className="text-sm text-slate-500 mt-1">
                        {user?.name}
                    </p>

                </div>

                <nav className="p-4 space-y-2">

                    <NavLink
                        to="/dashboard"
                        className={navLinkClass}
                    >
                        <FaHome />
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/projects"
                        className={navLinkClass}
                    >
                        <FaFolderOpen />
                        Projects
                    </NavLink>

                    <NavLink
                        to="/tasks"
                        className={navLinkClass}
                    >
                        <FaTasks />
                        Tasks
                    </NavLink>

                    <NavLink
                        to="/profile"
                        className={navLinkClass}
                    >
                        <FaUser />
                        Profile
                    </NavLink>

                </nav>

            </div>

            <div className="p-4 border-t">

                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition"
                >
                    <FaSignOutAlt />
                    Logout
                </button>

            </div>

        </aside>
    );
}

export default Sidebar;