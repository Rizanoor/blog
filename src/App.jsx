import './App.css'
import Homepage from './pages';
import { GlobalContext } from './context/Index';

function App() {
  const user = {
    username: "imam"
  }

  return (
    <>
      <GlobalContext.Provider value={user}>
        <Homepage/>
      </GlobalContext.Provider>
    </>
  )
}

export default App
