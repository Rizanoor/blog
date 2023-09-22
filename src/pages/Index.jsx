import posts from "../post.json";
import Artikel from "../components/atrikel";

export default function Homepage() {
  return (
    <>
        <h1>simple blog</h1>
        {posts.map((blog, index) => (
          <Artikel key={index} title={blog.title} tags={blog.tags} date={blog.date}/>
        ))}
    </>
  )
}