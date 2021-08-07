import React from "react";
import "@testing-library/jest-dom";
import GifExpertApp from "../GifExpertApp";

const { shallow } = require("enzyme");

describe("Pruebas en <AddCategory />", () => {
  test("debe hacer math con el snapshot ", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar un alista de categorias ", () => {
    const categories = ["One Punch", "Dragon Ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
