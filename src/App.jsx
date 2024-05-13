import './App.css'
import Login from './components/page/Login'
import Home from './components/page/Home'
import Outro from './components/page/TakeAway'
import KaKaoLoginHandeler from './components/handler/KakaoLoginHandler'
import DogDetail from './components/dog/dogdetail/DogDetail'
import { Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <>
    <Switch>
      <Route path="/kakao/login/:code" component={KaKaoLoginHandeler} />
      <Route path="/kakao/login" component={KaKaoLoginHandeler} />
      <Route path="/home" component={Home} />
      <Route path="/outro" component={Outro} />
      <Route exact path="/" component={Login} />
  </Switch>
  </>
  )
}

export default App