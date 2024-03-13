import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter';
import OnChange from './components/OnChange';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { useState } from 'react';

function App() {
  let [login,setLogin] = useState(true)

  return(
  <div className='App'>
  
  {/* <Counter /> */}
  {/* <OnChange /> */}
  {(login==true)?<Dashboard />: <Login />}
  </div>
  )
}

export default App;
