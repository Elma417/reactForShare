/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
let tag = 1;
export default function App() {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(2);
  // 只有初次渲染，才执行
  if (tag % 2) {
    const [unusedNum] = useState(1);
  }
  tag += 1;
  return (
    <div>
      <div>num: {num}</div>
      <div>
        <button onClick={() => setNum(num + 1)}>加 1</button>
        <button onClick={() => setNum(num - 1)}>减 1</button>
      </div>
      <hr />
      <div>num2: {num2}</div>
      <div>
        <button onClick={() => setNum2(num2 * 2)}>扩大一倍</button>
        <button onClick={() => setNum2(num2 / 2)}>缩小一倍</button>
      </div>
    </div>
  );
}