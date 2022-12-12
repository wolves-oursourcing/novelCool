import api from "../api/api";

export const getCategory = async (filter?: any) => {
    const response = await api.getService<any[]>(
        "category",
        filter
    );
    return response;
};