import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import Teams from './Teams';
import Players from "./Players";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Teams} />
          <Route path="/players" component={Players} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
