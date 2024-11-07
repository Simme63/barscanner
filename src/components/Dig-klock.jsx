import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return <div>{formatTime(time)}</div>;
}

export default DigitalClock;
