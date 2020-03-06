import React from "react";
import { render } from "enzyme";

import ProductTable, { ProductCategoryRow, ProductRow } from "./Products";
import { api } from "../api";

describe("ProductTable", () => {
  const rendered = render(<ProductTable products={api} />);
  test("two <th/> element in thead", () => {
    expect(rendered.find("thead > tr > th").length).toBe(2);
  });
  test("two <th/> element in tbody", () => {
    expect(rendered.find("tbody > tr > th").length).toBe(2);
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
