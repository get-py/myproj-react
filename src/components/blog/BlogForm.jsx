import { useNavigate } from 'react-router-dom';

function BlogForm({ fieldValues, handleFieldChange, handleSubmit, loading }) {
  const handleClickedSubmitButton = () => {
    if (handleSubmit) {
      handleSubmit();
    } else {
      console.warn('handleSubmit 속성값을 지정해주세요.');
    }
  };
  const navigate = useNavigate();

  return (
    <div>
      {loading && 'Loading...'}

      <div>
        <label>Title</label>
      </div>
      <div>
        <textarea
          onChange={handleFieldChange}
          name="title"
          value={fieldValues.title}
          className="bg-gray-100 border-gray-300"
        />
      </div>
      <div>
        <label>Content</label>
      </div>
      <div>
        <textarea
          onChange={handleFieldChange}
          name="content"
          value={fieldValues.content}
          className="bg-gray-100 border-gray-300"
        />
      </div>

      <div>
        <button
          type="submit"
          onClick={() => handleClickedSubmitButton()}
          onClick={() => navigate(`/blog/posts/`)}
          disabled={loading}
        >
          {loading && 'loading...'} 저장하기
        </button>
      </div>
    </div>
  );
}

export default BlogForm;
