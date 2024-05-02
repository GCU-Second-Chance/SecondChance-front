import './App.css'
import LayOut from './components/layout/LayOut'
import Login from './components/page/Login'
import Home from './components/page/Home'
import Outro from './components/page/Outro'
import KaKaoLoginHandeler from './components/handler/KakaoLgoinHandler'
import {Routes, Route} from 'react-router-dom'

function App() {
  

  return (
				<Routes>
          <Route element={<LayOut/>}>
            <Route
              path="/kakao/login" //redirect_url
              element={<KaKaoLoginHandeler/>}//당신이 redirect_url에 맞춰 꾸밀 컴포넌트
            />
            <Route path="/" element={<Login/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/outro" element={<Outro/>}></Route>
          </Route>
				</Routes>
  )
}

export default App
