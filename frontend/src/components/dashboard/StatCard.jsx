function StatCard({ title, value, color }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-blue-600 hover:shadow-md transition">

            <p className="text-slate-500 text-sm">
                {title}
            </p>

            <h2
                className={`text-4xl font-bold mt-3 ${color}`}
            >
                {value}
            </h2>

        </div>
    );
}

export default StatCard;