import React, { SetStateAction } from "react";

export default function SearchBar({
  filterText,
  inStockOnly,
  setFilterText,
  setInStockOnly
}: {
  filterText: string;
  inStockOnly: boolean;
  setFilterText: React.Dispatch<SetStateAction<string>>;
  setInStockOnly: React.Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search.."
        value={filterText}
        onChange={e => {
          setFilterText(e.target.value);
        }}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={e => setInStockOnly(!inStockOnly)}
        />{" "}
        Only show products in stock
      </p>
    </form>
  );
}
