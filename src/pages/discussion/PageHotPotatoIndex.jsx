import Button from 'components/Button';
import HotPotatoList from 'components/discussion/HotPotatoList';
import { useNavigate } from 'react-router-dom';

function PageHotPotatoIndex() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-2xl text-blue-900 mb-5"> [HotPotato ]</h1>
      <Button onClick={() => navigate('/hotpotatos/new/')}>new</Button>
      <div>
        <HotPotatoList />
      </div>
    </div>
  );
}

export default PageHotPotatoIndex;
