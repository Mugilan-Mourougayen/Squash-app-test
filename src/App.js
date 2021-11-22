import Personal from "./Components/Personal";
import Company from "./Components/Company";
import Email from "./Components/Email";
import "./Components/personalpage.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Final from "./Components/Final";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Personal} />
        <Route exact path="/company" component={Company} />
        <Route exact path="/email" component={Email} />
        <Route exact path="/final" component={Final} />
      </Switch>
    </Router>
  );
}

export default App;
