import React from "react";
import { Product } from "../api";

export default function ProductTable({
  products,
  filterText,
  inStockOnly
}: { products: Product[] } & { filterText: string; inStockOnly: boolean }) {
  const rows: JSX.Element[] = [];
  let lastCategory: string;

  products.forEach(product => {
    if (inStockOnly && !product.stocked) return;
    if (product.name.indexOf(filterText) === -1) return;
    if (product.category !== lastCategory)
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    rows.push(
      <ProductRow
        stocked={product.stocked}
        name={product.name}
        price={product.price}
        key={product.category}
      />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export const ProductCategoryRow = ({ category }: Pick<Product, "category">) => (
  <th colSpan={2} style={{ fontWeight: "bold" }}>
    {category}
  </th>
);

export const ProductRow = ({
  stocked,
  name,
  price
}: Omit<Product, "category">) => (
  <tr className="product">
    <td style={{ color: stocked ? "black" : "red" }}>{name}</td>
    <td>{price}</td>
  </tr>
);
