import { useState } from 'react/cjs/react.development';

function ReviewForm({ fieldValues, handleFieldChange, handleSubmit, loading }) {
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
      <label className="">SCORE</label>
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

      <div>
        <label className="">CONTENT</label>
        <textarea
          onChange={handleFieldChange}
          name="content"
          value={fieldValues.content}
          className="border-gray-300"
        />
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
