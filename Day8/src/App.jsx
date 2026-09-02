import { useState } from "react";

const App = () => {

  const [marks, setMarks] = useState([93, 81, 95, 72, 33])

  function graceStudent() {
    const newMarks = marks.map(function(ele){
      return ele+5
    })
    setMarks(newMarks)
   }

  return (
    <div>
      {marks.map((elem, idx) => {
        return (
          <h1 key={idx}>
            Student {idx + 1} = {elem}
            ({elem>33? 'Pass' : 'Fail'})
          </h1>
        );
      })}

      <button onClick={graceStudent}>Give them grace</button>
    </div>
  );
};

export default App;