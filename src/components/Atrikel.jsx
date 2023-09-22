export default function Artikel(props) {

    return (
      <>
        <div>Ini adalah component artikel {props.name}</div>
        <div>
          {props.titles.map((title, index) => (
            <div key={index}>- {title}</div>
          ))}
        </div>
      </>
    )
  }
  