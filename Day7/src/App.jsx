import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar title="Bixi" color="red" links={['Home', 'About', 'Account', 'Contact']}/>
      <Navbar title="Akash" color="blue" links={['Home', 'Services', 'Courses', 'Contact']}/>
      <Navbar title="Ayush" color="green" links={['Home', 'Product', 'Men', 'Women']}/>
    </div>
  )
}

export default App