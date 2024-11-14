import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function Mat() {
	const { data } = useQuery({
		queryKey: ["sigma"],
		queryFn: async () => {
			const response = await fetch(
				`https://ntifoodpeople.vercel.app/api/food/week`
			);
			const melker = await response.json();
			return melker;
		},
	});

	if (data == undefined) return <>data pushed</>;

	return (
		<div className="flex flex-col justify-between gap-5 items-center">
			<div className="bg-pink-700/50 rounded-3xl p-10">
				{data.items.map((item) => {
					return (
						<span
							className="text-yellow-300 font-black text-base"
							key={item.title}
						>
							<h3>{item.title}</h3>
							<p
								dangerouslySetInnerHTML={{
									__html: item.description,
								}}
							></p>
						</span>
					);
				})}
			</div>
		</div>
	);
}
