import { useNavigate } from 'react-router-dom';
import H2 from 'components/H2';
import { useApiAxios } from 'api/base';
import useFieldValues from 'hooks/useFieldValues';
import LoadingIndicator from 'components/LoadingIndicator';
import Button from 'components/Button';
import DebugStates from 'components/DebugStates';
import useAuth from 'hooks/useAuth';

const INIT_FIELD_VALUES = { title: '', content: '' };

function BlogForm({ postId, handleDidSave }) {
  const [auth] = useAuth();

  const [{ data: post, loading: getLoading, error: getError }] = useApiAxios(
    {
      url: `/blog/api/posts/${postId}`,
      method: 'GET',
      headers: { Authorization: `Bearer ${auth.access}` },
    },
    { manual: !postId },
  );

  const [
    {
      loading: saveLoading,
      error: saveError,
      errorMessages: saveErrorMessages,
    },
    saveRequest,
  ] = useApiAxios(
    {
      url: !postId ? '/blog/api/posts/' : `/blog/api/posts/${postId}/`,
      method: !postId ? 'POST' : 'PUT',
      headers: { Authorization: `Bearer ${auth.access}` },
    },
    { manual: true },
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    saveRequest({
      data: fieldValues,
    }).then((response) => {
      const savedPost = response.data;
      if (handleDidSave) handleDidSave(savedPost);
    });
  };

  const { fieldValues, handleFieldChange } = useFieldValues(
    post || INIT_FIELD_VALUES,
  );

  return (
    <div>
      <H2>Posting Form</H2>
      {saveLoading && <LoadingIndicator>저장 중...</LoadingIndicator>}
      {saveError &&
        `저장 중 에러가 발생했습니다(${saveError.response.status} ${saveError.response.statusText})`}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            value={fieldValues.title}
            onChange={handleFieldChange}
            className="bg-gray-100 w-full mb-3 p-2 rounded outline-none focus:border-gray-400 focus:border"
          />
        </div>

        <div>
          <textarea
            name="content"
            value={fieldValues.content}
            onChange={handleFieldChange}
            className="bg-gray-100 w-full mb-3 p-2 h-80 rounded outline-none focus:border-gray-400 focus:border"
          />
        </div>
        <div className="mb-7">
          <Button>저장하기</Button>
        </div>
      </form>
      <DebugStates
        post={post}
        getLoading={getLoading}
        getError={getError}
        fieldValues={fieldValues}
        saveErrorMessages={saveErrorMessages}
      />
    </div>
  );
}

export default BlogForm;
