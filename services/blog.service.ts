import { IResponse } from './../api/configs';
import api from '../api/api';

export type BLogFilter = any;
export interface Blog {
  id: number;
  title?: string;
  content?: string;
  image_url?: string;
  blog_category?: string;
  external_blog_description?: string;
  external_blog_url?: string;
  external?: boolean;
}

const getBlogs = async (perPage?: number, page?: number, filter?: BLogFilter): Promise<IResponse> => {
  return api.getService<IResponse>(`blogs?per_page=${perPage}&page=${page}`);
};
const getDetailBlog = async (id: number | string): Promise<Blog> => {
  return api.getService<Blog>(`blogs/${id}`);
};

export default { getBlogs, getDetailBlog };
