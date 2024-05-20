import './App.css'
import Home from './components/page/Home'
import { Routes, Route } from 'react-router-dom'; 
import Onboarding from './components/page/Onboarding';
import KakaoShare from './components/handler/KakaoShare';

function App() {
  return (
    <>
    <Routes>
      <Route path='/share' element={<KakaoShare/>}/>
      <Route path="/home" element={<Home/>} />
      <Route exact path="/" element={<Onboarding/>} />
    </Routes>
  </>
  )
}

export default App