import React from 'react';
import NavBar from './NavBar';
import Greeter from './Greeter';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <h1>Hello World - React!</h1>
      <Greeter name="Karen" age="19" excitement={4}/>
      <Greeter name="Abraham" age="20" excitement={2}/>
      <Counter />
    </div>
  );  
}

export default App;
