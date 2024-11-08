import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function Mat() {
  const { data } = useQuery({
    queryKey: ["sigma"],
    queryFn: async () => {
      const response = await fetch("http://192.168.198.178:3000/mat");
      const melker = await response.json();
      return melker;
    },
  });

  if (data == undefined) return <>data pushed</>;

  return (
    <h1 dangerouslySetInnerHTML={{ __html: data.items[0].description }}></h1>
  );
}
