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
            

            setStudentList([...studentList, ...shuffleList(data)]);
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

function shuffleList(list) {
    // Copy the original list to avoid modifying the original array
    const shuffledList = [...list];

    // Fisher-Yates shuffle algorithm
    for (let i = shuffledList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Get a random index

        // Swap elements at index i and j
        [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
    }

    return shuffledList;
}