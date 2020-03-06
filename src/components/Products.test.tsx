import React from "react";
import { render } from "enzyme";

import ProductTable, { ProductCategoryRow, ProductRow } from "./Products";
import { api } from "../api";

const filterText = "";
const inStockOnly = false;

const stockedCount = api.filter(({ stocked }) => stocked).length;

describe("ProductTable", () => {
  test("two <th/> element in thead", () => {
    expect(
      render(
        <ProductTable
          products={api}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      ).find("thead > tr > th").length
    ).toBe(2);
  });
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

describe("Category Header", () => {
  test("show category text", () => {
    const category = "Sporting Goods";
    expect(render(<ProductCategoryRow category={category} />).text()).toBe(
      category
    );
  });
});

describe("ProductRow", () => {
  const stocked = render(<ProductRow {...api[0]} />);
  const notStocked = render(<ProductRow {...api[2]} />);
  test("Show correctly Product name and Price", () => {
    expect(stocked.text()).toBe(api[0].name + api[0].price);
  });
  test("stocked as show black text", () => {
    expect(
      stocked
        .find("td")
        .first()
        .css("color")
    ).toBe("black");
  });
  test("not stocked as show red text", () => {
    expect(
      notStocked
        .find("td")
        .first()
        .css("color")
    ).toBe("red");
  });
});
