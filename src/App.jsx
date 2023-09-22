import './App.css'
import Atrikel from './components/atrikel'

function App() {

  return (
    <>
      <Atrikel name="riza" titles={['reactjs', 'nuxtjs', 'nodejs']}/>
      <br />
      <Atrikel name="jasiman" titles={['expressjs', 'vuejs', 'nodejs']}/>
    </>
  )
}

export default App
