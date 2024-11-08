import { useState } from "react";

import Time from "./components/Dig-klock";
import Mat from "./components/Matsedel";
import Scan from "./components/Scan";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Time />

      <Scan />

      <Mat />
    </div>
  );
}

export default App;
