import './App.css'
import LayOut from './components/layout/LayOut'
import Login from './components/page/Login'
import Home from './components/page/Home'
import Outro from './components/page/TakeAway'
import KaKaoLoginHandeler from './components/handler/KakaoLoginHandler'
import DogDetail from './components/dog/dogdetail/DogDetail'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router> {/* Router로 감싸기 */}
      <LayOut>
        <Switch>
          <Route exact path="/" component={<Login/>} />
          <Route path="/kakao/login" component={<KaKaoLoginHandeler/>} />
          <Route path="/home" component={<Home/>} />
          <Route path="/outro" component={<Outro/>} />
          <Route path="/home/:id" component={<DogDetail/>} />
        </Switch>
      </LayOut>
    </Router>
  )
}

export default App