import React from "react";
const { shallow } = require("enzyme");
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem />", () => {
  const title = "Un Titulo";
  const url = "https://localhost.algo.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("debe de mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de tener un parrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });
  test("debe de tener imagen url y alt igual al de los props ", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });
  test("debe de tener animate__fadeInDown ", () => {
    const div = wrapper.find(".card");
    const _class = div.prop("className");
    expect(_class).toContain("animate__fadeInDown");
    // expect(_class.includes("animate__fadeInDown")).toBe(true);
  });
});
