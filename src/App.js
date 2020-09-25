import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shopPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shopPage" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
