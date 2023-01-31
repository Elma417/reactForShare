import { useState, useMemo } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  // const initCount = useMemo(() => count, []);
  const initCount = useMemo(() => count, [count]);

  return (
    <div>
      <p>count {count}</p>
      <p>initCount {initCount}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}