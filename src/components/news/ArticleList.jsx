import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import ArticleSummary from './ArticleSummary';
import { useEffect } from 'react';

function ArticleList() {
  const [{ data: articleList, loading, error }, refetch] = useApiAxios(
    '/news/api/articles/',
    { manual: true },
  );
  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {loading && '로딩중'}
      {error && '로딩 중 에러가 발생했습니다'}
      {articleList &&
        articleList.map((article) => (
          <div className="transition-transform duration-500 my-5 hover:-translate-y-5">
            <ArticleSummary article={article} key={article.id} />
          </div>
        ))}
      <DebugStates articleList={articleList} loading={loading} error={error} />
    </div>
  );
}

export default ArticleList;
