import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");

  const [allUsers, setallUsers] = useState([]);

  function submitHandler(e) {
    e.preventDefault();

    const newUsers = [...allUsers];
    newUsers.push(username);
    setallUsers(newUsers);

    setUsername("");
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          required
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
      {allUsers.map((elem, idx) => {
        return <h4 key={idx}>{elem}</h4>;
      })}
    </div>
  );
};

export default App;
