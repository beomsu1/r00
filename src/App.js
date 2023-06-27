import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';
import LoopEx from './components/LoopEx';
import LoopEx2 from './components/LoopEx2';
import React from 'react';
import ProductList from './components/product/ProductList';

function App() {

  const product= [
    {pno:1 , pname:'상품1' , price : 3000},
    {pno:2 , pname:'상품2' , price : 5000},
    {pno:3 , pname:'상품3' , price : 7000},
  ]

  return (
    <div className="App">
      <header className="App-header">
      <ProductList/>
      </header>
    </div>
  );
}

export default App;
