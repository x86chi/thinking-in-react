import React from "react";

export type SearchBarProps = {
  filterText: string;
  inStockOnly: boolean;
};

export default function SearchBar({ filterText, inStockOnly }: SearchBarProps) {
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
