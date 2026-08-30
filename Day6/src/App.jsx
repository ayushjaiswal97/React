import Button from "./components/Button";
import Card from "./components/Card";

const App = () => {
  return (
    <div className='p-10 bg-black h-screen'>
     <Card user="Ayush" age={22}/>
     <Card user="Rahul" age={23}/>
     <Button text="Explore"/>
     <Button text="Buy Now"/>
    </div>
  );
};

export default App;
