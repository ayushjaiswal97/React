import React, { useState } from "react";

const App = () => {
  const arr = ["Ayush", "Akash", "Manish", "Bikash"];

  const [user, setUser] = useState(0);
  return (
    <div>
      <h1>{arr[user]}</h1>
      <button
        onClick={() => {
          if (user < arr.length - 1) setUser(user + 1);
        }}>
        Change User
      </button>
    </div>
  );
};

export default App;
