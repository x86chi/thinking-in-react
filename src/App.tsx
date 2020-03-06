import React, { useState } from 'react';
import './App.css';
import ProductTable from './components/Products';

import { api } from './api';
import SearchBar from './components/SearchBar';

function App() {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        setFilterText={setFilterText}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable
        products={api}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </>
  );
}

export default App;
