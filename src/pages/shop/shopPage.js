import React, { Components } from "react";
import SHOP_DATA from "./shop.data.js";

class ShopPage extends Components {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    return <div>SHOPPAGE</div>;
  }
}

export default ShopPage;
