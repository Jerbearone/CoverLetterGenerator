
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Settings from './components/settings/Settings'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/settings' element={<Settings></Settings>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
