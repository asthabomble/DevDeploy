import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Logo from "../../components/common/Logo";
import { loginUser } from "../../services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function Login() {
     const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        setLoading(true);

        const response = await loginUser(formData);

        // Save JWT Token
        localStorage.setItem("token", response.token);

        toast.success("Login Successful!");

        navigate("/dashboard");

    } catch (error) {

        toast.error(
            error.response?.data?.message || "Login Failed"
        );

    } finally {

        setLoading(false);

    }
};

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center px-4">

            <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">

                <Logo />

                <div className="mt-8">
                    <h2 className="text-3xl font-bold text-slate-800">
                        Welcome Back 👋
                    </h2>

                    <p className="text-slate-500 mt-2">
                        Sign in to continue to DevDeploy
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 mt-8"
                >
                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <div>
                        <label className="font-medium text-slate-700">
                            Password
                        </label>

                        <div className="relative mt-2">

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3 pr-12 border rounded-xl outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-600"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="absolute inset-y-0 right-4 flex items-center text-slate-500 hover:text-slate-700"
                            >
                                {showPassword ? (
                                    <FaEye size={18} />
                                ) : (
                                    <FaEyeSlash size={18} />
                                )}
                            </button>

                        </div>
                    </div>

                   <Button
    type="submit"
    loading={loading}
>
    Sign In
</Button>

                </form>

                <p className="text-center mt-8 text-slate-500">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        Register
                    </Link>
                </p>

            </div>

        </div>
    );
}

export default Login;