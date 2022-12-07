export default function Blog(blog) {
  return (
    <section className="blog-post">
      <img src={blog.image} alt="blog-image" className="blog-photo" />
      <h1 className="blog-title">{blog.title}</h1>
      <h3 className="blog-subtitle">{blog.subtitle}</h3>
      <p className="blog-date">{blog.date}</p>
      <p className="blog-text">{blog.text}</p>
    </section>
  )
}