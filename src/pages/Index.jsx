import posts from "../post.json";
import Artikel from "../components/atrikel";
import { useState } from "react";

export default function Homepage() {

  const [search, setSearch] = useState("");

  const changeSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
        <h1>simple blog</h1>
        <div>
          Cari artikel: <input onChange={changeSearch}></input>
        </div>
        <div className="">Ditemukan 0 data dengan pencarian kata <b>{search}</b></div>
        {posts.map(({title, tags, date}, index) => (
          <Artikel { ...{title, tags, date}} key={index}/>
        ))}
    </>
  )
}