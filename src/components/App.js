import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import DefaultPage from "../pages/DefaultPage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={Gallery} />
        <Route component={DefaultPage} />
      </Switch>
    </div>
  );
};

export default App;
