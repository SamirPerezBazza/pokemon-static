import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MainLayout } from "../../../components/layouts";

describe("Pruebas sobre MainLayout", () => {
	it("Debe montar el componente", async () => {
		render(
			<MainLayout>
				<h1 role="children">Hola mundo</h1>
			</MainLayout>
		);

		expect(screen.getByRole("children")).toBeInTheDocument();
		expect(screen.getByText("Pokémon")).toBeInTheDocument();
	});
});
