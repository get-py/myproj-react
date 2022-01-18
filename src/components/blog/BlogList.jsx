import { useApiAxios } from 'api/base';
import { useEffect } from 'react';
import DebugStates from 'components/DebugStates';
import BlogSummary from './BlogSummary';
import useAuth from 'hooks/useAuth';

function BlogList() {
  const [auth] = useAuth();
  const [{ data: postList, loading, error }, refetch] = useApiAxios({
    url: 'blog/api/posts/',
    method: 'GET',
    headers: { Authorization: `Bearer ${auth.access}` },
  });

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
