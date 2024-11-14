import React, { useRef, useState, useEffect } from "react";
import useResetMidnight from "../hooks/useResetMidnight";
import { useGetStudent } from "../hooks/useGetStudent";

const List = () => {
	const inputelement = useRef();
	const studentListState = useState([]);
  const [studentList, setStudentList] = studentListState;
	const dailyStudentState = useState(0);
  const [dailystudents, setDailyStudents] = dailyStudentState;
	useResetMidnight(setStudentList);
	const getStudent = useGetStudent(studentListState, dailyStudentState);

	useEffect(() => {
		inputelement.current.focus(); // Focus the input field on mount

		const imelker = setInterval(() => {
			inputelement.current.focus(); // Focus the input field on mount
		}, 100);

		return () => {
			clearInterval(imelker);
		};
	}, []);

	let timeoutid = useRef(0);

	function onInputChange() {
		clearTimeout(timeoutid.current);

		timeoutid.current = setTimeout(() => {
			getStudent(inputelement.current.value);
			inputelement.current.value = "";
			console.log(studentList);
		}, 200);
	}

	return (
		<>
			<input
				type="text"
				name=""
				id=""
				style={{ opacity: 0 }}
				ref={inputelement}
				onChange={() => {
					onInputChange();
				}}
			/>

			<ul>
				{studentList.length > 0
					? studentList.map((student) => (
							<li key={student._id} className="bg-slate-600">
								{student.username}
							</li>
					  ))
					: "Scan Card"}
			</ul>
			<p>Number of students today: {dailystudents}</p>
		</>
	);
};

export default List;
