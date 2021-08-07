const { getGifs } = require("../../helpers/getGifs");

describe("pruebas en getGifs Fetch", () => {
  test("debe de traer 10 elementos ", async () => {
    const gifs = await getGifs("One Punch");
    expect(gifs.length).toBe(10);
  });

  test("debe de ser un arreglo vacio ", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
