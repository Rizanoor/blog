const ArtikelStatus = ({ isNew }) => {
  return isNew && <span> --Baru !!</span>
}

const NewArtikel = () => {
  return <span><b> --Baru !!</b></span>
}

export default function Artikel(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date: {props.date}, 
        tags: {props.tags ? props.tags.join(", ") : ""}
        {/* {props.isNew && " --Baru !!"} */}
        {/* <ArtikelStatus isNew={props.isNew} /> */}
        {props.isNew && <NewArtikel/>}
      </small>
    </>
  )
}
