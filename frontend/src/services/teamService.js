import api from "./api";

export const addMember = async (projectId, email) => {
    const response = await api.put(
        `/projects/${projectId}/members`,
        { email }
    );

    return response.data;
};

export const getMembers = async (projectId) => {
    const response = await api.get(
        `/projects/${projectId}/members`
    );

    return response.data;
};

export const removeMember = async (projectId, userId) => {
    const response = await api.delete(
        `/projects/${projectId}/members/${userId}`
    );

    return response.data;
};