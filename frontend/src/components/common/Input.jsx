function Input({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
}) {
  return (
    <div className="space-y-2">

      <label className="font-medium text-slate-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full px-4 py-3 border rounded-xl outline-none
        focus:border-blue-600
        focus:ring-4
        focus:ring-blue-100"
      />

    </div>
  );
}

export default Input;