import './index.css';
import HomeManager from './home-component/HomeManager';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import CreateManager from './create-blog-component/CreateManager';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <HomeManager/>
        </Route>
        <Route path="/blog">
          <CreateManager/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
