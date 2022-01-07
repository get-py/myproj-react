function DebugStates(props) {
  return (
    <div>
      <pre className="text-xs bg-gray-100 p-1 border border-gray-300 overflow-x-scroll h-80">
        {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  );
}
export default DebugStates;
