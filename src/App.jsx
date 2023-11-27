
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Settings from './components/settings/Settings'
import MainNavbar from './components/MainNavbar'

function App() {
  return (
    <>
      <div className='bg-theOffWhite p-8'>
        <p className="text-3xl bg-theLightBrown p-4">Cover Letter Generator</p>
        

        <BrowserRouter>
          <MainNavbar></MainNavbar>
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
