import { useState } from "react";

export default function Search(props) {
    
  const [search, setSearch] = useState("");
  const onSearchChange = (event) => {
    setSearch(event.target.value)
    props.onSearchChanges(event.target.value);
  }

  return (
    <>
        <div>
          Cari artikel: <input onChange={onSearchChange}></input>
        </div>
        <div className="">Ditemukan {props.totalPosts} data dengan pencarian kata <b>{search}</b></div>
        
    </>
  )
}
