import './App.css'
import LayOut from './components/layout/LayOut'
import Login from './components/page/Login'
import Home from './components/page/Home'
import Outro from './components/page/TakeAway'
import KaKaoLoginHandeler from './components/handler/KakaoLoginHandler'
import {Routes, Route} from 'react-router-dom'
import DogDetail from './components/dog/dogdetail/DogDetail'

function App() {
  

  return (
				<Routes>
          <Route element={<LayOut/>}>
            <Route
              path="/kakao/login" //redirect_url
              element={<KaKaoLoginHandeler/>}
            />
            <Route path="/" element={<Login/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/outro" element={<Outro/>}></Route>
            <Route path='/home/:id' element={<DogDetail/>} />
          </Route>
				</Routes>
  )
}

export default App
