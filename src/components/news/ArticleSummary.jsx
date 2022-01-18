import { Link } from 'react-router-dom';

function ArticleSummary({ article }) {
  return (
    <div>
      {article.photo && <img src={article.photo} alt="" className="inline" />}
      <Link to={`/news/${article.id}/`} className="text-5 text-gray-900 mb-1 ">
        ▶{article.title}
      </Link>
      <p>by {article.author.username}</p>
    </div>
  );
}

export default ArticleSummary;
