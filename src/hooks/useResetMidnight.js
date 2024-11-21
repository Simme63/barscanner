import React, { useState, useEffect } from "react";

function useResetMidnight(setStudents) {
  useEffect(() => {
    // Function to check if it's midnight and reset values
    const checkMidnight = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      if (hours >= 12 && hours <= 11 && minutes >= 30) {
        setStudents([]);
      }
    };

    // Check every minute (60_000 milliseconds)
    const intervalId = setInterval(checkMidnight, 60_000);

    // Cleanup interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
}

export default useResetMidnight;
