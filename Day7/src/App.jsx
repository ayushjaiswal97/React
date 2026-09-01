import Men from "./components/Men";
import Navbar from "./components/Navbar";
import Women from "./components/Women";

const App = () => {
  const user1 = {
    name : "Ayush",
    age : 22,
    gender : "male"
  }
  const user2 = {
    name : "Manisha",
    age : 26,
    gender : "female"
  }

  return <div>
   {user1.gender == 'male' ? <Men /> : <Women/>}
  </div>;
};

export default App;
