import { useApiAxios } from 'api/base';
import LoadingIndicator from 'components/LoadingIndicator';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function BlogDetail({ postId }) {
  const navigate = useNavigate();

  const [{ data: post, loading, error }, refetch] = useApiAxios(
    `/blog/api/posts/${postId}`,
  );

  const [{ loading: deleteLoading, error: deleteError }, deletePost] =
    useApiAxios(
      {
        url: `/blog/api/posts/${postId}/`,
        method: 'DELETE',
      },
      { manual: true },
    );

  const handleDelete = () => {
    if (window.confirm('Are you sure?')) {
      deletePost().then();
      navigate('/blog/posts/');
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {loading && <LoadingIndicator />}
      {deleteLoading && <LoadingIndicator>삭제 중...</LoadingIndicator>}
      {error &&
        `loading error(${deleteError.response.status} ${deleteError.response.statusText})`}
      {deleteError &&
        `삭제 요청 중 에러 발생(${deleteError.response.status} ${deleteError.response.statusText})`}
      {post && (
        <>
          <h3 className="text-lg my-5">{post.title}</h3>
          <div>
            {post.content.split(/[\r\n]/).map((line, index) => (
              <p className="my-3" key={index}>
                {line}
              </p>
            ))}
          </div>
        </>
      )}
      <hr />
      <Link to={'/blog/posts/'} className="hover:text-green-500 mr-3">
        목록으로
      </Link>

      <Link
        to={`/blog/posts/${postId}/edit/`}
        className="hover:text-green-500 mr-3"
      >
        수정하기
      </Link>

      <button
        disabled={deleteLoading}
        className="hover:text-green-500 mr-3"
        onClick={handleDelete}
      >
        삭제하기
      </button>
    </div>
  );
}

export default BlogDetail;
