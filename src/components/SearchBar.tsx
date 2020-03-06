import React from "react";

export default function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search.." />
      <p>
        <input type="checkbox" style={{ marginRight: "1em" }} />
        Only show products in stock
      </p>
    </form>
  );
}
