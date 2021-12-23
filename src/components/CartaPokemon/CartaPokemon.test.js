import React from "react";
import { shallow } from "enzyme";
import CartaPokemon from "./CartaPokemon";

describe("CartaPokemon", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CartaPokemon />);
    expect(wrapper).toMatchSnapshot();
  });
});
