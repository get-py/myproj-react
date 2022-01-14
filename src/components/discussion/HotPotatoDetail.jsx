import { useApiAxios } from 'api/base';
import LoadingIndicator from 'components/LoadingIndicator';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';

function HotPotatoDetail({ hotpotatoId }) {
  const navigate = useNavigate();
  const [{ data: hotpotato, loading, error }, refetch] = useApiAxios(
    `/discussion/api/hotpotatos/${hotpotatoId}/`,
    {
      manual: true,
    },
  );

  const [{ loading: deleteLoading, error: deleteError }, deleteHotPotato] =
    useApiAxios(
      { url: `/discussion/api/hotpotatos/${hotpotatoId}/`, method: 'DELETE' },
      { manual: true },
    );

  const handleDelete = () => {
    if (window.confirm('Are you sure?')) {
      deleteHotPotato().then();
      navigate('/hotpotatos/');
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {loading && <LoadingIndicator />}
      {deleteLoading && <LoadingIndicator>삭제 중...</LoadingIndicator>}
      {error &&
        `로딩중 에러 발생 (${deleteError.response.status} ${deleteError.response.statusText})`}
      {deleteError &&
        `삭제 요청 중 에러 발생 (${deleteError.response.status} ${deleteError.response.statusText})`}
      {hotpotato && (
        <>
          <h3>{hotpotato.title}</h3>
          {hotpotato.photo && (
            <img src={hotpotato.photo} alt={hotpotato.title} />
          )}
          <div>
            {hotpotato.content.split(/[\r\n]/).map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </>
      )}
      <hr />

      <Link to="/hotpotatos/" className="hover:text-purple-500 mr-3">
        목록으로
      </Link>

      <Link
        to={`/hotpotatos/${hotpotatoId}/edit/`}
        className="hover:text-purple-500 mr-3"
      >
        수정하기
      </Link>

      <button
        disabled={deleteLoading}
        className="hover:text-purple-500 mr-3"
        onClick={handleDelete}
      >
        삭제하기
      </button>
    </div>
  );
}

export default HotPotatoDetail;
