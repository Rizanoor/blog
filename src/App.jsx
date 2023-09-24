import './App.css'
import { GlobalContext } from './context/Index';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';

function App() {
  const user = {
    username: "imam"
  }

  return (
    <>
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router}/>
      </GlobalContext.Provider>
    </>
  )
}

export default App
