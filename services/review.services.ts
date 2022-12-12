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

const getReviewById = async (id?: any) => {
    const response = await api.getService<any[]>(
        `review/${id}`
    );
    return response;
};

export default { getAllReview, getReviewById };