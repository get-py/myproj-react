import useAxios from 'axios-hooks';
import { Link } from 'react-router-dom';

function ArticleDetail({ articleId }) {
  const [{ data: article, loading, error }] = useAxios(
    `http://127.0.0.1:8000/news/api/articles/${articleId}`,
  );
  return (
    <div>
      {loading && '로딩중'}
      {error && '로딩중 에러 발생'}
      {article && (
        <>
          <h3 className="text-2xl my-5">{article.title}</h3>
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
      <Link to={`/news/${articleId}/edit`} className="hover:text-purple-500">
        수정하기
      </Link>
    </div>
  );
}

export default ArticleDetail;
