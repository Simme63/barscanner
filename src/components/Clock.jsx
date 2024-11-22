import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour12: false,
    });
  };

  return (
    <div className="flex justify-center mt-4 ">
      <div className="text-7xl font-semibold text-black rounded-md">
        {formatTime(time)}
      </div>
    </div>
  );
}

export default DigitalClock;
