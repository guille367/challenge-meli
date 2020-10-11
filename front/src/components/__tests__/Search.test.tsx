import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Search from "../Search";

describe("Search component", () => {
  let component: ShallowWrapper;
  let spySubmit = jest.fn();

  beforeEach(() => {
    component = shallow(<Search />);
    Search.prototype.handleSubmit = spySubmit;
  });

  it("should render and contain a input and a submit button", () => {
    expect(component).toBeDefined();
    expect(component.find("#btn-submit").length).toBe(1);
    expect(component.find("#input-search").length).toBe(1);
  });

  it("should update the input value and button disabled value on input change event", () => {
    expect(component.find("#btn-submit").prop("disabled")).toBe(true);

    component.find("#input-search").simulate("change", {
      currentTarget: { value: "apple" },
    });

    expect(component.find("#input-search").prop("value")).toEqual("apple");
    expect(component.find("#btn-submit").prop("disabled")).toBe(false);
  });

  xit("should call the submit event when text is not null and button click event is triggered", () => {
    component.find("#input-search").simulate("change", {
      currentTarget: { value: "apple" },
    });

    component.find("#btn-submit").simulate("click");
  });
});
