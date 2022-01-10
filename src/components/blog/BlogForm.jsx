function BlogForm({ fieldValues, handleFieldChange, handleSubmit, loading }) {
  const handleClickedSubmitButton = () => {
    if (handleSubmit) {
      handleSubmit();
    } else {
      console.warn('handleSubmit 속성값을 지정해주세요.');
    }
  };

  return (
    <div>
      {loading && 'Loading...'}
      <label>Title</label>
      <text
        onChange={handleFieldChange}
        name="title"
        value={fieldValues.title}
        className="bg-gray-200"
      />

      <label>Content</label>
      <textarea
        onChange={handleFieldChange}
        name="content"
        value={fieldValues.content}
        className="border-gray-300"
      />

      <button
        type="submit"
        onClick={() => handleClickedSubmitButton()}
        disabled={loading}
      >
        {loading && 'loading...'} 저장하기
      </button>
    </div>
  );
}

export default BlogForm;
