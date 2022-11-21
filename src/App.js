import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './components/Catalog/Catalog';
import Header from './components/Header/Header';
import ProductInfo from './components/ProductInfo/ProductInfo';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' exact element={<Catalog />} />
        <Route path='/info-product' exact element={<ProductInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
