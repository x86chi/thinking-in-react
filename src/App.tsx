import React, { useState } from "react";
import "./App.css";
import ProductTable from "./components/Products";

import { api } from "./api";
import SearchBar from "./components/SearchBar";

function App() {
  const [filterText] = useState("");
  const [inStockOnly] = useState(false);
  return (
    <>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} />
      <ProductTable products={api} />
    </>
  );
}

export default App;
