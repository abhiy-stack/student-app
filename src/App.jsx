import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API request failed");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch API data.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>Student Information</h1>

        <p><strong>Name:</strong> Abhimanyu</p>
        <p><strong>Course:</strong> BCA Cyber Security</p>
        <p><strong>College:</strong> T. John College</p>

        <hr />

        <h2>API Data</h2>

        {loading && <p>Loading API data...</p>}
        {error && <p>{error}</p>}

        {user && (
          <div>
            <p><strong>Sample Name:</strong> {user.name}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>City:</strong> {user.address.city}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;