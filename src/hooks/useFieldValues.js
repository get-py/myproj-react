import { useCallback } from 'react';
import { useState } from 'react/cjs/react.development';

function useFieldValues(initialFieldValues) {
  const [fieldValues, setFieldValues] = useState(initialFieldValues);

  const clearFieldValues = useCallback(() => {
    setFieldValues(initialFieldValues);
  }, []);

  //함수 객체를 생성할 때, 의존성이 걸린 값이 변경시에만 함수를 재 생성함 useCallback

  const handleFieldChange = useCallback((e) => {
    const { name, value } = e.target;

    setFieldValues((prevFieldValues) => ({
      ...prevFieldValues,
      [name]: value,
    }));
  }, []);

  return { fieldValues, handleFieldChange, clearFieldValues, setFieldValues };
}

export default useFieldValues;
