import React, { useEffect, useState } from "react";
import Invistextfield from "./Invistextfield";
import Timedreset from "./Timedreset";

const List = () => {
  const [studentList, setStudentList] = useState([]);
  const [studentId, setStudentId] = useState("");

  async function getUserById(id) {
    try {
      const response = await fetch(
        `https://ntifoodpeople.vercel.app/api/users/${id}`
      );
      const data = await response.json();
      console.log(data);
      setStudentList(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!studentId) return;
    getUserById(studentId);
    if (studentId) setStudentId("");
  }, [studentId]);

  return (
    <div>
      <ul>{studentList}</ul>

      <Invistextfield studentId={studentId} setStudentId={setStudentId} />
      <Timedreset setStudentList={setStudentList} />
    </div>
  );
};

export default List;
