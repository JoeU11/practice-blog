export default function Blog(blog) {
  let key = 0
  const parseText = blog.text.split("\n").map(paragraph => {
    key++
    return (
      <p className="blog-text" key={key}>{paragraph}</p>
    )
  })
  return (
    <section className="blog-post">
      <img src={blog.image} alt="blog" className="blog-photo" width="700px" />
      <h1 className="blog-title">{blog.title}</h1>
      {blog.subtitle && <h3 className="blog-subtitle">{blog.subtitle}</h3>}
      <p className="blog-date">{blog.date}</p>
      {parseText}
    </section>
  )
}