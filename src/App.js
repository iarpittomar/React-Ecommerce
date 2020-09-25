import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shopPage";
import Header from "./components/header/header";
import SigninAndSignUp from "./pages/signInandSignUp/signInandSignUp";

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shopPage" component={ShopPage} />
        <Route path="/signin" component={SigninAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
