import './App.css'
import Home from './components/page/Home'
import { Routes, Route } from 'react-router-dom'; 
import Onboarding from './components/page/Onboarding';

function App() {
  return (
    <>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route exact path="/" element={<Onboarding/>} />
    </Routes>
  </>
  )
}

export default App