import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function Mat() {
	const { data } = useQuery({
		queryKey: ["sigma"],
		queryFn: async () => {
			const response = await fetch(
				`https://ntifoodpeople.vercel.app/api/food/day`
			);
			const data = await response.json();
			return data;
		},
	});

	if (data == undefined) return <>data pushed</>;

	return (
		<div className="bg-purple-900 rounded-3xl p-10 w-1/3">
			{data.items.map((item) => {
				return (
					<span
						className="text-white font-black text-base"
						key={item.title}
					>
						<h3 className="text-5xl">{item.title}</h3>
						<br />
						<p
							dangerouslySetInnerHTML={{
								__html: item.description,
							}}
						></p>
						<br />
					</span>
				);
			})}
		</div>
	);
}