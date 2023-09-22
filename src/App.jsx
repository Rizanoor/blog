import './App.css'
import Atrikel from './components/atrikel'
import Homepage from './pages';



function App() {

  return (
    <>
      <Homepage/>
      <Atrikel name="riza" titles={['reactjs', 'nuxtjs', 'nodejs']}/>
      <br />
      <Atrikel name="jasiman" titles={['expressjs', 'vuejs', 'nodejs']}/>
    </>
  )
}

export default App
