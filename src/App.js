import './index.css';
import HomeManager from './home-component/HomeManager';
import NavbarManager from './navbar-component/NavbarManager';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import CreateManager from './create-blog-component/CreateManager';
import SignupManager from './signup-login-component/SignupManager';

function App() {

  return (
    <Router>
    <div className="App">
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
    </div>
    </Router>
  );
}

export default App;
