import React, { useEffect, useReducer } from "react";

export default function Youtube() {
	const [, forceUpdate] = useReducer((x) => x + 1, 0);

	useEffect(() => {
		window.addEventListener("popstate", (event) => {
			forceUpdate();
		});
	}, []);

	return (
		<>
			<iframe
				className="tube"
				width="560"
				height="315"
				src="https://www.youtube.com/embed/WePNs-G7puA?si=2UQ4MSyGhsxv2Y16"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
			<button
				onClick={() => {
					window.history.pushState(
						{ page: "new-page" },
						"uh",
						"/skibidi_sigma"
					);
					forceUpdate();
				}}
			>
				{" "}
				fuck you
			</button>

			{window.location.pathname === "/skibidi_sigma" ? (
				<h1>Nigga pokemon</h1>
			) : (
				""
			)}
		</>
	);
}
