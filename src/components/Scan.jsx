import React, { useState } from "react";

function DataFetcher() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  // Function to handle input changes
  const handleInputChange = (e) => {
    setId(e.target.value); // Update the ID state
  };

  // Function to handle the fetch request
  const fetchData = async () => {
    const url = `http://192.168.198.178:1337/students/${id}`; // Insert ID into URL

    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result); // Save response data to state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Fetch Data by ID</h1>
      <input
        type="text"
        value={id}
        onChange={handleInputChange}
        placeholder="Enter ID"
      />
      <button onClick={fetchData}>Fetch Data</button>

      {data && (
        <div>
          <h2>Response Data:</h2>
          <pre>{data.name}</pre>
        </div>
      )}
    </div>
  );
}

export default DataFetcher;
