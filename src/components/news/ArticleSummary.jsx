import { Link } from 'react-router-dom';

function ArticleSummary({ article }) {
  return (
    <div className="text-5 text-gray-900 mb-1 ">
      ▶ <Link to={`/news/${article.id}/`}>{article.title}</Link>
    </div>
  );
}

export default ArticleSummary;
