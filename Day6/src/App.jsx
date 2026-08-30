import Card from "./components/Card";

const App = () => {

  const users = ["Ayush", "Aman", "Pintu", "Manish"]

  return (
    <div className='p-10 text-white bg-black h-screen'>
     {users.map((ele, id)=>{
      return <Card users={ele} key={id}/>
     })}
    </div>
  );
};

export default App;
