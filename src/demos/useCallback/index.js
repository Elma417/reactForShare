import { useState, useCallback } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const logCount = useCallback(() => {
    console.log(count);
  }, [count]);
 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        click me
      </button>
      <button onClick={logCount}>log count</button>
    </div>
  );
}