import { axiosInstance } from 'api/base';
import DebugStates from 'components/DebugStates';
import Review from 'components/Review';
import useFieldValues from 'hooks/useFieldValues';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const INITIAL_STATE = [{ id: 1, content: 'be more confident', score: 5 }];

function PageReviewList() {
  const [reviewList, setReviewList] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { fieldValues, handleFieldChange, clearFieldValues, setFieldValues } =
    useFieldValues({
      content: '',
      score: 5,
    });
  const [isShowReviewForm, setIsShowReviewForm] = useState(false);

  // 무조건 이 형태(첫번째는 함수, 두번째는 배열)
  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    setLoading(true);
    setError(null);

    const url = '/shop/api/reviews/';
    // Promise 객체(400 미만이면 then, 400 이상이면 catch)
    axiosInstance
      .get(url)
      .then(({ data }) => {
        setReviewList(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteReview = (deletingReview) => {
    const { id: delReviewId } = deletingReview;
    const url = `/shop/api/reviews/${delReviewId}/`;

    setLoading(true);
    setError(null);

    axiosInstance
      .delete(url)
      .then(() => {
        console.log('삭제 성공');
        // 선택 1. 삭제된 항목만 상탯값에서 제거
        setReviewList((prevReviewList) => {
          return prevReviewList.filter((review) => {
            return review.id !== delReviewId;
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

  const saveReview = () => {
    let { id: reviewId } = fieldValues;

    if (!reviewId) {
      const reviewId = new Date().getTime();
      const createdReview = { ...fieldValues, id: reviewId };
      console.log(fieldValues);
      setReviewList((prevReviewList) => [...prevReviewList, createdReview]);
    } else {
      const editedReview = { ...fieldValues };
      console.log(fieldValues);
      setReviewList((prevReviewList) =>
        prevReviewList.map((review) => {
          if (review.id === editedReview.id) return editedReview;
          return review;
        }),
      );
    }

    clearFieldValues();
    setIsShowReviewForm(false);
  };

  return (
    <div>
      <h1>ReivewList</h1>

      {loading && <div>Loading...</div>}
      {error && <div>통신 중에 오류가 발생했습니다.</div>}

      <button onClick={() => refetch()} className="text-sm hover:bg-purple-200">
        새로고침
      </button>

      <button
        onClick={() => navigate('/reviews/new')}
        className="text-sm hover:bg-purple-200"
      >
        write
      </button>

      {reviewList.map((review) => (
        <Review
          key={review.id}
          review={review}
          handleDelete={() => deleteReview(review)}
          handleEdit={() => navigate(`/reviews/${review.id}/edit/`)}
        />
      ))}

      <hr />
      <DebugStates loading={loading} error={error} reviewList={reviewList} />
    </div>
  );
}

export default PageReviewList;
