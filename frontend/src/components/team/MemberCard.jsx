import { FaTrash, FaUserCircle } from "react-icons/fa";

function MemberCard({
    member,
    onRemove,
}) {

    return (

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">

            <div className="flex items-center gap-4">

                <FaUserCircle
                    size={42}
                    className="text-blue-600"
                />

                <div>

                    <h3 className="font-semibold text-lg">
                        {member.name}
                    </h3>

                    <p className="text-slate-500">
                        {member.email}
                    </p>

                </div>

            </div>

            <button
                onClick={() => onRemove(member)}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
                <FaTrash />
                Remove
            </button>

        </div>

    );

}

export default MemberCard;