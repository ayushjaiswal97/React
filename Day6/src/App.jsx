
const App = () => {

  const arr = [10,20,30,40];

  return (
    <div>
     {arr.filter(function(ele){
      return ele <= 30
     })}
    </div>
  )
}

export default App;