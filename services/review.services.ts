import api from "../api/api";
export interface Review {
    id: number;
    image?: string;
    name?: string;
    review?: string;
    createdAt?: Date;
}
const getAllReview = async (filter?: any) => {
    const response = await api.getService<any[]>(
        "review",
        filter
    );
    return response;
};

export default { getAllReview };