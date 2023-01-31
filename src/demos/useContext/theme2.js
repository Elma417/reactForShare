import { useState, useContext, createContext } from 'react';

const ThemeContext = createContext('');

function Child(props) {
  const theme = useContext(ThemeContext);
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
  const [theme, setTheme] = useState('blue');
  return (
    <div>
      <button onClick={() => setTheme('red')}>
        changeTheme
      </button>
      <ThemeContext.Provider value={theme}>
        <ThemeShow />
      </ThemeContext.Provider>
    </div>
  )
}