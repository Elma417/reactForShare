import { useState, useEffect, useRef } from 'react';

function usePrev(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export default function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrev(count);

  return (
    <div>
      <p>prev {prevCount}</p>
      <p>now {count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}