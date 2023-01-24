import { Card, Grid, Row, Text } from "@nextui-org/react";
import React, { FC } from "react";
import { SmallPokemon } from "../../interfaces";
import { useRouter } from "next/router";

export const PokemonCard: FC<SmallPokemon> = ({ id, image, name }) => {
	const router = useRouter();

	const onPokemonClick = () => {
		router.push(`/name/${name}`);
	};

	return (
		<Grid key={id} xs={6} md={2} xl={1}>
			<Card isHoverable isPressable onClick={onPokemonClick}>
				<Card.Body css={{ p: 1 }}>
					<Card.Image
						alt={`pokemon no. ${id}`}
						src={image}
						width="100%"
						height={140}
					/>
				</Card.Body>
				<Card.Footer>
					<Row justify="space-between">
						<Text transform="capitalize">{name}</Text>
						<Text># {id}</Text>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	);
};
