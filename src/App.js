import './index.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import Create from './Create';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/blog">
          <Create/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
