// react
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';
import io from 'socket.io-client';

// page
import Home from './pages/Home/Home';
import SessionAndSocket from './pages/SessionAndSocket/SessionAndSocket';
import HabitTracker from './pages/HabitTracker/HabitTracker';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import Information from './pages/Information/Information';
import NotFound from './pages/NotFound/NotFound';

// css
import './css/reset.css';
import './css/class.css';

const App = () => {

  const MenuOpenClose = useSelector(state => state.MenuOpenClose);
  const socket = io.connect('http://127.0.0.1:5050');

  const [SocketState, setSocketState] = useState(socket.connected);
  
  useEffect(() => {
    socket.emit('joined', {});
    socket.on('status', function(data) {
      alert(data.message);
    });
  }, [SocketState]);

  return(
    <div className={MenuOpenClose.open ? 'react_app open' : 'react_app close_'}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} render={() => <Home title="홈" name="home" link="/" />} />
          <Route path="/SessionAndSocket" exact={true} render={() => <SessionAndSocket title="Session And Socket" name="session and socket" link="/SessionAndSocket" />} />
          <Route path="/HabitTracker" exact={true} render={() => <HabitTracker title="Habit Tracker" name="habit_racker" link="/HabitTracker" />} />
          <Route path="/Login" exact={true} render={() => <Login title="로그인" name="login" link="/login" />} />
          <Route path="/Join" exact={true} render={() => <Join title="회원가입" name="join" link="/join" />} />
          <Route path="/Information" exact={true} render={() => <Information title="회원정보" name="information" link="/information" />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;