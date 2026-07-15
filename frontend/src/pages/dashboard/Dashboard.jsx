import DashboardLayout from "../../components/layout/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import { useAuth } from "../../context/AuthContext";

function Dashboard() {

    const { user } = useAuth();

    return (
        <DashboardLayout>

            <h1 className="text-3xl font-bold">
                Dashboard
            </h1>

            <p className="text-slate-500 mt-2">
                Welcome back, {user?.name} 👋
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

                <StatCard
                    title="Projects"
                    value="0"
                    color="text-blue-600"
                />

                <StatCard
                    title="Tasks"
                    value="0"
                    color="text-green-600"
                />

                <StatCard
                    title="To Do"
                    value="0"
                    color="text-yellow-500"
                />

                <StatCard
                    title="Done"
                    value="0"
                    color="text-purple-600"
                />

            </div>

        </DashboardLayout>
    );
}

export default Dashboard;