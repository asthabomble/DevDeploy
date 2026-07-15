import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import DashboardLayout from "../../components/layout/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import { useAuth } from "../../context/AuthContext";
import { getDashboardStats } from "../../services/dashboardService";

function Dashboard() {
    const { user } = useAuth();

    const [stats, setStats] = useState({
        totalProjects: 0,
        totalTasks: 0,
        todo: 0,
        done: 0,
    });

    
    useEffect(() => {
    const fetchDashboard = async () => {
        try {
            const response = await getDashboardStats();

            setStats({
                totalProjects: response.dashboard.totalProjects,
                totalTasks: response.dashboard.totalTasks,
                todo: response.dashboard.todo,
                inProgress: response.dashboard.inProgress,
                done: response.dashboard.done,
            });

        } catch (error) {
            console.error(error);
            toast.error("Failed to load dashboard");
        }
    };

    fetchDashboard();
}, []);

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
                    value={stats.totalProjects}
                    color="text-blue-600"
                />

                <StatCard
                    title="Tasks"
                    value={stats.totalTasks}
                    color="text-green-600"
                />

                <StatCard
                    title="To Do"
                    value={stats.todo}
                    color="text-yellow-500"
                />
                <StatCard
                    title="In Progress"
                    value={stats.inProgress}
                    color="text-orange-500"
                />

                <StatCard
                    title="Done"
                    value={stats.done}
                    color="text-purple-600"
                />

            </div>

        </DashboardLayout>
    );
}

export default Dashboard;