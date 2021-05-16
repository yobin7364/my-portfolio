import { Home } from "./components/Home";
import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import { Test } from "./components/Test";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/contact">
            <ContactForm />
          </Route>

          <Route exact path="/test">
            <Test />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
