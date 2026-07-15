import { FaBell, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
    const { user } = useAuth();

    return (
        <header className="h-20 bg-white border-b shadow-sm flex items-center justify-between px-8">

            <div>

                <h1 className="text-2xl font-bold text-slate-800">
                    Dashboard
                </h1>

                <p className="text-sm text-slate-500 mt-1">
                    Welcome back, {user?.name}
                </p>

            </div>

            <div className="flex items-center gap-6">

                <button className="relative text-slate-600 hover:text-blue-600 transition">

                    <FaBell size={22} />

                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>

                </button>

                <div className="flex items-center gap-3">

                    <FaUserCircle
                        size={42}
                        className="text-blue-600"
                    />

                    <div>

                        <p className="font-semibold text-slate-800">
                            {user?.name}
                        </p>

                        <p className="text-sm text-slate-500">
                            {user?.email}
                        </p>

                    </div>

                </div>

            </div>

        </header>
    );
}

export default Navbar;