
const App = () => {

  const name = "Ayush";
  const age = 22;
  const arr = ["Ayush","Chandu","Rahul","Ritik"];

  return (
    <div>
     {arr.map(function(ele){
      return <h1>{ele}</h1>
     })}
    </div>
  )
}

export default App;