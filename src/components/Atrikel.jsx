import { useContext } from "react"
import { GlobalContext } from "../context/Index"

const ArtikelStatus = ({ isNew }) => {
  return isNew && <span> --Baru !!</span>
}


export default function Artikel(props) {
  const user = useContext(GlobalContext);
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date: {props.date}, 
        tags: {props.tags ? props.tags.join(", ") : ""}
        <ArtikelStatus isNew={props.isNew} />
      </small>

      <div>
        <small>Ditulis oleh <i>{user.username}</i></small>
      </div>
    </>
  )
}
