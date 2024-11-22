import React, { useState, useEffect } from "react";

function useResetMidnight(setStudents) {
  useEffect(() => {
    // Function to check if it's before 11 AM or after 1 PM
    const checkTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      // Reset the list before 11 AM or after 1 PM
      if (hours < 11 || hours > 13 && minutes >= 15) {
        setStudents([]);
      }
    };

    // Check every minute (60_000 milliseconds)
    const intervalId = setInterval(checkTime, 60_000);

    // Cleanup interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [setStudents]); // Dependency on setStudents to avoid re-running unnecessarily
}

export default useResetMidnight;
