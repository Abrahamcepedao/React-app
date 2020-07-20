import React from 'react';
import NavBar from './NavBar';
import Greeter from './Greeter';
import Counter from './Counter';
import TooglerMood from './TooglerMood';
import Cart from './Cart';
import './App.css';


const items = [
  { id: 1, name: 'Vegan pizza', price: 2.25, qty: 2},
  { id: 2, name: 'Vegan hamburguer', price: 1.99, qty: 3 },
  { id: 3, name: 'Vegan ice-cream', price: 3.50, qty: 1 }
]

function App() {
  return (
    <div>
      <Cart initialItems={items} />
      <NavBar />
      <h1>Hello World - React!</h1>
      <Greeter name="Karen" age="19" excitement={4}/>
      <Greeter name="Abraham" age="20" excitement={2}/>
      <Counter step={4} />
      <TooglerMood/>
    </div>
  );  
}

export default App;
