import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { FavoritePokemonCard } from "../../../components/pokemon/FavoritePokemonCard";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Pruebas sobre FavoritePokemonCard", () => {
	it("Debe tener la imagen del pokémon", () => {
		useRouter.mockImplementationOnce(() => ({
			push: (id: number) => {},
		}));

		render(<FavoritePokemonCard id={1} />);

		const imgElement = screen.getByAltText("pokemon no. 1");

		expect(imgElement).toHaveAttribute(
			"src",
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
		);
	});
});
