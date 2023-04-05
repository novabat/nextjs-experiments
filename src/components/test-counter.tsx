const TestCounter = ({ count, handleClick }:any) => {
  return (
    <>
      <div>Render Count: {count}</div>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};
export default TestCounter;
