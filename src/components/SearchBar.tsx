import React from "react";

export default function SearchBar({
  filterText,
  inStockOnly
}: {
  filterText: string;
  inStockOnly: boolean;
}) {
  return (
    <form>
      <input type="text" placeholder="Search.." value={filterText} />
      <p>
        <input
          type="checkbox"
          style={{ marginRight: "1em" }}
          checked={inStockOnly}
        />
        Only show products in stock
      </p>
    </form>
  );
}
