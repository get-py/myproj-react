import Button from 'components/Button';
import DebugStates from 'components/DebugStates';
import H2 from 'components/H2';
import LoadingIndicator from 'components/LoadingIndicator';
import useFieldValues from 'hooks/useFieldValues';
import { useApiAxios } from 'api/base';
import { data } from 'autoprefixer';
import { useEffect } from 'react';
import produce from 'immer';

const INIT_FIELD_VALUES = { title: '', content: '' };

function ArticleForm({ articleId, handleDidSave }) {
  const [{ data: article, loading: getLoading, error: getError }] = useApiAxios(
    `/news/api/articles/${articleId}`,
    { manual: !articleId },
  );

  const [
    {
      loading: saveLoading,
      error: saveError,
      errorMessages: saveErrorMassages,
    },
    saveRequest,
  ] = useApiAxios(
    {
      url: !articleId
        ? '/news/api/articles/'
        : `/news/api/articles/${articleId}/`,
      method: !articleId ? 'POST' : 'PUT',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange, setFieldValues } = useFieldValues(
    article || INIT_FIELD_VALUES,
  );

  // useEffect(() => {
  //   setFieldValues((prevFieldValues) => ({
  //     ...prevFieldValues,
  //     photo: '',
  //   }));
  // }, [article]);

  useEffect(() =>
    setFieldValues((prevFieldValues) => {
      return produce(prevFieldValues, (draft) => (draft.photo = ''));
    }),
  );
  // setFieldValues(
  //   produce((draft) => {
  //     draft.photo = '';
  //   }),
  // );

  const handleSubmit = (e) => {
    e.preventDefault();

    // fieldValues : 객체 (except 파일)
    // 파일을 업로드할려면, FormData 인스턴스를 써야합니다.
    const formData = new FormData();
    Object.entries(fieldValues).forEach(([name, value]) => {
      if (Array.isArray(value)) {
        const fileList = value;
        fileList.forEach((file) => formData.append(name, file));
      } else {
        formData.append(name, value);
      }
    });

    saveRequest({
      data: formData,
    }).then((response) => {
      const savedPost = response.data;
      if (handleDidSave) handleDidSave(savedPost);
    });
  };

  return (
    <div>
      <H2>Article Form</H2>

      {saveLoading && <LoadingIndicator>저장 중 ...</LoadingIndicator>}
      {saveError &&
        `저장 중 에러가 발생했습니다. (${saveError.response.status} ${saveError.response.statusText})`}

      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <input
            name="title"
            value={fieldValues.title}
            onChange={handleFieldChange}
            type="text"
            className="p-1 bg-gray-100 w-full outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
          {saveErrorMassages.title &&
            saveErrorMassages.title.map((message, index) => (
              <p key={index} className="text-xs text-red-400">
                {message}
              </p>
            ))}
        </div>

        <div className="my-3">
          <textarea
            name="content"
            value={fieldValues.content}
            onChange={handleFieldChange}
            className="p-1 bg-gray-100 w-full h-80 outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
          {saveErrorMassages.content &&
            saveErrorMassages.content.map((message, index) => (
              <p key={index} className="text-xs text-red-400">
                {message}
              </p>
            ))}
        </div>

        {/* 사진 */}
        <div className="my-3">
          <input
            type="file"
            accept=".png .jpg .jpeg"
            name="photo"
            // value 는 지정하지 않음, 내가 가지고 있지 않으니까!
            onChange={handleFieldChange}
          />
          {saveErrorMassages.photo &&
            saveErrorMassages.photo.map((message, index) => (
              <p key={index} className="text-xs text-red-400">
                {message}
              </p>
            ))}
        </div>

        <div className="my-3">
          <Button>저장하기</Button>
        </div>
      </form>
      <DebugStates
        article={article}
        getError={getError}
        getLoading={getLoading}
        fieldValues={fieldValues}
        saveErrorMassages={saveErrorMassages}
      />
    </div>
  );
}

export default ArticleForm;
