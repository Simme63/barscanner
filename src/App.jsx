import { useState } from "react";
import List from "./components/List";
import DigitalClock from "./components/Clock";
import Mat from "./components/Matsedel";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles/main.css";

const queryClient = new QueryClient();

function App() {
  const [rote, setrote] = useState("/");

  return (
    <>
      <button
        hidden={rote !== "/"}
        onClick={() => {
          window.history.pushState({ page: "new-page" }, "", "melker");

          setrote(document.location.pathname);
        }}
      >
        Go to skibidi
      </button>
      <button
        hidden={rote !== "/melker"}
        onClick={() => {
          window.history.pushState({ page: "new-page" }, "", "/");

          setrote(document.location.pathname);
        }}
      >
        Go back bro
      </button>
      <div hidden={rote !== "/"}>
        <DigitalClock />
        <List />

        <QueryClientProvider client={queryClient}>
          <Mat />
        </QueryClientProvider>
      </div>

      <div hidden={rote !== "/melker"}></div>
    </>
  );
}

export default App;
