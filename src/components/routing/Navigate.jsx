import React from "react";
import { RouteAtom } from "../../App";
import { useAtom } from "jotai";

export default function Navigate({ children, path }) {
  const [route, setRoute] = useAtom(RouteAtom);

  return (
    <button
      onClick={() => {
        window.history.pushState({ page: "new-page" }, "", path);
        setRoute(document.location.pathname);
      }}
    >
      {children}
    </button>
  );
}
