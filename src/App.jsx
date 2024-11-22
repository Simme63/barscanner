import { useState } from "react";
import List from "./components/List";
import DigitalClock from "./components/Clock";
import Mat from "./components/Matsedel";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles/main.css";
import { atom } from "jotai";
import Navigate from "./components/routing/Navigate";
import Route from "./components/routing/Route";
import { useAtom } from "jotai";

const queryClient = new QueryClient();
export const RouteAtom = atom("/");

function App() {
  const [route, setRoute] = useAtom(RouteAtom);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Route path="/">
          <div className="flex flex-col justify-between gap-5">
            <div className="flex flex-row">
              <List />
              <div className="flex flex-col justify-center">
                <DigitalClock />
                <Mat />
              </div>
            </div>
            <footer className="bg-indigo-950 w-full h-20">
              <div className="flex p-3 w-fit h-full bg-slate-300 hover:bg-cyan-500 justify-center">
                <Navigate path="/statistics">Statistics</Navigate>
              </div>
            </footer>
          </div>
        </Route>
        <Route path="/statistics">
          <div className="flex flex-row justify-between gap-5">
            <h1 className="text-[15rem] text-white">sigma</h1>
          </div>
          <footer className="bg-indigo-950 w-full h-20">
            <div className="flex p-5 w-fit h-full bg-slate-300 hover:bg-cyan-500 justify-center">
              <Navigate path="/">back</Navigate>
            </div>
          </footer>
        </Route>
      </QueryClientProvider>
    </>
  );
}

export default App;
