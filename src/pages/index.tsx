import { GetStaticProps, NextPage } from "next";

import { Grid } from "@nextui-org/react";

import { MainLayout } from "../components/layouts";
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import { PokemonCard } from "../components/pokemon";
import Image from "next/image";

interface Props {
	pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
	return (
		<MainLayout title="Lista de Pokémons">
			<Grid.Container gap={2} justify="flex-start">
				{pokemons.map((pokemon) => (
					<PokemonCard key={pokemon.id} {...pokemon} />
				))}
			</Grid.Container>
		</MainLayout>
	);
};

// Executes in server-side in build time
// In dev mode it executes with every request to this page
// Use this every time we know that this are the params that the page will require
export const getStaticProps: GetStaticProps = async (ctx) => {
	const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

	const pokemons: SmallPokemon[] = data.results.map(
		(pokemon: any, index: number) => ({
			...pokemon,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
				index + 1
			}.svg`,
			id: index + 1,
		})
	);

	return {
		props: {
			pokemons,
		},
	};
};

export default HomePage;
