import React from 'react';
import './App.css';
import Users from './component/users';
import Products from './component/products';


function App() {
  return (
    <div className="App">
         <h1>Categoryes/Products</h1>
         <Products />
         <div>_______________________________________________________________</div>
         <Users />
    </div>
  );
}

export default App;