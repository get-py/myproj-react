import { Link } from 'react-router-dom';

function BlogSummary({ post }) {
  return (
    <div className="text-5 text-gray-900 mb-1">
      º <Link to={`/blog/posts/${post.id}`}>{post.title}</Link>
      <p>by {post.author.username}</p>
    </div>
  );
}

export default BlogSummary;
