import Axios from 'axios';
import DebugStates from 'components/DebugStates';
import Review from 'components/Review';
import { useEffect, useState } from 'react';

function PageReviewList() {
  const [reviewList, setReviewList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 무조건 이 형태(첫번째는 함수, 두번째는 배열)
  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    setLoading(true);
    setError(null);

    const url = 'http://127.0.0.1:8000/shop/api/reviews/';
    // Promise 객체(400 미만이면 then, 400 이상이면 catch)
    Axios.get(url)
      .then(({ data }) => {
        console.group('정상응답');
        console.log(data);
        console.groupEnd();
        setReviewList(data);
      })
      .catch((error) => {
        console.group('에러 응답');
        console.error(error);
        console.groupEnd();
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>ReivewList</h1>

      {loading && <div>Loading...</div>}
      {error && <div>통신 중에 오류가 발생했습니다.</div>}

      <button
        onClick={() => refetch()}
        className="text-sm bg-purple-white hover:bg-purple-200"
      >
        새로고침
      </button>

      {reviewList.map((review) => (
        <Review key={review.id} review={review} />
      ))}

      <hr />
      <DebugStates loading={loading} error={error} reviewList={reviewList} />
    </div>
  );
}

export default PageReviewList;
