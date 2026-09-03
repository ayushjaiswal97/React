import React from 'react'

const App = () => {

  function submitHandler(e){
    e.preventDefault();
    console.log('Form Submitted');
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input 
        type="text" 
        placeholder='Enter your name'
        onChange={(e)=>{
          console.log(e.target.value)
        }}
        value='harsh'
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App