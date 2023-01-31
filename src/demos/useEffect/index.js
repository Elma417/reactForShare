import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleResize = () => {
    console.log(count);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize, false);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        click me
      </button>
    </div>
  );
}