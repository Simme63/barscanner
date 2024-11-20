import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function Mat() {
  const { data } = useQuery({
    queryKey: ["sigma"],
    queryFn: async () => {
      const response = await fetch(
        `https://ntifoodpeople.vercel.app/api/food/week`
      );
      const data = await response.json();
      return data;
    },
  });

  if (data == undefined) return <>data pushed</>;

  return (
    <div className="bg-white rounded-3xl p-10 mt-6 w-1/3 ring-16 ring-purple-900">
      {data.items.map((item) => {
        return (
          <span className="text-black font-semibold text-base" key={item.title}>
            <h3 className="text-5xl">{item.title}</h3>
            <br />
            <p
              className="font-light text-xl"
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
