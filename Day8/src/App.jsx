import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState("Sarthak");

  return (
    <div>
      <h1>{user}</h1>
      <button
        onClick={() => {
          console.log(user);
          setUser("Ayush");
          console.log(user);
        }}
      >
        Change User
      </button>
    </div>
  );
};

export default App;
