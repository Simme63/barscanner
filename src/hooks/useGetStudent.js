export function useGetStudent(StudentListState, DailyStudentState) {
    const [dailystudents, setDailyStudents] = DailyStudentState;
    const [studentList, setStudentList] = StudentListState;
    return async (id) => {
        const response = await fetch(
            `https://ntifoodpeople.vercel.app/api/users/${id.toLowerCase()}`
        );
        if (response.ok) {
            const data = await response.json();
            console.log("data:", data);

            if (studentList.some((elm) => elm._id === data[0]._id)) {
                return;
            }
            setStudentList([...studentList, data[0]]);
            setDailyStudents(dailystudents + 1);
        } else {
            if (studentList.some((elm) => elm._id === id)) {
                return;
            }
            setStudentList([...studentList, { _id: id, username: "Unknown" }]);
            setDailyStudents(dailystudents + 1);
        }
    }
}