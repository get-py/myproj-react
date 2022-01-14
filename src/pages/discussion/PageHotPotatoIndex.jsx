import Button from 'components/Button';
import HotPotatoList from 'components/discussion/HotPotatoList';
import { useNavigate } from 'react-router-dom';

function PageHotPotatoIndex() {
  const navigate = useNavigate();
  return (
    <div>
      <h1> [HotPotato ]</h1>
      <Button onClick={() => navigate('/hotpotatos/new/')}>new</Button>
      <HotPotatoList />
    </div>
  );
}

export default PageHotPotatoIndex;
