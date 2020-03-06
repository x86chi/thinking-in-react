import React from "react";
import { render } from "enzyme";

import ProductTable, { ProductCategoryRow, ProductRow } from "./Products";
import { api } from "../api";

const filterText = "";
const inStockOnly = false;

const stockedCount = api.filter(({ stocked }) => stocked).length;

describe("ProductTable", () => {
  describe("filter to inStock false", () => {
    const rendered = render(
      <ProductTable
        products={api}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    );
    test("two <th/> element in tbody", () => {
      expect(rendered.find("tbody > tr > th").length).toBe(2);
    });
    test(`${api.length} Product in tbody`, () => {
      expect(rendered.find("tbody > tr.product").length).toBe(api.length);
    });
  });

  describe("filter to inStock true", () => {
    const rendered = render(
      <ProductTable
        products={api}
        filterText={filterText}
        inStockOnly={!inStockOnly}
      />
    );
    test("two <th/> element in tbody", () => {
      expect(rendered.find("tbody > tr > th").length).toBe(2);
    });
    test(`${stockedCount} Product in tbody`, () => {
      expect(rendered.find("tr.product").length).toBe(stockedCount);
    });
  });

  describe(`filterText as ${api[0].name}`, () => {
    const rendered = render(
      <ProductTable
        products={api}
        filterText={api[0].name}
        inStockOnly={false}
      />
    );
    expect(rendered.find("tr.product").length).toBe(1);
  });
});

