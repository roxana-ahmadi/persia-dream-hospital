import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import PhysicianListContainer from "./containers/physicianList.container";
import PhysicianInfoContainer from "./containers/physicianInfo.container";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PhysicianListContainer />
        </Route>
        <Route exact path="/physician-info">
          <PhysicianInfoContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
