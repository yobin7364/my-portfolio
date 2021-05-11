import { Home } from "./components/Home";
import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
