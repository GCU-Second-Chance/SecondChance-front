import './App.css'
import Login from './components/page/Login'
import Home from './components/page/Home'
import TakeAway from './components/page/TakeAway'
import { Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/outro" element={<TakeAway/>} />
      <Route exact path="/" element={<Login/>} />
    </Routes>
  </>
  )
}

export default App