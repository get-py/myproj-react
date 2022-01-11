import BlogForm from 'components/blog/BlogForm';
import useFieldValues from 'hooks/useFieldValues';
import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Axios from 'axios';

function PageBlogForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { postId } = useParams();
  const { fieldValues, handleFieldChange, setFieldValues, clearFieldValues } =
    useFieldValues({
      title: '',
      content: '',
    });

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);

      const url = `http://localhost:8000/blog/api/posts/${postId}/`;
      try {
        const response = await Axios.get(url);
        setFieldValues(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    if (postId) fetchPost();
    else clearFieldValues();
  }, [postId]);

  const savePost = async () => {
    setLoading(true);
    setError(null);

    const url = !postId
      ? 'http://localhost:8000/blog/api/posts/'
      : `http://localhost:8000/blog/api/posts/${postId}/`;

    try {
      if (!postId) {
        await Axios.post(url, fieldValues);
      } else {
        await Axios.post(url, fieldValues);
      }
      Navigate('/posts/');
    } catch (e) {
      setError(e);
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Review Form {postId ? '수정' : '생성'}</h1>
      <BlogForm
        fieldValues={fieldValues}
        handleFieldChange={handleFieldChange}
        handleSubmit={savePost}
        loading={loading}
      />
    </div>
  );
}

export default PageBlogForm;
