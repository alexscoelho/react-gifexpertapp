import React from "react";
import "@testing-library/jest-dom";
const { GifGrid } = require("../../components/GifGrid");
const { shallow } = require("enzyme");
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

// using mocks to fake api request
describe("Pruebas en <GifGrid />", () => {
  const category = "pokemon";
  test("debe mostrarse correctamente  ", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items cuando se cargan imagenes useFetchGifs ", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://cualquier-cosa.jpg",
        title: "Cualquier cosa",
      },
      {
        id: "CDB",
        url: "https://cualquier-cosa.jpg",
        title: "Cualquier cosa",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
