import DebugStates from 'components/DebugStates';
import ReviewForm from 'components/ReviewForm';
import useFieldValues from 'hooks/useFieldValues';
import { Navigate, useParams } from 'react-router-dom';
import Axios from 'axios';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';

function PageReviewForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { reviewId } = useParams();
  const { fieldValues, handleFieldChange, setFieldValues, clearFieldValues } =
    useFieldValues({
      score: 5,
      content: '',
    });

  useEffect(() => {
    const fetchReview = async () => {
      setLoading(true);
      setError(null);

      const url = `http://localhost:8000/shop/api/reviews/${reviewId}/`;
      try {
        const response = await Axios.get(url);
        setFieldValues(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    if (reviewId) fetchReview();
    else clearFieldValues();
  }, [reviewId]);

  const saveReview = async () => {
    setLoading(true);
    setError(null);

    const url = !reviewId
      ? 'http://localhost:8000/shop/api/reviews/'
      : `http://localhost:8000/shop/api/reviews/${reviewId}`;

    try {
      if (!reviewId) {
        await Axios.post(url, fieldValues);
      } else {
        await Axios.post(url, fieldValues);
      }
      Navigate('/reviews/');
    } catch (e) {
      setError(e);
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Review {reviewId ? '수정' : '생성'}</h2>

      <ReviewForm
        fieldValues={fieldValues}
        handleFieldChange={handleFieldChange}
        handleSubmit={saveReview}
        loading={loading}
      />
    </div>
  );
}
export default PageReviewForm;
