import { useState } from 'react';

const flag = false;
// const arr = [1, 2, 3, 4, 5]
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
       <p>You clicked {count} times</p>
      {/* {
        flag && (
          <p>You clicked {count} times</p>
        ) 
      } */}
      {/* {
        arr.map((item, index) => (
          <p key={index}>num is: {item}</p>
        ))
      } */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
