import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {

  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

    return { name: data.name, sprites: data.sprites, id: data.id }
  } catch (error) {
    return null;
  }
};
