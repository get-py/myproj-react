import BlogDetail from 'components/blog/BlogDetail';
import { useParams } from 'react-router-dom';

function PageBlogDetail() {
  const { postId } = useParams();
  return (
    <div>
      <BlogDetail postId={postId} />

      <h2>추천글</h2>
      <h2>AD</h2>
    </div>
  );
}

export default PageBlogDetail;
