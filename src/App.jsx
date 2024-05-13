import './App.css'
import LayOut from './components/layout/LayOut'
import Login from './components/page/Login'
import Home from './components/page/Home'
import Outro from './components/page/TakeAway'
import KaKaoLoginHandeler from './components/handler/KakaoLoginHandler'
import { Switch, Route } from 'react-router-dom'
import DogDetail from './components/dog/dogdetail/DogDetail'

function App() {
  return (
    <Switch>
      <Route path="/kakao/login" component={KaKaoLoginHandeler} />
      <Route>
        <LayOut>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/outro" component={Outro} />
            <Route path="/home/:id" component={DogDetail} />
          </Switch>
        </LayOut>
      </Route>
    </Switch>
  )
}

export default App