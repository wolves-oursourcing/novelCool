import api from "../api/api";
const getAllGoogleData = async (filter?: any) => {
    const response = await api.getService<any[]>(
        "google",
        filter
    );
    return response;
};

export default { getAllGoogleData };