import Alert from 'components/Alert';

function Components() {
  return (
    <div>
      <h2 className="text-base">Components</h2>
      <h3 className="text-sm pb-2">Alert</h3>
      <Alert type="danger" message="Warning" />
      <Alert type="diamond" message="Diamond is never die" />
      <Alert type="success" message="success 메시지입니다" />
      <Alert type="info" message="info 메시지입니다." />
    </div>
  );
}

export default Components;
