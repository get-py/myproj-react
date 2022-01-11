import { useState } from 'react/cjs/react.development';

function ReviewForm({
  fieldValues,
  errorMessages,
  handleFieldChange,
  handleSubmit,
  loading,
}) {
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
      <label className=""></label>
      <select
        onChange={handleFieldChange}
        name="score"
        value={fieldValues.score}
        className="bg-gray-200 border-gray-300"
      >
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <div className="text-red-400">{errorMessages.score}</div>

      <div>
        <label className="">CONTENT</label>
        <div>
          <textarea
            onChange={handleFieldChange}
            name="content"
            value={fieldValues.content}
            className="bg-purple-100 border-purple-400"
          />
        </div>

        <div className="text-red-400">{errorMessages.content}</div>
      </div>
      <div>
        <button
          type="submit"
          onClick={() => handleClickedSubmitButton()}
          disabled={loading}
        >
          {loading && 'loading...'} 저장하기
        </button>
      </div>
    </div>
  );
}

export default ReviewForm;
