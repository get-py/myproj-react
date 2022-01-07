import Rating from './Rating';

function Review({ review }) {
  const { content, score } = review;
  return (
    <div className="bg-purple-100 my-1 p-1 rounded">
      {content}
      <Rating score={score} />
    </div>
  );
}

export default Review;
