import { useState } from "react";

function AddMemberForm({ onSubmit }) {

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit(email);

        setEmail("");

    };

    return (

        <form
            onSubmit={handleSubmit}
            className="flex gap-3 mb-6"
        >

            <input
                type="email"
                placeholder="Enter member email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-300"
                required
            />

            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-xl"
            >
                Add Member
            </button>

        </form>

    );

}

export default AddMemberForm;