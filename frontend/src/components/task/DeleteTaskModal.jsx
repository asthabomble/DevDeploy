function DeleteTaskModal({
    onConfirm,
    onCancel,
}) {
    return (

        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">

                <h2 className="text-2xl font-bold text-red-600">
                    Delete Task
                </h2>

                <p className="text-slate-600 mt-4">
                    Are you sure you want to delete this task?
                </p>

                <div className="flex justify-end gap-3 mt-8">

                    <button
                        onClick={onCancel}
                        className="border px-5 py-3 rounded-xl hover:bg-slate-100"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl"
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>

    );
}

export default DeleteTaskModal;