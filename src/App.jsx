import { useState } from "react";
import List from "./components/List";
import DigitalClock from "./components/Clock";
import Mat from "./components/Matsedel";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles/main.css";

const queryClient = new QueryClient();

function App() {
	const [route, setRoute] = useState("/");
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<div hidden={route !== "/"}>
					<div className="flex flex-row justify-between gap-5">
						<DigitalClock />
						<List />
						<Mat />
					</div>
				</div>
				<div hidden={route !== "/statistics"}>
					<div className="flex flex-row justify-between gap-5">
						<h1 className="text-[15rem]">Hi</h1>
					</div>
				</div>
			</QueryClientProvider>
			<div className="absolute bottom-10">
				{route === "/" && (
					<button
						onClick={() => {
							window.history.pushState(
								{ page: "new-page" },
								"",
								"statistics"
							);
							setRoute(document.location.pathname);
						}}
					>
						Go to statistics
					</button>
				)}

				{route === "/statistics" && (
					<button
						onClick={() => {
							window.history.pushState(
								{ page: "new-page" },
								"",
								"/"
							);
							setRoute(document.location.pathname);
						}}
					>
						Go back bro
					</button>
				)}
			</div>
		</>
	);
}

export default App;
