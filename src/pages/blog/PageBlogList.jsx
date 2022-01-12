// 블로그의 대문 페이지

import BlogList from 'components/blog/BlogList';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

function PageBlogList() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-xl text-green-700 my-3">[ LIST ]</h1>
      <BlogList />
      <Button onClick={() => navigate('/blog/posts/new/')}>new posting</Button>
    </div>
  );
}

export default PageBlogList;
