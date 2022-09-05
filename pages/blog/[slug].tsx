import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import withAppProvider from '../../hoc/withAppProvider';
import Loading from '../../layout/Loading';
import blogService, { Blog } from '../../services/blog.service';
import BlogDetailWrapper from '../../wrapper/blog/blog-detail';

const BlogDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState<Blog>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (slug) {
      (async () => {
        try {
          setIsLoading(true);
          const response: Blog = await blogService.getDetailBlog(slug as string);
          console.log('response', response);
          setBlog(response);
        } catch (e) {
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [slug]);
  return (
    <div>
      <BlogDetailWrapper blog={blog} isLoading={isLoading} />
    </div>
  );
};

export default withAppProvider(BlogDetailPage);
