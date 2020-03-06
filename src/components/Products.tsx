import React from "react";
import { Product } from "../api";

export default function ProductTable({ products }: { products: Product[] }) {
  const rows: JSX.Element[] = [];
  let lastCategory: string;

  products.forEach(product => {
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

const ProductCategoryRow = ({ category }: Pick<Product, "category">) => (
  <span style={{ fontWeight: "bold" }}>{category}</span>
);

const ProductRow = ({ stocked, name, price }: Omit<Product, "category">) => (
  <tr>
    <td style={{ color: stocked ? "black" : "red" }}>{name}</td>
    <td>{price}</td>
  </tr>
);
