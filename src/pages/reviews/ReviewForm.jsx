import DebugStates from 'components/DebugStates';
import ReviewForm from 'components/ReviewForm';
import useFieldValues from 'hooks/useFieldValues';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { axiosInstance } from 'api/base';

function PageReviewForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { reviewId } = useParams();
  const { fieldValues, handleFieldChange, setFieldValues, clearFieldValues } =
    useFieldValues({
      score: 5,
      content: '',
    });
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    const fetchReview = async () => {
      setLoading(true);
      setError(null);

      const url = `/shop/api/reviews/${reviewId}/`;
      try {
        const response = await axiosInstance.get(url);
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
    setErrorMessages({});

    const url = !reviewId
      ? '/shop/api/reviews/'
      : `/shop/api/reviews/${reviewId}/`;

    try {
      if (!reviewId) {
        await axiosInstance.post(url, fieldValues);
      } else {
        await axiosInstance.post(url, fieldValues);
      }
      navigate('/reviews/');
    } catch (e) {
      setError(e);
      console.error(e);
      setErrorMessages(e.response.data);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Review {reviewId ? '수정' : '생성'}</h2>

      <ReviewForm
        fieldValues={fieldValues}
        errorMessages={errorMessages}
        handleFieldChange={handleFieldChange}
        handleSubmit={saveReview}
        loading={loading}
      />
      <DebugStates errorMessages={errorMessages} />
    </div>
  );
}
export default PageReviewForm;
