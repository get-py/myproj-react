import HotPotatoForm from 'components/discussion/HotPotatoForm';
import { useNavigate, useParams } from 'react-router-dom';

function PageHotPotatoForm() {
  const navigate = useNavigate();
  const { hotpotatoId } = useParams();
  return (
    <HotPotatoForm
      hotpotatoId={hotpotatoId}
      handleDidSave={(savedHotPotato) =>
        navigate(`/hotpotatos/${savedHotPotato.id}/`)
      }
    />
  );
}
export default PageHotPotatoForm;
