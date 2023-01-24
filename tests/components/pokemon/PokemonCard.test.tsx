import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { PokemonCard } from "../../../components/pokemon";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Pruebas sobre FavoritePokemonCard", () => {
	it("Debe tener la imagen del pokémon", () => {
		useRouter.mockImplementationOnce(() => ({
			push: (id: number) => {},
		}));

		render(
			<PokemonCard
				id={1}
				image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
				name="bulbasaur"
				url=""
			/>
		);

		const imgElement = screen.getByAltText("pokemon no. 1");

		expect(imgElement).toHaveAttribute(
			"src",
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
		);
	});

	it("Debe tener el nombre y el id del pokemon", () => {
		useRouter.mockImplementationOnce(() => ({
			push: (id: number) => {},
		}));

		render(
			<PokemonCard
				id={1}
				image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
				name="bulbasaur"
				url=""
			/>
		);

		const name = screen.getByText("bulbasaur");
		const id = screen.getByText("# 1");

		expect(name).toBeInTheDocument();
		expect(id).toBeInTheDocument();
	});
});
