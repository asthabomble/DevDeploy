function Button({
  children,
  type = "button",
  onClick,
  loading = false,
}) {
  return (
    <button
      type={type}
      disabled={loading}
      onClick={onClick}
      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-xl transition duration-200 shadow-md"
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}

export default Button;