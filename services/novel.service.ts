import api from '../api/api';
import { IResponse } from '../api/configs';

export type NovelFilter = any;
export interface Novel {
  id: number;
  image?: string;
  title?: string;
  rate?: number;
  view?: number;
  vote?: number;
  description?: string;
  kind?: string;
  createdAt?: Date;
}

const getBlogs = async (perPage?: number, page?: number, filter?: NovelFilter): Promise<IResponse> => {
  return api.getService<IResponse>(`blogs?per_page=${perPage}&page=${page}`);
};
const getDetailBlog = async (id: number | string): Promise<Novel> => {
  return api.getService<Novel>(`blogs/${id}`);
};

export default { getBlogs, getDetailBlog };
