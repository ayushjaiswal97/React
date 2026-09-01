import React from "react";

const App = () => {
  const btnClick = () => {
    console.log("Clicked to download");
  };

  return (
    <div>
      <button
        onClick={()=>{
          btnClick()
        }}
        className="active:scale-95 cursor-pointer bg-emerald-500 text-white px-6 py-3 rounded m-2">
        Click to download
      </button>
    </div>
  );
};

export default App;
