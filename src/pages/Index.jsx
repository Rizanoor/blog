import { useState } from "react";
import postsData from "../post.json";
import Artikel from "../components/atrikel";
import Search from "../components/Search";

export default function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);

  const searchChange = (value) => {
      const filteredPosts = postsData.filter((item) => 
        item.title.includes(value)
      );
      setPosts(filteredPosts);
      setTotalPosts(filteredPosts.length);
  }
  return (
    <>
        <h1>simple blog</h1>
        <Search onSearchChanges={searchChange} totalPosts={totalPosts}/>
        {posts.map((props, index) => (
          <Artikel { ...props} key={index}/>
        ))}
    </>
  )
}