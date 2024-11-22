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
  let today = new Date().getDay();

  function getWeekday(apiString) {
    return apiString.split(" - ")[0];
  }

  return (
    <div className="bg-white bg-opacity-30 rounded-3xl p-10 mt-5  drop-shadow-4xl">
      {data.items.map((item, index) => {
        return (
          <span
            className={`font-medium text-base ${
              today - 1 === index ? `text-[#a80038]` : `text-white`
            }`}
            key={item.title}
          >
            <h3
              className={`text-l ${
                today - 1 === index ? `text-[#a80038]` : `text-white`
              }`}
            >
              {getWeekday(item.title)}
            </h3>
            <br />
            <p
              className="font-light text-lg"
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
