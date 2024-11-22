import React, { useRef, useState, useEffect } from "react";
import useResetMidnight from "../hooks/useResetMidnight";
import { useGetStudent } from "../hooks/useGetStudent";
import { useAtom, atom } from "jotai";

export const dailyStudentState = atom(0);

const List = () => {
	const inputelement = useRef();
	const studentListState = useState([]);
	const [studentList, setStudentList] = studentListState;

	useResetMidnight(setStudentList);
	const getStudent = useGetStudent(
		studentListState,
		useAtom(dailyStudentState)
	);

	useEffect(() => {
		inputelement.current.focus(); // Focus the input field on mount

		const interval = setInterval(() => {
			inputelement.current.focus(); // Focus the input field on mount
		}, 100);

		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		const searchAndReplace = (rootNode) => {
			const walker = document.createTreeWalker(
				rootNode,
				NodeFilter.SHOW_TEXT,
				null,
				false
			);

			let currentNode;
			while ((currentNode = walker.nextNode())) {
				//if (currentNode.nodeValue.includes("Simon Wandel")) {
				currentNode.nodeValue = currentNode.nodeValue.replace(
					/Simon Wandel/g,
					"Slajmon Schwandel"
				);
				//}
			}
		};

		// Call the function on the entire document body or a specific container
		searchAndReplace(document.body);
	}, [studentList]);

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
		<div className="w-1/2 rounded-3xl text-white flex flex-col p-5">
			<input
				type="text"
				name=""
				id=""
				className="w-0 h-0"
				style={{ opacity: 0 }}
				ref={inputelement}
				onChange={() => {
					onInputChange();
				}}
			/>
			<ul className="text-xl">
				{studentList.length > 0
					? studentList
							.slice(-20) // Limit to the last 15 items
							.map((student, index) => (
								<div
									key={student._id}
									className="flex flex-col justify-between gap-5 items-center text-4xl"
								>
									<li
										className={`text-white ${
											student.teacher
												? `text-red-400`
												: `text-white`
										}`}
										style={{
											opacity: `${
												studentList.length <= 20
													? (index + 1) /
													  studentList.length
													: (index + 1) / 20
											}`,
										}}
									>
										{student.username}
									</li>
								</div>
							))
							.reverse()
					: "Scan Card"}
			</ul>
		</div>
	);
};

export default List;
