import { useState } from "react";

import Time from "./components/Dig-klock";
import Mat from "./components/Matsedel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Time />
      <Mat />
    </div>
  );
}

export default App;
