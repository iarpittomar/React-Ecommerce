import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shopPage";
import Header from "./components/header/header";
import SigninAndSignUp from "./pages/signInandSignUp/signInandSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (!!userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shopPage" component={ShopPage} />
          <Route path="/signin" component={SigninAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
