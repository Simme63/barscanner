import { useState } from "react";
import Youtube from "./components/Youtube";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>Barcode</h1>
			<Youtube></Youtube>
		</div>
	);
}

export default App;
