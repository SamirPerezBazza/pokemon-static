import React, { useEffect, useState } from "react";

import { MainLayout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";
import { Card, Grid } from "@nextui-org/react";
import { FavoritePokemons } from "../../components/pokemon/";

const Favoritos = () => {
	const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

	useEffect(() => {
		setFavoritePokemons(localFavorites.pokemons);
	}, []);

	return (
		<MainLayout title="Favoritos">
			{favoritePokemons.length ? (
				<FavoritePokemons pokemons={favoritePokemons} />
			) : (
				<NoFavorites />
			)}
		</MainLayout>
	);
};

export default Favoritos;
