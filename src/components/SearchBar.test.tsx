import React from "react";
import { render } from "enzyme";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  const wrapper = render(<SearchBar />);
  describe("Input box", () => {
    test("text type input", () => {
      expect(wrapper.find('input[type="text"]').length).toBeGreaterThan(0);
    });
    test('placeholder is "Search.."', () => {
      expect(
        wrapper.find('input[placeholder="Search.."]').length
      ).toBeGreaterThan(0);
    });
  });

  describe("Check box", () => {
    test("check type input", () => {
      expect(wrapper.find('input[type="checkbox"]').length).toBeGreaterThan(0);
    });
  });

  describe("text content is", () => {
    const content = "Only show products in stock";
    test(content, () => {
      expect(wrapper.text()).toBe(content);
    });
  });
});
