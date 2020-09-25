import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shopPage";
import Header from "./components/header/header";

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shopPage" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
