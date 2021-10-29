import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Events from './Component/Events/Events';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Notfound from './Component/Nofound/Notfound';
import Registration from './Component/Registration/Registration';
import AuthProvider from './Context/Authprovider';
import PrivetRoute from './PrivetRoute/PrivetRoute';

function App() {
  return (
    <div className="App">
     <AuthProvider>
       <BrowserRouter>
     <Header/>
     <Switch>
       <Route exact path="/">
        <Home/>
       </Route>
       <Route exact path="/home">
        <Home/>
       </Route>
       <PrivetRoute exact path="/events">
        <Events/>
       </PrivetRoute>
       <Route exact path="/login">
        <Login/>
       </Route>
       <Route exact path="/registration">
        <Registration/>
       </Route>
       <Route exact path="*">
        <Notfound/>
       </Route>
     </Switch>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
