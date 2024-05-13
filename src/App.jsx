import './App.css'
import Login from './components/page/Login'
import Home from './components/page/Home'
import Outro from './components/page/TakeAway'
import KaKaoLoginHandeler from './components/handler/KakaoLoginHandler'
import { Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <>
    <Routes>
      <Route path="/kakao/login" element={<KaKaoLoginHandeler/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/outro" element={<Outro/>} />
      <Route exact path="/" element={<Login/>} />
  </Routes>
  </>
  )
}

export default App