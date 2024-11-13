import React, { useEffect } from "react";
<link rel="Main.css" href="../styles/Main.css" />;

// function clearField(value) {}

const Invistextfield = ({ setStudentId, studentId }) => {
  useEffect(() => {
    document.getElementById("InvisTextField").select();
  }, []);

  function clearInput() {
    let increment = 0;
    if (increment > 0) {
      clearTimeout(clearTimeoutId);

      let clearTimeoutId = setTimeout(() => {
        document.getElementById("InvisTextField").value = "";
        setStudentId("");
      }, 1225);
    } else {
      let clearTimeoutId = setTimeout(() => {
        document.getElementById("InvisTextField").value = "";
        setStudentId("");
      }, 1225);
    }
  }

  // invisible text box thats always selected that takes the scanner info and adds it to

  return (
    <div className="InvisTextField">
      <input
        id="InvisTextField"
        type="text"
        value={studentId}
        onBlur={(e) => e.target.focus()}
        onChange={(e) => {
          setStudentId(e.target.value.toLowerCase());
          clearInput();
        }}
      />
    </div>
  );
};

export default Invistextfield;
