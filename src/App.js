import { Home } from "./components/Home";
import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";

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
        </Switch>
      </Router>
    </>
  );
}

export default App;
