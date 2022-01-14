import { useApiAxios } from 'api/base';
import Button from 'components/Button';
import DebugStates from 'components/DebugStates';
import H2 from 'components/H2';
import useFieldValues from 'hooks/useFieldValues';
import produce from 'immer';
import { useEffect } from 'react/cjs/react.development';

const INIT_FIELD_VALUES = { title: '', content: '', author: '' };

function HotPotatoForm({ hotpotatoId, handleDidSave }) {
  const [{ data: hotpotato, loading: getLoading, error: getError }] =
    useApiAxios(`/discussion/api/hotpotatos/${hotpotatoId}/`, {
      manual: !hotpotatoId,
    });

  const [
    {
      loading: saveLoading,
      error: saveError,
      errorMessages: saveErrorMessages,
    },
    saveRequest,
  ] = useApiAxios(
    {
      url: !hotpotatoId
        ? '/discussion/api/hotpotatos/'
        : `/discussion/api/hotpotatos/${hotpotatoId}/`,
      method: !hotpotatoId ? 'POST' : 'PUT',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange, setFieldValues, formData } =
    useFieldValues(hotpotato || INIT_FIELD_VALUES);

  useEffect(() => {
    setFieldValues(
      produce((draft) => {
        draft.photo = '';
      }),
    );
  }, [hotpotato]);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveRequest({
      data: formData,
    }).then((response) => {
      const savedHotPotato = response.data;
      if (handleDidSave) handleDidSave(savedHotPotato);
    });
  };

  return (
    <div>
      <H2>HotPotato Form</H2>

      <form onSubmit={handleSubmit}>
        <div>
          title
          <input
            type="text"
            name="title"
            value={fieldValues.title}
            onChange={handleFieldChange}
            className="outline-none p-2 w-full bg-slate-200 rounded-md focus:border focus:border-slate-500 my-3"
          />
        </div>

        <div>
          author
          <input
            type="text"
            name="author"
            value={fieldValues.author}
            onChange={handleFieldChange}
            className="outline-none p-2 w-full bg-slate-200 rounded-md focus:border focus:border-slate-500 my-3"
          />
        </div>

        <div>
          content
          <textarea
            name="content"
            value={fieldValues.content}
            onChange={handleFieldChange}
            className="outline-none p-2 w-full h-80 bg-slate-200 rounded-md focus:border focus:border-slate-500 my-3"
          />
        </div>

        <div>
          <input
            type="file"
            name="photo"
            onChange={handleFieldChange}
            accept=".jpg, .png, .jpeg"
            className="my-3"
          />
        </div>

        <div>
          <Button>저장하기</Button>
        </div>
      </form>
      <div className="my-3">
        <DebugStates
          hotpotato={hotpotato}
          getLoading={getLoading}
          getError={getError}
          fieldValues={fieldValues}
          saveErrorMessages={saveErrorMessages}
        />
      </div>
    </div>
  );
}
export default HotPotatoForm;
