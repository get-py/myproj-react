import HotPotatoDetail from 'components/discussion/HotPotatoDetail';
import { useParams } from 'react-router-dom';

function PageHotPotatoDetail() {
  const { hotpotatoId } = useParams();

  return (
    <div>
      <HotPotatoDetail hotpotatoId={hotpotatoId} />
    </div>
  );
}
export default PageHotPotatoDetail;
