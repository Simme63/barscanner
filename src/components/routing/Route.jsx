import React from "react";
import { RouteAtom } from "../../App";
import { useAtom } from "jotai";

export default function Route({ children, path }) {
  const [currentRoute, setRoute] = useAtom(RouteAtom);

  console.log(currentRoute);

  return <div hidden={currentRoute !== path}>{children}</div>;
}
