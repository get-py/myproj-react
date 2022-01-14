// 뉴스의 대문 페이지

import Button from 'components/Button';
import ArticleList from 'components/news/ArticleList';
import { useNavigate } from 'react-router-dom';

function PageNewsIndex() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-xl text-blue-700 my-3">[ 뉴스 페이지 ]</h1>

      <Button onClick={() => navigate('/news/new/')}>새 포스팅 쓰기</Button>
      <ArticleList />

      <h2>뉴스 추천</h2>

      <h2>AD</h2>
    </div>
  );
}

export default PageNewsIndex;
