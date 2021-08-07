import React from "react";
import "@testing-library/jest-dom";
const { AddCategory } = require("../../components/AddCategory");
const { shallow } = require("enzyme");

describe("Pruebas en <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  //   clear mocks before tests
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("debe mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de cambiar la caja de texto ", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", {
      target: { value },
    });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("no debe de postear la informacion en submit ", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe de llamar al setcategories y limpiar la caja de texto ", () => {
    const value = "Hola Mundo";
    const input = wrapper.find("input");
    input.simulate("change", {
      target: { value },
    });

    const submit = wrapper.find("form");
    submit.simulate("submit", { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);

    // verify that it was called with a function
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
