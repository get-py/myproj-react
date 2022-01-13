import { useApiAxios } from 'api/base';
import LoadingIndicator from 'components/LoadingIndicator';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ArticleDetail({ articleId }) {
  const navigate = useNavigate();

  const [{ data: article, loading, error }, refetch] = useApiAxios(
    `/news/api/articles/${articleId}/`,
  );
  const [{ loading: deleteLoading, error: deleteError }, deleteArticle] =
    useApiAxios(
      {
        url: `/news/api/articles/${articleId}/`,
        method: 'DELETE',
      },
      { manual: true },
    );

  const handleDelete = () => {
    if (window.confirm('Are you sure?')) {
      deleteArticle().then();
      navigate('/news/');
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
        `로딩중 에러 발생 (${deleteError.response.status} ${deleteError.response.statusText})`}
      {deleteError &&
        `삭제 요청 중 에러 발생 (${deleteError.response.status} ${deleteError.response.statusText})`}
      {article && (
        <>
          <h3 className="text-2xl my-5">{article.title}</h3>
          {article.photo && (
            <img className="rounded" src={article.photo} alt={article.title} />
          )}
          <div>
            {article.content.split(/[\r\n]/).map((line, index) => (
              <p className="my-3" key={index}>
                {line}
              </p>
            ))}
          </div>
        </>
      )}
      <hr />

      <Link to="/news/" className="hover:text-purple-500 mr-3">
        목록으로
      </Link>

      <Link
        to={`/news/${articleId}/edit/`}
        className="hover:text-purple-500 mr-3"
      >
        수정하기
      </Link>

      <button
        disabled={deleteLoading}
        className="hover:text-purple-500 mr-3"
        onClick={handleDelete}
      >
        삭제하기
      </button>
    </div>
  );
}

export default ArticleDetail;
