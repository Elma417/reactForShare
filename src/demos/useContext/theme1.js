import { useState } from 'react';

function Child(props) {
  const { theme } = props;
  return (
    <span>{theme}</span>
  )
}

function ThemeShow(props) {
  const { theme } = props;
  return (
    <div>
      theme is: <Child theme={theme} />
    </div>
  )
}

export default function App() {
  const [theme, setTheme]= useState('blue');
  return (
    <div>
      <button onClick={() => setTheme('red')}>
        changeTheme
      </button>
      <ThemeShow theme={theme}></ThemeShow>
    </div>
  )
}