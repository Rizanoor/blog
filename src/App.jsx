import './App.css'
import Homepage from './pages';

function App() {
  const value = false;
  return (
    <>
      {value ? 'benar' : 'salah'}
      <Homepage/>
    </>
  )
}

export default App
