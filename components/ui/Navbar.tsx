import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {
	const { theme } = useTheme();

	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "start",
				padding: "0px 20px",
				backgroundColor: theme?.colors.gray100.value,
			}}>
			<Image
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
				alt="App icon"
				width={70}
				height={70}
			/>

			<NextLink href="/">
				<Text color="white" h2>
					Pokémon
				</Text>
			</NextLink>

			<Spacer css={{ flex: 1 }} />

			<NextLink href="/favoritos">
				<Text color="white">Favoritos</Text>
			</NextLink>
		</div>
	);
};
