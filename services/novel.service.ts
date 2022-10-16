import api from '../api/api';
import { IResponse } from '../api/configs';

export type NovelFilter = any;

export interface Chapter {
  id: number;
  name?: string;
  uniqueName: string;
  view?: number;
  content?: string;
    novel?: Novel;
  createdAt?: Date;
}
export interface Novel {
  id: number;
  image?: string;
  bookmarked?: string;
  status?: string;
  name?: string;
  rate?: number;
  views?: number;
  vote?: number;
  uniqueName?: string;
  description?: string;
  kind?: string;
  createdAt?: Date;
  chapters?: Chapter[];
  categories?: any[];
}

const getBlogs = async (perPage?: number, page?: number, filter?: NovelFilter): Promise<IResponse> => {
  return api.getService<IResponse>(`blogs?per_page=${perPage}&page=${page}`);
};
const getDetailBlog = async (id: number | string): Promise<Novel> => {
  return api.getService<Novel>(`blogs/${id}`);
};

const getAllNovel = async (filter?: any) => {
  const response = await api.getService<any[]>(
      "novel",
      filter
  );
  return response;
};
 const getById = async (id: number) => {
  const response = await api.getService(
      "novel/find",
      id
  );
  return response;
};
 const getNovelByRank = async () => {
  const response = await api.getService<any>(
      "novel/getByRanking"
  );
  return response;
};

const getWeeklyMostActive = async () => {
  const response = await api.getService<any[]>(
      "novel/weeklyMostActive"
  );
  return response;
};

const createNovel = async (data: any) => {
  const response = await api.postService(
      "novel",
      data,
      true,
      false
  );
  return response;
};

const getChapterNovel = async (filter?: any) => {
    const response = await api.getService<any[]>(
        "chapter",
        filter
    );
    return response;
};

export default { getBlogs, getDetailBlog, createNovel, getWeeklyMostActive, getById, getNovelByRank, getAllNovel, getChapterNovel };
