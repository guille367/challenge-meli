import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("App component", () => {
  it("should display 'hola!' text", () => {
    const component = shallow(<App />);
    expect(component.html()).toContain("Hola!");
  });
});
