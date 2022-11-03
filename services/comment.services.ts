import api from "../api/api";

export const createComment = async (data: any) => {
    const response = await api.postService(
        "comment",
        data,
        true,
        false
    );
    return response;
};

export const getChapterNovel = async (filter?: any) => {
    const response = await api.getService<any[]>(
        "comment",
        filter
    );
    return response;
};