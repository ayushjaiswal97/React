import React, { useState } from "react";
import Men from "./components/Men";
import Women from "./components/Women";

const App = () => {
  const [gender, setGender] = useState("Male");

  function changeGender() {
    if (gender == "Male") {
      setGender("Female");
    } else {
      setGender("Male");
    }
  }

  return (
    <div className="parent">
      <h1>{gender}</h1>
      <button onClick={changeGender}>Change gender</button>
      {gender == 'Male' ? <Men /> : <Women/>}

    </div>
  );
};

export default App;
