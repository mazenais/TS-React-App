import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Test from './components/Test';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import AllUsersGrid from './components/screens/AllUsersGrid';
import MyProfile from './components/screens/MyProfile';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import routes from './components/routes/routes';
import IRoute from './interfaces/route';
import { AuthContextProvider, AuthContext } from './components/context/AuthContext';
import ProfilePicChanger from './components/pics/ProfilePicChanger'
import 'antd/dist/antd.css';
import './App.css';


const App : React.FC<{}> = () => {
  return ( 
    <div className="container" style={{ height: "100%"}}>
      <AuthContextProvider> 
      <Router>
      <Navbar />
      <Switch> 
      <Route exact path="/" component={AllUsersGrid}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login} /> 
      <Route path="/user/:id" component={MyProfile} />
      </Switch>
    </Router>
    </AuthContextProvider>
    </div>
  );
}

export default App;
