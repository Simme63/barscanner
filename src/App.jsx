import { useState } from "react";

import Time from "./components/Dig-klock";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Time />
    </div>
  );
}

export default App;
