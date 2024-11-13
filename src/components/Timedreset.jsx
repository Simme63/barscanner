import React, { useEffect } from "react";

const Timedreset = (setStudentList) => {
  const currentDate = new Date();
  const time = currentDate.getHours();
  let timer = false;

  useEffect(() => {
    if (time === 0) {
      setStudentList([]);
    }
  });

  return;
};

export default Timedreset;
