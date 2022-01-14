import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import { useEffect } from 'react';
import HotPotatoSummary from './HotPotatoSummary';

function HotPotatoList() {
  const [{ data: hotpotatoList, loading, error }, refetch] = useApiAxios(
    '/discussion/api/hotpotatos/',
    { manual: true },
  );

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {hotpotatoList &&
        hotpotatoList.map((hotpotato) => (
          <HotPotatoSummary hotpotato={hotpotato} key={hotpotato.id} />
        ))}
      <DebugStates
        hotpotatoList={HotPotatoList}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default HotPotatoList;
