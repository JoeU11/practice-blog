import './App.css';
import Navbar from "./components/Navbar";
import BlogData from './BlogData';
import Blog from "./components/Blog";

function App() {
  console.log(BlogData)
  const blogElements = BlogData.map(blog => {
    return (<Blog
      key={blog.id}
      {...blog}
    />
    )
  })

  console.log(blogElements)

  return (
    <div className="App">
      <Navbar />
      {blogElements}
    </div>
  );
}

export default App;
