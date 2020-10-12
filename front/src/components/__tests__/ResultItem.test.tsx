import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import ResultItem from "../ResultItem";
import { IItemSearch } from "src/models/items.models";

const mockItem: IItemSearch = {
  id: "MLA863658357",
  condition: "new",
  free_shipping: true,
  picture: "http://http2.mlstatic.com/D_651180-MLA42227826734_062020-I.jpg",
  price: {
    amount: 48500,
    currency: "ARS",
    decimals: 0,
  },
  title:
    "iPad Apple 7ª Generación 2019 A2197 10.2  32gb Space Grey Con Memoria Ram 3gb",
};

describe("ResultItem component", () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<ResultItem item={mockItem} />);
  });

  it("Should render the component", () => {
    expect(component).toBeDefined();
  });

  it("Should render the free shipping mark", () => {
    expect(component.find("#free-shiping-mark").length).toBe(1);
  });
});
