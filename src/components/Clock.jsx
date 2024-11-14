import React, { useState, useEffect } from "react";

function DigitalClock() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => setTime(new Date()), 1000);
		return () => clearInterval(timer);
	}, []);

	const formatTime = (date) => {
		return date.toLocaleTimeString([], { hour12: false });
	};

	return <div>{formatTime(time)}</div>;
}

export default DigitalClock;
