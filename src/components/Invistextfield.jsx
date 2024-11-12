import React, { useEffect } from "react";

// function clearField(value) {}

const Invistextfield = ({ setStudentId, studentId }) => {
  useEffect(() => {
    document.getElementById("InvisTextField").select();
  }, []);

  // invisible text box thats always selected that takes the scanner info and adds it to

  return (
    <div className="InvisTextField">
      <input
        id="InvisTextField"
        type="text"
        value={studentId}
        onBlur={(e) => e.target.focus()}
        onChange={(e) => setStudentId(e.target.value)}
      />
    </div>
  );
};

export default Invistextfield;
