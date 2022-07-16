import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import Teams from './Teams';
import Fetch from "./Fetch";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Teams} />
          <Route path="/players" component={Fetch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
