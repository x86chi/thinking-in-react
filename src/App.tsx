import React from "react";
import "./App.css";
import ProductTable from "./components/Products";

import { api } from "./api";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <SearchBar />
      <ProductTable products={api} />
    </>
  );
}

export default App;
