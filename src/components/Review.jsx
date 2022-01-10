import Rating from './Rating';

// handleDelete : 인자 없는 함수. 삭제 버튼 클릭시에 호출을 합니다
function Review({ review, handleDelete, handleEdit }) {
  const { content, score } = review;

  return (
    <div className="bg-purple-100 my-1 p-1 rounded">
      <span
        handleEdit={() => handleEdit()}
        className="hover:text-yellow-100 cursor-point p-1"
      >
        수정
      </span>

      <span
        onClick={() => handleDelete()}
        className="hover:text-yellow-100 cursor-point p-1"
      >
        Delete
      </span>

      {content}

      <Rating score={score} />
    </div>
  );
}

export default Review;
