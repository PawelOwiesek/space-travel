import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Destination from "../features/Destination";
import Navigation from "../common/Navigation";
import Home from "../features/Home";
import Crew from "../features/Crew";
import Technology from "../features/Technology";

function App() {
  return (
    <>
      <HashRouter>
        <Navigation
          toHome={"/home"}
          toDestination={"/destination"}
          toCrew={"/crew"}
          toTech={"/technology"}
        />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/destination" component={Destination} />
          <Route path="/crew" component={Crew} />
          <Route path="/technology" component={Technology} />
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
