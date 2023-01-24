import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { Navbar } from "../ui";

interface IMainLayoutProps extends PropsWithChildren {
	title?: string;
}

export const MainLayout: FC<IMainLayoutProps> = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>{title || "Pokemon App"}</title>
				<meta name="author" content="Samir Perez" />
				<meta
					name="description"
					content={`Información sobre el pokemon ${title}`}
				/>
				<meta
					name="keywords"
					content={`${title}, pokedex, pokemons, pokemon`}
				/>
			</Head>
			<Navbar />
			<main
				style={{
					padding: "0px 20px",
				}}
			>
				{children}
			</main>
		</>
	);
};
