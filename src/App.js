import "./App.css";
import Index from "./pages/index";
import AnimePage from "./pages/AnimePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/anime-info" component={AnimePage} />
          <Route exact="*" component={Index} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
