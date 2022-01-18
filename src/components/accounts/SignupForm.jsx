import { useApiAxios } from 'api/base';
import Button from 'components/Button';
import useFieldValues from 'hooks/useFieldValues';
import { useNavigate } from 'react-router-dom';

const INITIAL_FIELD_VALUES = { username: '', password: '', password2: '' };

function SignupForm() {
  const navigate = useNavigate();

  const { fieldValues, handleFieldChange } =
    useFieldValues(INITIAL_FIELD_VALUES);

  const [{ loading, error, errorMessage }, saveRequest] = useApiAxios(
    { url: '/accounts/api/signup/', method: 'POST' },
    { manual: true },
  );
  //   const handleDidSave=()=>{()=> navigate('accounts/login')}

  const handleSubmit = (e) => {
    e.preventDefault();

    saveRequest({ data: fieldValues }).then().catch().finally();

    saveRequest({
      data: fieldValues,
    }).then(() => {
      navigate('/accounts/login/');
      //   if (handleDidSave) handleDidSave(savedUser);
    });
  };
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            value={fieldValues.username}
            placeholder="username"
            onChange={handleFieldChange}
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={fieldValues.password}
            placeholder="password"
            onChange={handleFieldChange}
          />
        </div>

        <div>
          <input
            type="password"
            name="password2"
            value={fieldValues.password2}
            placeholder="same password"
            onChange={handleFieldChange}
          />
        </div>
        <Button>Sign UP</Button>
      </form>
    </div>
  );
}

export default SignupForm;
