import { FaRocket } from "react-icons/fa";

function Logo() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="bg-blue-600 p-3 rounded-xl">
        <FaRocket className="text-white text-xl" />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          DevDeploy
        </h1>

        <p className="text-sm text-slate-500">
          Project Management
        </p>
      </div>
    </div>
  );
}

export default Logo;