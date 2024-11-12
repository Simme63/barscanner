import React, { useEffect } from "react";

const Timedreset = (setStudentList) => {
  const currentDate = new Date();
  const time = currentDate.getHours();
  let timer = false;

  function timerFunction() {
    timer = true;
    if (timer) {
      console.log("boo");
      timer = false;
    }
  }

  useEffect(() => {
    if (time === 0) {
      setStudentList([]);
    }
    setTimeout(timerFunction(), 6000);
  }, [timer]);

  return;
};

export default Timedreset;
