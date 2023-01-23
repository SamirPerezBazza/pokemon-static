import { Grid, Card } from "@nextui-org/react";
import React, { FC } from "react";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

type Props = {
	pokemons: number[];
};

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
	return (
		<Grid.Container gap={2} direction="row" justify="flex-start">
			{pokemons.map((id) => (
				<FavoritePokemonCard key={id} id={id} />
			))}
		</Grid.Container>
	);
};
