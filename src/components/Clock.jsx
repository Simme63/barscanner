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

  return (
    <div className="flex justify-end text-2xl font-semibold text-gray-800 bg-white rounded-md px-4 py-2">
      {formatTime(time)}
    </div>
  );
}

export default DigitalClock;
