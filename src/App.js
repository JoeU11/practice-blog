import './App.css';
import Navbar from "./components/Navbar";
import BlogData from './BlogData';
import Blog from "./components/Blog";

function App() {
  const blogElements = BlogData.map(blog => {
    return (<Blog
      key={blog.id}
      {...blog}
    />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <section id="blog-container">
        {blogElements}
      </section>
    </div>
  );
}

export default App;
