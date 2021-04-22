import './index.css';
import HomeManager from './home-component/HomeManager';
import NavbarManager from './navbar-component/NavbarManager';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import CreateManager from './create-blog-component/CreateManager';
import SignupManager from './signup-login-component/SignupManager';
import { UserContext } from "./services/UserContext";
import {useState} from "react"

function App() {
const[token,setToken] = useState('')
  return (
    <Router>
    <div className="App">
    <UserContext.Provider value={{token,setToken}}>
      <NavbarManager/>
      <Switch>
        <Route exact path="/">
          <HomeManager/>
        </Route>
        <Route path="/blog">
          <CreateManager/>
        </Route>
        <Route path="/signup">
          <SignupManager/>
        </Route>
      </Switch>
      </UserContext.Provider>
    </div>
    </Router>
  );
}

export default App;
