import { IResponse } from '../api/configs';
import api from '../api/api';

export type NovelFilter = any;
export interface Novel {
  id: number;
  image?: string;
  title?: string;
  rate?: number;
  view?: number;
  description?: string;
}

const getBlogs = async (perPage?: number, page?: number, filter?: NovelFilter): Promise<IResponse> => {
  return api.getService<IResponse>(`blogs?per_page=${perPage}&page=${page}`);
};
const getDetailBlog = async (id: number | string): Promise<Novel> => {
  return api.getService<Novel>(`blogs/${id}`);
};

export default { getBlogs, getDetailBlog };
