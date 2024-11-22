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
import { dailyStudentState } from "./components/List";
import BubbleCanvas from "./components/BubbleBackground";

const queryClient = new QueryClient();
export const RouteAtom = atom("/");

function App() {
  const [route, setRoute] = useAtom(RouteAtom);
  const [dailystudents, setDailyStudents] = useAtom(dailyStudentState);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* Bubble canvas spans the entire app */}
        <div className="relative w-full h-screen overflow-hidden">
          <BubbleCanvas />

          {/* Content */}
          <div className="relative z-10">
            <Route path="/">
              <div className="flex flex-col justify-between gap-5">
                <div className="flex flex-row">
                  <List />
                  <div className="flex flex-col justify-center">
                    <DigitalClock />
                    <Mat />
                  </div>
                  <div className="flex p-3 w-40 h-full mt-auto text-white justify-end">
                    <Navigate path="/statistics">Statistics</Navigate>
                  </div>
                </div>
                <footer className=" w-full h-20"></footer>
              </div>
            </Route>
            <Route path="/statistics">
              <div className="flex flex-row justify-between gap-5">
                <h1 className="text-[15rem] text-white">sigma</h1>
                <p className="text-4xl mt-auto">
                  Number of students today: {dailystudents}
                </p>
              </div>
              <footer className=" w-full h-20">
                <div className="flex p-5 w-fit h-full bg-slate-300 hover:bg-cyan-500 justify-center">
                  <Navigate path="/">back</Navigate>
                </div>
              </footer>
            </Route>
          </div>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
