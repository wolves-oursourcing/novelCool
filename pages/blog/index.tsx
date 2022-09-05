import React, { useEffect, useState } from 'react';
import { IResponse, PER_PAGE } from '../../api/configs';
import withAppProvider from '../../hoc/withAppProvider';
import blogService, { Blog } from '../../services/blog.service';
import BlogPageWrapper from '../../wrapper/blog';

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getBlogs = async (page?: number) => {
    if (!page) {
      page = 1;
    }
    try {
      setIsLoading(true);
      const response: IResponse = await blogService.getBlogs(PER_PAGE, page);
      console.log('response blogs', response);
      setBlogs(response.data);
      setTotal(response.total);
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePage = (page: number) => {
    getBlogs(page);
    setPage(page);
  };
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <div>
      <BlogPageWrapper
        blogs={blogs}
        handleChangePage={handleChangePage}
        currentPage={page}
        total={total}
        isLoading={isLoading}
      />
    </div>
  );
};

export default withAppProvider(BlogPage);
