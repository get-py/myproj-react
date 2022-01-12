import ArticleDetail from 'components/news/ArticleDetail';
import { useParams } from 'react-router-dom';

function PageNewsArticleDetail() {
  const { articleId } = useParams();
  return (
    <div>
      <ArticleDetail articleId={articleId} />

      <h2>비슷한 기사 목록</h2>
      <h2>당신이 관심있을만한 기사</h2>
      <h2>AD</h2>
    </div>
  );
}
export default PageNewsArticleDetail;
