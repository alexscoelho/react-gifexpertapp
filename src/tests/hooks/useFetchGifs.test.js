const { useFetchGifs } = require("../../hooks/useFetchGifs");
import { renderHook } from "@testing-library/react-hooks";

describe("pruebas en el hook useFetchGifs", () => {
  test("debe de retornar el estado inicial ", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Pokemon")
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("debe de retornar un arreglo de imagenes y loading false ", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Pokemon")
    );

    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
