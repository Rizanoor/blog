export default function Artikel(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <small>Date: {props.date}, tags: {props.tags ? props.tags.join(", ") : ""}</small>
    </>
  )
}
