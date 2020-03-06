import React from "react";
import { render } from "enzyme";
import SearchBar from "./SearchBar";

const filterText = "Hello, World!";
const inStockOnly = false;

describe("SearchBar", () => {
  const wrapper = render(
    <SearchBar filterText={filterText} inStockOnly={inStockOnly} />
  );
  describe("Input box", () => {
    test("text type input", () => {
      expect(wrapper.find('input[type="text"]').length).toBeGreaterThan(0);
    });
    test('placeholder is "Search.."', () => {
      expect(
        wrapper.find('input[placeholder="Search.."]').length
      ).toBeGreaterThan(0);
    });
    test(`filterText be '${filterText}'`, () => {
      expect(wrapper.find('input[type="text"]').val()).toBe(filterText);
    });
  });

  describe("Check box", () => {
    const checkbox = wrapper.find('input[type="checkbox"]');
    test("check type input", () => {
      expect(checkbox.length).toBeGreaterThan(0);
    });
    test("is checked? " + inStockOnly, () => {
      expect(checkbox.prop("checked")).toBe(inStockOnly);
    });
  });

  describe("text content is", () => {
    const content = "Only show products in stock";
    test(content, () => {
      expect(wrapper.text()).toBe(content);
    });
  });
});
