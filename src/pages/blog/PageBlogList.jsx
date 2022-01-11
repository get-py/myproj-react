import BlogDetail from 'components/blog/BlogDetail';
import BlogList from 'components/blog/BlogList';
import { useState, useEffect } from 'react';
import { axiosInstance } from 'api/base';
import { useNavigate } from 'react-router-dom';

function PageBlogList() {
  const [postList, setPostList] = useState([
    // { id: 1, title: '집', content: '' },
  ]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    setLoading(true);
    setError(null);

    const url = '/blog/api/posts/';
    // Promise 객체(400 미만이면 then, 400 이상이면 catch)
    axiosInstance
      .get(url)
      .then(({ data }) => {
        setPostList(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deletePost = (deletingPost) => {
    const { id: delPostId } = deletingPost;
    const url = `/blog/api/posts/${delPostId}/`;

    setLoading(true);
    setError(null);

    axiosInstance
      .delete(url)
      .then(() => {
        console.log('삭제 성공');
        // 선택 1. 삭제된 항목만 상탯값에서 제거
        setPostList((prePostList) => {
          return prePostList.filter((post) => {
            return post.id !== delPostId;
          });
        });
        // 선택 2. 전체를 새로고침
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h1 className="bg-purple-100 text-center">박예린의 블로그</h1>

      <button onClick={() => refetch()} className="text-sm hover:bg-purple-200">
        새로고침
      </button>

      <button
        onClick={() => navigate('/blog/posts/new')}
        className="text-sm hover:bg-purple-200"
      >
        write
      </button>

      {postList.map((post) => (
        <BlogDetail
          key={post.id}
          post={post}
          handleDelete={() => deletePost(post)}
          handleEdit={() => navigate(`/blog/posts/${post.id}/edit/`)}
        />
      ))}
    </div>
  );
}

export default PageBlogList;
