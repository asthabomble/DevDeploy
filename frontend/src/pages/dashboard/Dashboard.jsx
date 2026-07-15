import { useAuth } from "../../context/AuthContext";

function Dashboard() {
    const { user } = useAuth();

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold">
                Dashboard
            </h1>

            <p className="mt-5">
                Welcome, {user?.name}
            </p>

            <p>
                Email: {user?.email}
            </p>
        </div>
    );
}

export default Dashboard;