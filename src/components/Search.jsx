import { useState } from "react";

export default function Search(props) {
    
  const [search, setSearch] = useState("");

  const onSearchChange = () => {
    props.onSearchChanges(search);
  }

  const searchKeyDown = (e) => {
    if ((e.key === "Enter")) {
      onSearchChange()
    }
  }

  return (
    <>
        <div>
          Cari artikel: 
          <input 
            onChange={(e) => setSearch(e.target.value)} 
            onKeyDown={searchKeyDown}>
          </input>
          <button onClick={onSearchChange}>cari</button>
        </div>
        <div className="">Ditemukan {props.totalPosts} data dengan pencarian kata <b>{search}</b></div>
        
    </>
  )
}
