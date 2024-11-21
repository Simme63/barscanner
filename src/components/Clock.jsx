import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <div className="flex items-center mr-28 justify-center">
      <div className="text-7xl font-semibold text-white rounded-md flex justify-centers">
        {formatTime(time)}
      </div>
    </div>
  );
}

export default DigitalClock;
