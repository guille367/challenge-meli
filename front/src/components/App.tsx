import React from "react";
import Search from "./Search";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Results from "./Results";
import Detail from "./Detail";

function App() {
  return (
    <Router>
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <Search />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-12">
        <div className="col-start-2 col-span-10">
          <Switch>
            <Route path="/items/:id">
              <Detail />
            </Route>
            <Route path="/items">
              <Results />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
