import React, { useEffect, useState } from "react";
import Invistextfield from "./Invistextfield";
import Timedreset from "./Timedreset";

const List = () => {
  const [studentList, setStudentList] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [currentStudent, setCurrentStudent] = useState([]);

  async function getUserById(id) {
    if (id.length >= 7) {
      try {
        const response = await fetch(
          `https://ntifoodpeople.vercel.app/api/users/${id}`
        );
        if (response) {
          const data = await response.json();
          console.log("data:", data);

          setStudentList((prevStudentList) => [...prevStudentList, data[0]]);

          setCurrentStudent((prevCurrentStudent) => [
            ...prevCurrentStudent,
            data[0].username,
          ]);
        } else {
          console.log("User not found or error in response.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  }

  useEffect(() => {
    if (studentId === "") return;

    const timer = setTimeout(() => {
      getUserById(studentId);
    }, 1100); // Delay before making the API call

    return () => {
      clearTimeout(timer);
    };
  }, [studentId]); // Only run when studentId changes

  return (
    <div>
      <ul>
        {studentList.length > 0
          ? studentList.map((student, index) => (
              <li key={index}>{student.username}</li>
            ))
          : "Scan Card to Start!"}
      </ul>

      <Invistextfield studentId={studentId} setStudentId={setStudentId} />
      <Timedreset setStudentList={setStudentList} />
    </div>
  );
};

export default List;
