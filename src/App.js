import React from 'react';
import {
  useLocation,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import { DemoConfig } from './demos';
import Resume from './resume';


export default function App() {
  const location = useLocation();

  if (location.pathname === '/resume') {
    return <Resume />
  }
  
  return (
    <div className='app'>
      <nav>
        <h1>React 课程 Demo</h1>
        <ul>
          {
            DemoConfig.map(demo => {
              const { name } = demo;
              return (
                <li className='demo-item' key={name}>
                  <Link to={`/${name}`}>{name}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
      <hr />

      <Routes>
        {
          DemoConfig.map(demo => {
            const { name, component } = demo;
            return (
              <Route key={name} path={`/${name}`} element={component} />
            )
          })
        }
      </Routes>
    </div>
  )
}
