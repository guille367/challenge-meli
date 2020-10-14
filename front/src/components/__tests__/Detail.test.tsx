import React from "react";
import { mount, shallow } from "enzyme";
import mockItemResponse from "./mocks/item_response_mock.json";
import Detail from "src/components/Detail";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "MLA878688742",
  }),
}));

jest.mock("src/hooks/items.hooks", () => ({
  ...jest.requireActual("src/hooks/items.hooks"),
  useSearchItemDetail: () => ({
    data: mockItemResponse,
    execute: jest.fn(),
  }),
}));

describe("Detail component integration", () => {
  it("Should show the item", async (done) => {
    const component = mount(<Detail />);

    expect(component.find("#item-image").length).toBe(1);
    expect(component.find("#item-conditions").length).toBe(1);
    expect(component.find("#item-conditions").html()).toContain("Nuevo");
    expect(component.find("#item-description").length).toBe(1);

    done();
  });
});
