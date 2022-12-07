import './App.css';
import Navbar from "./components/Navbar"
import BlogData from './BlogData';

function App() {
  console.log(BlogData)
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
