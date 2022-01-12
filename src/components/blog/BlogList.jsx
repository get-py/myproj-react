import { useApiAxios } from 'api/base';
import { useEffect } from 'react';
import DebugStates from 'components/DebugStates';
import BlogSummary from './BlogSummary';

function BlogList() {
  const [{ data: postList, loading, error }, refetch] =
    useApiAxios('blog/api/posts/');

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {loading && 'loading...'}
      {error && 'loading error'}
      {postList &&
        postList.map((post) => <BlogSummary post={post} key={post.id} />)}
      <div className="my-5">
        <DebugStates postList={postList} loading={loading} error={error} />
      </div>
    </div>
  );
}

export default BlogList;
