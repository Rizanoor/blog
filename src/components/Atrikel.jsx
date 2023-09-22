export default function Artikel() {
    const name = 'Riza';
    const titles = [
      'tutorial',
      'tutorial nextjs',
      'ada pun tutorial'
    ]
    return (
      <>
        <div>Ini adalah component artikel {name}</div>
        <div>
          {titles.map((title, index) => (
            <div key={index}>{title}</div>
          ))}
        </div>
      </>
    )
  }
  