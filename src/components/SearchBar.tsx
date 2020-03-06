import React, { Dispatch, SetStateAction } from 'react';

export type SearchBarProps = {
  filterText: string;
  inStockOnly: boolean;
  setFilterText: Dispatch<SetStateAction<string>>;
  setInStockOnly: Dispatch<SetStateAction<boolean>>;
};

export default function SearchBar({
  filterText,
  inStockOnly,
  setFilterText,
  setInStockOnly
}: SearchBarProps) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search.."
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
      />
      <p>
        <input
          type="checkbox"
          style={{ marginRight: '1em' }}
          checked={inStockOnly}
          onChange={e => setInStockOnly(!inStockOnly)}
        />
        Only show products in stock
      </p>
    </form>
  );
}
