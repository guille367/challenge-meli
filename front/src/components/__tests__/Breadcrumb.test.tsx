import React from "react";
import { mount } from "enzyme";
import mockCategoryResponse from "./mocks/category_response_mock.json";
import Breadcrumb from "../Breadcrumb";

jest.mock("src/hooks/breadcrumb.hooks", () => ({
  useSearchCategory: () => ({
    categoryData: mockCategoryResponse,
    execute: jest.fn(),
  }),
}));

describe("Detail component integration", () => {
  it("Should show the item", () => {
    const component = mount(<Breadcrumb categoryId="MLA3697" />);
    expect(component.find(".breadcrumb-item").length).toBe(4);
  });
});
