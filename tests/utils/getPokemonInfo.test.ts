import { getPokemonInfo } from "../../utils";
import "@testing-library/jest-dom";

describe('Pruebas en el api getPokemonInfo', () => {
  it('Debe retornar la info de algún pokemon existente a través del id', async () => {
    const pokemon = await getPokemonInfo("1");

    expect(pokemon).not.toBeNull();
    expect(pokemon).toHaveProperty("name");
    expect(pokemon).toHaveProperty("id");
    expect(pokemon).toHaveProperty("sprites");

  });

  it('Debe retornar la info de algún pokemon existente a través del nombre', async () => {
    const pokemon = await getPokemonInfo("charizard");

    expect(pokemon).not.toBeNull();
    expect(pokemon).toHaveProperty("name");
    expect(pokemon).toHaveProperty("id");
    expect(pokemon).toHaveProperty("sprites");

  });

  it('Debe retornar null en caso de que el pokemon no exista', async () => {
    const pokemon = await getPokemonInfo("abc");

    expect(pokemon).toBeNull();

  });
})